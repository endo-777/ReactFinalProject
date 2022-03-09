import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout, MainLayout, } from '../styled/Layout'

const ContactPage = () => {
  return (
    <ContactPageStyled>
      <MainLayout>
        <InnerLayout>
          <Title title={'Contact Me'} span={'Contact Me'}/>
        </InnerLayout>
      </MainLayout>
    </ContactPageStyled>
  )
}

const ContactPageStyled = styled.div`
`
export default ContactPage