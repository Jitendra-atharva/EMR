import React, {PureComponent} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {AppContext} from '../framework/AppContext';
const {width} = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

//@ts-ignore
export default class NetworkInfo extends PureComponent {
  static contextType = AppContext;
  connectivityChange: any;
  state = {
    isConnected: true,
  };

  componentDidMount() {
    this.connectivityChange = NetInfo.addEventListener(
      this.handleConnectivityChange,
    );
  }

  componentWillUnmount() {
    this.connectivityChange();
  }

  handleConnectivityChange = (state: any) => {
    this.setState({isConnected: state.isConnected}, () => {
      if (this.context) {
        this.context.dispatch({
          type: 'UPDATE_STATE',
          payload: {isConnected: state.isConnected},
        });
      }
    });
  };

  render() {
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return null;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
  },
  offlineText: {color: '#fff'},
});
