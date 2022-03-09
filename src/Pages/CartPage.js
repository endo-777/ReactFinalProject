import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout, MainLayout, } from '../styled/Layout'

const CartPage = () => {
  return (
    <CartPageStyled>
      <MainLayout>
        <InnerLayout>
          <Title title={'Cart'} span={'Cart'}/>
        </InnerLayout>
      </MainLayout>
    </CartPageStyled>
  )
}

const CartPageStyled = styled.div`
`
export default CartPage