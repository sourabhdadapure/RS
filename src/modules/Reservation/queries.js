import gql from 'graphql-tag'

export const createReservation = gql`
  mutation createReservation(
    $name: String!
    $hotelName: String!
    $arrivalDate: String!
    $departureDate: String!
  ) {
    createReservation(
      data: {
        name: $name
        hotelName: $hotelName
        arrivalDate: $arrivalDate
        departureDate: $departureDate
      }
    ) {
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export const getAllReservations = gql`
  {
    reservations {
      id
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export const deleteReservation = gql`
  mutation deleteReservation($id: ID!) {
    deleteReservation(where: { id: $id }) {
      name
    }
  }
`
