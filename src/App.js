import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Switch as Switching, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import ContactPage from "./Pages/ContactPage";



function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainContentStyled className="main-content">
        <Switching>
          <Route path='/' exact> <HomePage/> </Route>
          <Route path='/about'> <AboutPage/> </Route>
          <Route path='/resume'> <ResumePage/> </Route>
          <Route path='/product'> <ProductPage/> </Route>
          <Route path='/cart'> <CartPage/> </Route>
          <Route path='/contact'> <ContactPage/> </Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
position: relative;
margin-left:16.3rem;
min-height: 100vh;

`

export default App;
