/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native'
import React from 'react'
import App from '../App'
import { MockedProvider } from 'react-apollo/test-utils'

import {
  getAllReservations,
  createReservation,
  deleteReservation
} from '../src/modules/Reservation'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import SplashComponent from '../src/screens/Splash'
import AddReservationComponent from '../src/screens/AddReservation'
import { Loading } from '../src/components'
const wait = require('waait')

it('renders correctly', () => {
  renderer.create(<App />)
})

//

const mockGetAllReservations = [
  {
    request: {
      query: getAllReservations
    },
    result: {
      data: {}
    }
  }
]

const mockCreateReservation = [
  {
    request: createReservation,
    variables: {
      name: 'Sourabh',
      hotelName: 'HiltonCT',
      arrivalDate: '02/25/2019',
      departureDate: '02/28/2019'
    },
    result: {
      data: {
        name: 'Sourabh',
        hotelName: 'HiltonCT',
        arrivalDate: '02/25/2019',
        departureDate: '02/28/2019'
      }
    }
  }
]

it('Shows spinner when loading', () => {
  renderer.create(
    <MockedProvider mocks={[]}>
      <Loading />
    </MockedProvider>
  )
})

it('Gets all reservations', async () => {
  renderer.create(
    <MockedProvider mocks={mockGetAllReservations}>
      <SplashComponent />
    </MockedProvider>
  )
  await wait(0)
})

it('Creates a reservation', () => {
  renderer.create(
    <MockedProvider mocks={mockCreateReservation}>
      <AddReservationComponent />
    </MockedProvider>
  )
})
