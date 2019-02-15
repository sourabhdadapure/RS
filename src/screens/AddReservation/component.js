import React from 'react'
import { DatePickerIOS } from 'react-native'
import styled from 'styled-components'
import { Input } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

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
    this.state = { date: '2016-05-15' }
  }

  render() {
    return (
      <FormWrapper>
        <HeaderText> Add A Reservation</HeaderText>
        <Input inputStyle={{ color: 'white' }} label="Hotel Name" />
        <DatesWrapper>
          <DatesText>Arrival:</DatesText>
          <DatePicker
            style={{ width: 150, backgroundColor: 'white' }}
            date={this.state.date}
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
              this.setState({ date: date })
            }}
          />
        </DatesWrapper>
        <DatesWrapper>
          <DatesText>Departure:</DatesText>
          <DatePicker
            style={{ width: 150, backgroundColor: 'white' }}
            date={this.state.date}
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
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              this.setState({ date: date })
            }}
          />
        </DatesWrapper>
      </FormWrapper>
    )
  }
}
