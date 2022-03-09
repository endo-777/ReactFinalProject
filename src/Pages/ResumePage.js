import React from 'react'
import styled from 'styled-components'
import Resume from '../Components/Resume'
import Skills from '../Components/Skill'
import Title from '../Components/Title'
import {InnerLayout, MainLayout, } from '../styled/Layout'

const ResumePage = () => {
  return (
    <ResumePageStyled>
        <MainLayout>
            <InnerLayout>
                <Skills/>
                <Resume/>
            </InnerLayout>
        </MainLayout>
    </ResumePageStyled>
  )
}

const ResumePageStyled = styled.div`

`
export default ResumePage