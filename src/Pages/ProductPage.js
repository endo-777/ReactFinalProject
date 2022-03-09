import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styled/Layout'
import { Image,Badge,Spinner,Button } from "react-bootstrap";
import axios from "axios";


const ProductPage = () => {
  return (
    <div>
      <MainLayout>
        <InnerLayout>
        <Title title={"Product"} span={"product"} />
        </InnerLayout>
        

        
      </MainLayout>
    </div>
  )
}

const ProductStyled = styled.div`
  height: 100vh;
  position: static;
  .center {
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .table {
    width: 80%;
  }
  .buybutt {
    border: 1px solid;
  } 
`

export default ProductPage