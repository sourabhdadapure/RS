import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.View`
  border-radius: 15;
  background-color: #0e2b54;
  margin-horizontal: 5%;
  align-items: center;
  padding-vertical: 30;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 5%;
`

const ImageHolder = styled.View`
  width: 60;
  height: 60;
  background-color: white;
`

const TextWrapper = styled.View`
  flex-direction: column;
`

const HotelName = styled.Text`
  font-size: 20;
  color: white;
`

const DatesText = styled.Text`
  font-size: 15;
  color: turquoise;
`

const DeleteImage = styled.Image`
  width: 30;
  height: 30;
  tint-color: #51477b;
`

const DeleteButtonWrapper = styled.TouchableOpacity``

export default class ReservationItem extends React.Component {
  static propTypes = {
    hotel: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
  }

  render() {
    const { hotel, arrival, departure, onDelete } = this.props
    return (
      <Wrapper>
        <ImageHolder />
        <TextWrapper>
          <HotelName>{hotel}</HotelName>
          <DatesText>Arrival: {arrival}</DatesText>
          <DatesText>Departure: {departure}</DatesText>
        </TextWrapper>
        <DeleteButtonWrapper onPress={onDelete}>
          <DeleteImage source={require('../res/delete.png')} />
        </DeleteButtonWrapper>
      </Wrapper>
    )
  }
}
