import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Switch as Switching, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import ContactPage from "./Pages/ContactPage";
import Switch from "@material-ui/core/Switch";
import { IconButton } from "@material-ui/core"
import { Brightness4 } from "@material-ui/icons";
import { useEffect, useState } from "react";


function App() {

  const [theme, setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false)

  const themeToggler = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
      setChecked(false)
    }else{
      setTheme('light-theme')
      setChecked(true)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
  },[theme])


  return (
    <div className="App">
      <Sidebar/>
      <MainContentStyled className="main-content">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4/>
          </div>
          <div className="right-content">
          <Switch 
            value=""
            checked={checked}
            inputProps={{'arial-label':''}}
            size="medium"
            onClick={themeToggler}
            />
          </div>
        </div>
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
