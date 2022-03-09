import React from 'react';
import styled from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmallTitle from '../Components/SmallTitle';
import Title from '../Components/Title';
import {InnerLayout} from '../styled/Layout';
import ResumeItem from '../Components/ResumeItem'

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2013-2015'} 
                        title={'Youtuber'}
                        subTitle={'Game Content'}
                        text={'Subscriber : 5,247 Overall Viewed : 1.1M'}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2011-2013'} 
                        title={'Junior High School'}
                        subTitle={'The Demonstration School of '}
                        text={'King Room'} 
                    />
                    <ResumeItem 
                        year={'2013-2015'} 
                        title={'High School'}
                        subTitle={'Kanjanapisek Witthayalai Nakornphathom School'}
                        text={'Math-Eng'} 
                    />
                    <ResumeItem 
                        year={'2015-2022'} 
                        title={'Bachelor'}
                        subTitle={'Thai-Nichi Institue of Technology'}
                        text={'Faculty of Information Technology '}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
