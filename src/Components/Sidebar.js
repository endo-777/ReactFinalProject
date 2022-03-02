import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

const Sidebar = () => {
  return (
    <SidebarStyled>
        <Navigation/>
    </SidebarStyled>
  )
}
const SidebarStyled = styled.div`
    width: 16.3rem;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    position: fixed;


`
export default Sidebar
