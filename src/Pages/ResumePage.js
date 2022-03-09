import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout, MainLayout, } from '../styled/Layout'

const ResumePage = () => {
  return (
    <ResumePageStyled>
        <MainLayout>
            <InnerLayout>
                <Title title={'Resume'} span={'Resume'}/>
            </InnerLayout>
        </MainLayout>
    </ResumePageStyled>
  )
}

const ResumePageStyled = styled.div`

`
export default ResumePage