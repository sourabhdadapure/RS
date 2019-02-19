import React from 'react'
import { Text, Alert, ScrollView } from 'react-native'
import styled from 'styled-components'
import ReservationItem from '../../components/ReservationList/ReservationItem'
import AddReservationButton from '../../components/AddReservationButton'
import { Query, graphql, Mutation } from 'react-apollo'

import {
  getAllReservations,
  deleteReservation
} from '../../modules/Reservation'

const Wrapper = styled.View``

const Space = styled.View`
  height: 25;
`

console.log('GRAPHQL', getAllReservations)

const SplashComponent = graphql(getAllReservations, deleteReservation)(
  props => {
    const { error, reservations } = props.data
    const { onAddButton } = props
    if (error) {
      return <Text>{error}</Text>
    }
    if (reservations) {
      return (
        <Mutation mutation={deleteReservation}>
          {deleteReservation => (
            <Wrapper>
              <ScrollView>
                {reservations &&
                  reservations.map(reservedItem => (
                    <Wrapper key={reservations.indexOf(reservedItem)}>
                      <ReservationItem
                        onDelete={() => {
                          deleteReservation({
                            variables: {
                              id: reservedItem.id
                            }
                          })
                            .then(() =>
                              Alert.alert(
                                `Reservation ${
                                  reservedItem.hotelName
                                } Deleted Successfully`
                              )
                            )
                            .catch(error => Alert.alert(error.toString()))
                        }}
                        hotel={reservedItem.hotelName}
                        arrival={reservedItem.arrivalDate}
                        departure={reservedItem.departureDate}
                      />
                      <Space />
                    </Wrapper>
                  ))}
              </ScrollView>

              <AddReservationButton onAddButton={onAddButton} />
            </Wrapper>
          )}
        </Mutation>
      )
    }

    return <Text>Loading...</Text>
  }
)

export default SplashComponent
