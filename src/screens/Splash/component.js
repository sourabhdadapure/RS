import React from 'react'
import PropTypes from 'prop-types'
import { Text, Alert, ScrollView } from 'react-native'
import styled from 'styled-components'

import {
  AddReservationButton,
  Loading,
  ReservationItem
} from '../../components'
import { graphql, Mutation } from 'react-apollo'

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
              <ScrollView style={{ marginTop: 20 }}>
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

    return <Loading />
  }
)

SplashComponent.propTypes = {
  onAddButton: PropTypes.func.isRequired
}

export default SplashComponent
