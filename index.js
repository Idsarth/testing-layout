require('react-native').unstable_enableLogBox()
import 'react-native-gesture-handler'

import { AppRegistry } from 'react-native'
import Navigation from './src/navigation/navigation'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => Navigation)
