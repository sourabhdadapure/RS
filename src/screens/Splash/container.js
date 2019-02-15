import React from 'react'
import Splash from './component'

export default class SplashContainer extends React.Component {
  render() {
    return (
      <Splash
        onAddButton={() => this.props.navigation.navigate('AddReservation')}
      />
    )
  }
}
