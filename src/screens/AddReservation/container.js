import React from 'react'
import { Alert } from 'react-native'
import AddReservationComponent from './component'

export default class AddReservationContainer extends React.Component {
  render() {
    return (
      <AddReservationComponent
        onSuccess={() => {
          this.props.navigation.goBack()
          Alert.alert('Reservation Added Successfully!!!')
        }}
        onError={() => {
          Alert.alert('Something went wrong, Please try again later')
        }}
      />
    )
  }
}
