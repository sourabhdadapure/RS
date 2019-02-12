import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Splash } from './screens'

const AppStack = createStackNavigator({
  Splash: { screen: Splash }
})
const App = createAppContainer(AppStack)

export default class Routes extends React.Component {
  render() {
    return <App />
  }
}
