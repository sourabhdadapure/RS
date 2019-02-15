import React from 'react'
import { Text, View, Alert } from 'react-native'
import ReservationList from '../../components/ReservationList'
import AddReservationButton from '../../components/AddReservationButton'
import { Query, graphql } from 'react-apollo'
import gql from 'graphql-tag'
// import graphql from 'graphql'

const getAllReservations = gql`
  {
    reservations {
      id
      hotelName
      arrivalDate
      departureDate
    }
  }
`

const DeleteReservation = gql`
  mutation delete($id: String!) {
    deleteReservation(where: { id: $id }) {
      name
    }
  }
`

console.log('GRAPHQL', getAllReservations)

const SplashComponent = graphql(getAllReservations)(props => {
  const { error, reservations } = props.data
  const { onAddButton, onDelete } = props
  console.log('GRAPHQL', props)
  if (error) {
    return <Text>{error}</Text>
  }
  if (reservations) {
    return (
      <View>
        <ReservationList
          onDelete={() => {
            console.log('DELETED SUCCESSFULLY')
            createReservation({
              variables: {
                id: reservations.id
              }
            }).then(() => Alert.alert('Reservation Deleted Successfully'))
          }}
          reservations={reservations}
        />
        <AddReservationButton onAddButton={onAddButton} />
      </View>
    )
  }

  return <Text>Loading...</Text>
})

export default SplashComponent
