import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.Image`
  position: absolute;
  align-self: center;
  bottom: 40;
  width: 60;
  height: 60;
  tint-color: #f67da3;
`

const ButtonWrapper = styled.TouchableOpacity``

const AddReservationButton = onAddButton => (
  <ButtonWrapper
    onPress={() => {
      onAddButton
    }}
  >
    <ImageWrapper source={require('../res/Add.png')} />
  </ButtonWrapper>
)

export default AddReservationButton
