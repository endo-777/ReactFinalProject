import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout, MainLayout, } from '../styled/Layout'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const CartPage = () => {
  return (
    <CartPageStyled>
      <MainLayout>
        <InnerLayout>
          <Title title={'Cart'} span={'Cart'}/>
        </InnerLayout>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>ProductId</th>
              <th>ProductName</th>
              <th>ProductPrice</th>
              <th>Qty</th>
              <th>Total</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1123</td>
                  <td>test</td>
                  <td>500</td>
                  <td>5</td>
                  <td>2000</td>
                </tr>
              </tbody>
          </Table>
      </MainLayout>
    </CartPageStyled>
  )
}

const CartPageStyled = styled.div`
margin-top: 50px;
margin-left: 150px;
.line{
  margin-bottom: 20px;
}

`
export default CartPage