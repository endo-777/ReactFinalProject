import React from 'react'
import styled from 'styled-components'
import { GitHub, Facebook, YouTube } from "@material-ui/icons";

const HomePage = () => {
  return (
    <HomePageStyled>
        <div className='typography'>
        <h1>
          Hi I'm <span>Phupha Noppakun</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when
        </p>
        <div className="icons">
          <div className="icon i-facebook">
            <a href="https://www.facebook.com/pooh.phupha/" className="icon i-facebook" target="_blank"> <Facebook/> </a>
          </div>
          <div className="icon i-github">
            <a href="https://github.com/c0zyb0y" className="icon i-github" target="_blank"><GitHub /></a>
          </div>
          <div className="icon i-youtube">
            <a href="https://www.youtube.com/channel/UC7e33RMBPSTc0R63-y2n3iw" className="icon i-youtube" target="_blank"><YouTube /></a>
          </div>
        </div>
        </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
width: 100%;
height: 100vh;
position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      
      .i-facebook {
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }

`

export default HomePage