import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  signUp,
  dashboard,
  Login,
  tab1,
  tab2,
  tab3,
  tab4,
} from './src/module';
import Provider, {AppContext} from './src/framework/AppContext';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NetworkInfo from './src/components/NetworkInfo';
import './src/localization/i18n';
import 'react-native-gesture-handler';
import {CustomDrawerContent} from './src/components';
import Icon from 'react-native-vector-icons/AntDesign';
import InstanceCreate from './InstanceCreate';

const screenOptions = (route: any, color: any) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Browse':
      iconName = 'appstore-o';
      break;
    case 'Library':
      iconName = 'folder1';
      break;
    default:
      break;
  }
  //@ts-ignore
  return <Icon name={iconName} color={'green'} size={24} />;
};

const BottomTaStack = createBottomTabNavigator();
function BottomTaStackFlow() {
  return (
    <BottomTaStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        activeTintColor: 'green',
        inactiveTintColor: '#d9d9d9',
        style: {
          borderTopColor: '#66666666',
          backgroundColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
      <BottomTaStack.Screen name="ABC" component={tab1} />
      <BottomTaStack.Screen name="CDE" component={tab2} />
      <BottomTaStack.Screen name="EFG" component={tab3} />
      <BottomTaStack.Screen name="HIJ" component={tab4} />
    </BottomTaStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerFlow() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Tab" component={BottomTaStackFlow} />
      <Drawer.Screen name="Dashboard" component={dashboard} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  const {state} = React.useContext(AppContext);
  console.log(state);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {state.isLogin ? (
        // <Stack.Screen name="Home" component={HomeFlow} />
        <Stack.Screen name="Home" component={DrawerFlow} />
      ) : (
        <Stack.Screen name="Auth" component={AuthFlow} />
      )}
    </Stack.Navigator>
  );
}

const AuthStack = createNativeStackNavigator();
function AuthFlow() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="signUp" component={signUp} />
    </AuthStack.Navigator>
  );
}

const SplashStack = createNativeStackNavigator();
function SplashFlow() {
  return (
    <NavigationContainer>
      <SplashStack.Navigator screenOptions={{headerShown: false}}>
        <SplashStack.Screen name="Splash" component={Splash} />
        <SplashStack.Screen name="App" component={App} />
      </SplashStack.Navigator>
    </NavigationContainer>
  );
}

if (!InstanceCreate.instance) {
  const defaultProps = {
    navigation: null,
    id: 'HomeScreen',
  };
  new InstanceCreate(defaultProps);
}

export default () => {
  return (
    
    <Provider>
      <SplashFlow />
      <NetworkInfo />
    </Provider>
  );
};
