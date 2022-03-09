import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styled/Layout";
import profile from "../images/profile3.jpg";


const AboutPage = () => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <Title title={"About Me"} span={"About Me"} />
          <AboutPageStyled>
          <div className="left-content">
            <img src={profile} alt="my profile" />
          </div>
          <div className="right-content">
            <h4>
              I am <span>Phupha Noppakun</span>
            </h4>
            <p className="paragraph">
              I’m a Fast Learner. I love to learn something new 
              
            </p>
            <div className="about-info">
              <div className="info-title">
                <p>Full Name</p>
                <p>Age</p>
                <p>Nationality </p>
                <p>Languages </p>
                <p>What am I RN</p>
                <p>Faculty</p>
              </div>
              <div className="info">
                <p>: Phupha Noppakun </p>
                <p>: 23</p>
                <p>: Thailand </p>
                <p>: Thai, English, Japanese </p>
                <p>: Student</p>
                <p>: Information Technology</p>
              </div>
            </div>
          </div>
          </AboutPageStyled>
        </InnerLayout>
      </MainLayout>
    </>
  );
};

const AboutPageStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }

  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default AboutPage;
