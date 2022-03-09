import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styled/Layout";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);

  return (
    <CartPageStyled>
      <MainLayout>
        <InnerLayout>
          <Title title={"Cart"} span={"Cart"} />
          <div className="container">
            <div className="row">
              <div className="col-md-12 mt-4">
                <Table striped bordered hover variant="dark" className="table-style" >
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
                    {cart.map((c, index) => {
                      return (
                        <tr key={c.id}>
                          <td>{++index}</td>
                          <td>{c.id}</td>
                          <td>{c.name}</td>
                          <td>{c.price}</td>
                          <td>{c.qty}</td>
                          <td>{c.price * c.qty}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </InnerLayout>
      </MainLayout>
    </CartPageStyled>
  );
};

const CartPageStyled = styled.div`
  .table-style {
    margin-top: 5rem;
    display: flex;
    border-collapse: separate;
    border-spacing: 1px;
    border-width: 1px;
  }
`;
export default CartPage;
