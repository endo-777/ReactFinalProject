import React from 'react'
import styled from 'styled-components';
import {InnerLayout, MainLayout, } from '../styled/Layout'
import Title from '../Components/Title'
import ProgressBar from './Progressbar'

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'67%'}
                            text={'67%'}
                        />
                        <ProgressBar 
                            title={'KALI Linux'}
                            width={'77%'}
                            text={'77%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'67%'}
                            text={'67%'}
                        />
                        <ProgressBar 
                            title={'Problem Solving'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar
                             title={'Fast Learner'}
                             width={'87%'}
                             text={'87%'}
                        />

                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
