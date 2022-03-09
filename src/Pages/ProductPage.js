import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout, MainLayout, } from '../styled/Layout'

const ProductPage = () => {
  return (
    <ProductPageStyled>
      <MainLayout>
            <InnerLayout>
                <Title title={'Product'} span={'Product'}/>
            </InnerLayout>
        </MainLayout>
    </ProductPageStyled>
  )
}

const ProductPageStyled = styled.div`
`

export default ProductPage