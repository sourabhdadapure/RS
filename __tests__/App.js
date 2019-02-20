/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native'
import React from 'react'
import App from '../App'
import renderer from 'react-test-renderer'
import { MockedProvider } from 'react-apollo/test-utils'

import {
  getAllReservations,
  createReservation,
  deleteReservation
} from '../src/modules/Reservation'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { graphql } from 'react-apollo'
import SplashComponent from '../src/screens/Splash/component'
import { Loading } from '../src/components'

it('renders correctly', () => {
  renderer.create(<App />)
})

//

test('renders correctly', () => {
  const loadingSplash = renderer.create(<Loading />).toJSON()
  expect(loadingSplash).toMatchSnapshot()
  const splash = renderer.create(<SplashComponent />).toJSON()
  expect(splash).toMatchSnapshot()
})

const component = renderer.create(
  <MockedProvider mocks={[createReservation]} />
)

const getAllReservationsComponent = component.toJSON()

expect(getAllReservationsComponent).toContain('All reservations')
