/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

//npx react-native init authrn --template react-native-template-typescript
//react-native start
//react-native run-android
//sé der pau deleta o node modules e depois da um npm install

//Dependencias de navegação
//yarn add @react-navigation/native

//Instalar outros pacotes sem usar o expo 
//yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

//com expo
//expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

//yarn add @react-navigation/stack

//yarn add @react-native-community/async-storage