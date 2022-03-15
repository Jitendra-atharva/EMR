import {AppContext} from '../../framework/AppContext';
import {BlockComponent} from '../../framework/BlockComponent';
import {IBlock} from '../../framework/IBlock';
import {Message} from '../../framework/Message';
import MessageEnum, {getName} from '../../framework/MessageEnum';
import {runEngine} from '../../framework/RunEngine';
import {customAlert, getHeaders} from '../../utilities/Util';
const config = require('../../utilities/networkConfig');
import {useTranslation} from 'react-i18next';
const {t, i18n} = useTranslation();
export interface Props {
  navigation: any;
}

interface S {
  userName: string;
  password: string;
  isShowPassword: boolean;
}

interface SS {}

export default class LoginController extends BlockComponent<Props, S, SS> {
  userNameRef: any = '';
  passwordRef: any = '';
  loginApiCallId: any = '';

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    // REGISTER EVENT
    this.subScribedMessages = [getName(MessageEnum.RestAPIResponseMessage)];

    this.state = {
      userName: 'eve.holt@reqres.in',
      password: 'pistol',
      isShowPassword: false,
    };

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  static contextType = AppContext;

  UNSAFE_componentWillMount() {}
  async componentDidMount() {
    super.componentDidMount();
  }
  async componentWillUnmount() {
    super.componentWillUnmount();
  }

  //SCREEN RELATED FUNCTION AND OTHER STUFF START
  handleChangeUserName = (e: string) => {
    this.setState({userName: e});
  };
  handleChangePassword = (e: string) => {
    this.setState({password: e});
  };

  onPressLogin = () => {
    if (!this.context.state.isConnected) {
      customAlert('No Internet', 'Turn on internet connection and try again');
      return;
    }
    this.doLogin();
  };

  //SCREEN RELATED FUNCTION AND OTHER STUFF END

  //SCREEN RELATED API CALL START
  doLogin = () => {
    const header = getHeaders({});

    const attrs = new FormData();
    attrs.append('email', this.state.userName);
    attrs.append('password', this.state.password);

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage),
    );

    this.loginApiCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestApiEndPoint),
      config.endPoint.login,
    );

    requestMessage.addData(
      getName(MessageEnum.RestApiHeader),
      JSON.stringify(header),
    );
    requestMessage.addData(getName(MessageEnum.RestApiBody), attrs);

    requestMessage.addData(
      getName(MessageEnum.RestApiMethod),
      config.method.post,
    );
    console.log('requestMessage', requestMessage);
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };

  //SCREEN RELATED API CALL END

  //HANDLE AND GET API RESPONSE

  async receive(from: string, message: Message) {
    console.log('[Login]');
    if (getName(MessageEnum.RestAPIResponseMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponseDataMessage),
      );
      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponseSuccessMessage),
      );
      var errorResponse = message.getData(
        getName(MessageEnum.RestAPIResponseErrorMessage),
      );
      console.log(
        '[Login responseJson]',
        apiRequestCallId === this.loginApiCallId,
        responseJson,
      );
      if (apiRequestCallId === this.loginApiCallId && responseJson) {
        console.log('[Login]', responseJson);
        if (this.context) {
          this.context.dispatch({
            type: 'UPDATE_STATE',
            payload: {isLogin: true},
          });
        }
        //api response successfully
      } else if (errorResponse) {
        customAlert(t('apiError'), errorResponse);
        console.log('[Login]', errorResponse);
        //api response error
      }
    }
  }
}
