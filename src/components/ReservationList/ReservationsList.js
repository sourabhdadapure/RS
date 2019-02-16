import React from 'react'
import styled from 'styled-components'
import { ScrollView } from 'react-native'
import ReservationItem from './ReservationItem'

const Wrapper = styled.View``

const Space = styled.View`
  height: 25;
`

export default class ReservationList extends React.Component {
  render() {
    const { reservations, onDelete } = this.props
    return (
      <ScrollView>
        {reservations &&
          reservations.map(reservedItem => (
            <Wrapper key={reservations.indexOf(reservedItem)}>
              <ReservationItem
                onDelete={onDelete}
                id={reservedItem.id}
                hotel={reservedItem.hotelName}
                arrival={reservedItem.arrivalDate}
                departure={reservedItem.departureDate}
              />
              <Space />
            </Wrapper>
          ))}
      </ScrollView>
    )
  }
}
