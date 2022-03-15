import {BlockComponent} from './src/framework/BlockComponent';
import NavigationBlock from './src/framework/NavigationBlock';
import SingletonFactory from './src/framework/SingletonFactory';

SingletonFactory.getRestBlockInstance();
SingletonFactory.getSessionBlockInstance();
new NavigationBlock();

interface Props {
  navigation: any;
  id: string;
}

// Customizable Area Start
interface S {}

interface SS {}

class InstanceCreate extends BlockComponent<Props, S, SS> {
  static instance: InstanceCreate;

  constructor(props: Props) {
    super(props);
    InstanceCreate.instance = this;
  }

  render() {
    return null;
  }
}

export default InstanceCreate;
