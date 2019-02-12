import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const SampleText = styled.Text`
  font-size: 20;
  color: red;
`

export default class SplashContainer extends React.Component {
  render() {
    return (
      <Wrapper>
        <SampleText>Hello!!</SampleText>
      </Wrapper>
    )
  }
}
