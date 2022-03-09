import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout, MainLayout, } from '../styled/Layout'

const AboutPage = () => {
  return (
    <AboutPageStyled>
        <MainLayout>
            <InnerLayout>
                <Title title={'About Me'} span={"About Me"}/>
            </InnerLayout>
        </MainLayout>
    </AboutPageStyled>
  )
}

const AboutPageStyled = styled.div`
`

export default AboutPage