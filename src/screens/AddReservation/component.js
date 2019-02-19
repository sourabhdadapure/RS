import React from 'react'
import { Alert } from 'react-native'
import styled from 'styled-components'
import { Input, Button } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { createReservation } from '../../modules/Reservation'

const FormWrapper = styled.View`
  flex: 1;
  padding-top: 50;
  margin-horizontal: 10%;
`
const HeaderText = styled.Text`
  font-size: 25;
  color: white;
  margin-vertical: 20;
`

const DatesText = styled.Text`
  font-size: 23;
  color: white;
`
const DatesWrapper = styled.View`
  margin-vertical: 20;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export default class AddReservationComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      arrivalDate: '2016-05-15',
      departureDate: '2016-05-15',
      hotelName: ''
    }
  }

  render() {
    const { name, arrivalDate, departureDate, hotelName } = this.state
    const { onSuccess, onError } = this.props

    return (
      <Mutation mutation={createReservation}>
        {(createReservation, { data }) => (
          <FormWrapper>
            <HeaderText> Add A Reservation</HeaderText>
            <Input
              autoCorrect={false}
              onChangeText={text => this.setState({ name: text })}
              inputStyle={{ color: 'white' }}
              label="Name"
            />
            <Input
              onChangeText={text => this.setState({ hotelName: text })}
              inputStyle={{ color: 'white' }}
              label="Hotel Name"
            />
            <DatesWrapper>
              <DatesText>Arrival:</DatesText>
              <DatePicker
                style={{ width: 150, backgroundColor: 'white' }}
                date={arrivalDate}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={date => {
                  this.setState({ arrival: date })
                }}
              />
            </DatesWrapper>
            <DatesWrapper>
              <DatesText>Departure:</DatesText>
              <DatePicker
                style={{ width: 150, backgroundColor: 'white' }}
                date={departureDate}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={date => {
                  this.setState({ departure: date })
                }}
              />
            </DatesWrapper>
            <Button
              onPress={() =>
                createReservation({
                  variables: {
                    name,
                    hotelName,
                    arrivalDate,
                    departureDate
                  }
                })
                  .then(onSuccess)
                  .catch(onError)
              }
              title="Confirm"
            />
          </FormWrapper>
        )}
      </Mutation>
    )
  }
}
