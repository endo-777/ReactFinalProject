import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { GiClick } from "react-icons/gi";
import { InnerLayout, MainLayout } from "../styled/Layout";
import { Table, Image, Badge, Spinner, Button } from "react-bootstrap";
import axios from "axios";
import { addToCart } from "../redux/actions/cartAction";
import { useSelector, useDispatch } from "react-redux";

const ProductPage = () => {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);

  const getData = async () => {
    try {
      setLoading(true); // start spin right here
      const resp = await axios.get("https://api.codingthailand.com/api/course");
      //console.log(resp.data)
      setProduct(resp.data.data);
    } catch (error) {
      //console.log(error.response)
      setError(error);
    } finally {
      setLoading(false); // stop right here whatever it is(try or catch)
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, please try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  const addCart = (p) => {
    const product = {
      id: p.id,
      name: p.title,
      price: p.view, //assume that view = price
      qty: 1,
    };

    //call action
    dispatch(addToCart(product, cart));
  };

  return (
    <div>
      <MainLayout>
        <InnerLayout>
          <Title  title={"Product"} span={"product"} />
          <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4">
              <Table striped bordered hover variant="dark" className='table-style'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Detail</th>
                    <th>Created Date</th>
                    <th>View</th>
                    <th>Picture</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((p, index) => {
                    return (
                      <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                        <td>{p.detail}</td>
                        <td>{p.date}</td>
                        <td>
                          {" "}
                          <Badge variant="success">{p.view}</Badge>{" "}
                        </td>
                        {/* <td>{p.picture}</td> */}
                        <td>
                          <Image src={p.picture} rounded width={60} />
                        </td>
                        <td>
                          <Button
                            variant="warning"
                            className="ml-2"
                            onClick={() => addCart(p)}
                          >
                            Buy
                            <GiClick />
                          </Button>
                        </td>
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
    </div>
  );
};

const ProductStyled = styled.div`
.table-style{
  margin-top: 5rem;
  display: flex;
  border-collapse: separate;
  border-spacing: 1px ;
  border-width: 1px;
}
 
`;

export default ProductPage;
