import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout, MainLayout, } from '../styled/Layout'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import Button from '../Components/Button';

const ContactPage = () => {
  const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

  return (
    <ContactPageStyled>
      <MainLayout>
        <InnerLayout>
          <Title title={'Contact Me'} span={'Contact Me'}/>
          <InnerLayout>
          <div className='contact-sec'>
            <div className="left-content">
                <form  className="form">
                        <div className="form-field">
                            <label htmlFor="name"  >Enter your name</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Enter your email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Enter your subject</label>
                            <input type="text" id="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your Message</label>
                            <textarea required name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field f-button">
                            <Button title={'Submit'} />
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'091-046-5891'} />
                    <ContactItem title={'Email'} icon={email} cont1={'no.phupha_st@tni.ac.th'} cont2={'ka.vatcharakon_st@tni.ac.th'} />
                    <ContactItem title={'Address'} icon={location} cont1={'98/59 Condo garden asok-rama9 Building A3 Rimklongbangkapi Rd. Bangkapi, Huakwang, Bangkok'} cont2={'Thailand'} />  
                </div>
              </div>
              </InnerLayout>
        </InnerLayout>
      </MainLayout>
    </ContactPageStyled>
  )
}

const ContactPageStyled = styled.div`
.contact-sec{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 3rem;
  @media screen and (max-width: 978px){
      grid-template-columns: repeat(1, 1fr);
      .f-button{
          margin-bottom: 3rem;
      }
  }
.right-content{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media screen and (max-width: 502px){
        width: 70%;
    }
}
  .contact-title{
      h4{
          color: var(--white-color);
          padding: 1rem 0;
          font-size: 1.8rem;
      }
  }
  .form{
      width: 100%;
      @media screen and (max-width: 502px){
          width: 100%;
      }
      .form-field{
          margin-top: 2rem;
          position: relative;
          width: 100%;
          label{
              position: absolute;
              left: 20px;
              top: -19px;
              display: inline-block;
              background-color: var(--background-dark-color);
              padding:0 .5rem;
              color: inherit;
          }
          input{
              border: 1px solid var(--border-color);
              outline: none;
              background: transparent;
              height: 50px;
              padding:0 15px;
              width: 100%;
              color: inherit;
          }
          textarea{
              background-color: transparent;
              border: 1px solid var(--border-color);
              outline: none;
              color: inherit;
              width: 100%;
              padding: .8rem 1rem;
          }
      }
      
  }
}
`
export default ContactPage