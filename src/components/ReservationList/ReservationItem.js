import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
  top: 100;
  border-radius: 15;
  background-color: #0e2b54;
  margin-horizontal: 5%;
  align-items: center;
  padding-vertical: 30;
`

const HotelName = styled.Text`
  font-size: 20;
  padding-vertical: 10;
  color: white;
`

const DatesText = styled.Text`
  font-size: 18;
  padding-vertical: 10;
  color: turquoise;
`

const Space = styled.View`
  height: 25;
`

export default class ReservationItem extends React.Component {
  render() {
    const { hotel, arrival, departure } = this.props
    return (
      <Wrapper>
        <HotelName>{hotel}</HotelName>
        <DatesText>
          Arrival: {arrival}
          {'\t'}Departure: {departure}
        </DatesText>
      </Wrapper>
    )
  }
}
