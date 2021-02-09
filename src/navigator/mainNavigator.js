import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile202854Navigator from '../features/UserProfile202854/navigator';
import Maps202835Navigator from '../features/Maps202835/navigator';
import Settings202813Navigator from '../features/Settings202813/navigator';
import Settings202798Navigator from '../features/Settings202798/navigator';
import NotificationList202797Navigator from '../features/NotificationList202797/navigator';
import Maps202796Navigator from '../features/Maps202796/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile202854: { screen: UserProfile202854Navigator },
Maps202835: { screen: Maps202835Navigator },
Settings202813: { screen: Settings202813Navigator },
Settings202798: { screen: Settings202798Navigator },
NotificationList202797: { screen: NotificationList202797Navigator },
Maps202796: { screen: Maps202796Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
