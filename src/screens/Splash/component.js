import React from 'react'
import { Text } from 'react-native'
import ReservationList from '../../components/ReservationList'
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

// export default class Splash extends React.Component {
//   state = {
//     reservations: []
//   }

//   render() {
//     return (
//       <ReservationList
//         reservations={[
//           {
//             hotelName: 'Omni Parker Hotel',
//             arrivalDate: '1/12/19',
//             departureDate: '1/24/19'
//           },
//           {
//             hotelName: 'Omni Parker Hotel',
//             arrivalDate: '1/12/19',
//             departureDate: '1/24/19'
//           },
//           {
//             hotelName: 'Omni Parker Hotel',
//             arrivalDate: '1/12/19',
//             departureDate: '1/24/19'
//           }
//         ]}
//       />
//     )
//   }
// }

const SplashComponent = graphql(getAllReservations)(props => {
  const { error, reservations } = props.data
  console.log('GRAPHQL', props)
  if (error) {
    return <Text>{error}</Text>
  }
  if (reservations) {
    return <ReservationList reservations={reservations} />
  }

  return <Text>Loading...</Text>
})

export default SplashComponent
