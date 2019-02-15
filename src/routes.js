import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Splash, AddReservation } from './screens'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const AppStack = createStackNavigator(
  {
    Splash: { screen: Splash },
    AddReservation: { screen: AddReservation }
  },
  {
    headerMode: 'none',
    cardStyle: { backgroundColor: '#001735' }
  }
)
const App = createAppContainer(AppStack)
const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'
})

export default class Routes extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    )
  }
}
