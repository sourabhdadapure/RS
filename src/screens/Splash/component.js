import React from 'react'
import styled from 'styled-components'
import ReservationList from '../../components/ReservationList'

export default class Splash extends React.Component {
  render() {
    return (
      <ReservationList
        reservations={[
          {
            hotelName: 'Omni Parker Hotel',
            arrivalDate: '1/12/19',
            departureDate: '1/24/19'
          },
          {
            hotelName: 'Omni Parker Hotel',
            arrivalDate: '1/12/19',
            departureDate: '1/24/19'
          },
          {
            hotelName: 'Omni Parker Hotel',
            arrivalDate: '1/12/19',
            departureDate: '1/24/19'
          }
        ]}
      />
    )
  }
}
