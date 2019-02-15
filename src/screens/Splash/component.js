import React from 'react'
import { Text, View } from 'react-native'
import ReservationList from '../../components/ReservationList'
import AddReservationButton from '../../components/AddReservationButton'
import { Query, graphql } from 'react-apollo'
import gql from 'graphql-tag'
// import graphql from 'graphql'

const getAllReservations = gql`
  {
    reservations {
      hotelName
      arrivalDate
      departureDate
    }
  }
`

console.log('GRAPHQL', getAllReservations)

const SplashComponent = graphql(getAllReservations)(props => {
  const { error, reservations } = props.data
  const { onAddButton } = props
  console.log('GRAPHQL', props)
  if (error) {
    return <Text>{error}</Text>
  }
  if (reservations) {
    return (
      <View>
        <ReservationList reservations={reservations} />
        <AddReservationButton onAddButton={onAddButton} />
      </View>
    )
  }

  return <Text>Loading...</Text>
})

export default SplashComponent
