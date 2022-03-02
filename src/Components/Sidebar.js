import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <SidebarStyled>
        Sidebar
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
