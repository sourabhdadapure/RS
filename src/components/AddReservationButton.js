import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const ImageWrapper = styled.Image`
  position: absolute;
  align-self: center;
  bottom: 40;
  width: 60;
  height: 60;
  tint-color: #f67da3;
`

const ButtonWrapper = styled.TouchableOpacity``

const AddReservationButton = ({ onAddButton }) => (
  <ButtonWrapper onPress={onAddButton}>
    <ImageWrapper source={require('../res/Add.png')} />
  </ButtonWrapper>
)

AddReservationButton.propTypes = {
  onAddButton: PropTypes.func.isRequired
}

export default AddReservationButton
