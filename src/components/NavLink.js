import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavLink = ({ item }) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav && item.subNav ? (
        <SublinkLinks>
          <DropdownContent>
            {subnav &&
              item.subNav.map((item, index) => {
                return (
                  <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                  </DropdownLink>
                )
              })}
          </DropdownContent>
        </SublinkLinks>
      ) : null}
    </>
  )
}

const DropdownContent = styled.div`
  position: absolute;
  top: 4.2rem;
  left: 8rem;
  background-color: #f9f9f9;
  min-width: 16rem;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
  z-index: 1;
  width: 100%;

  a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  @media screen and (max-width: 990px) {
    position: relative;
    top: 0;
    left: 0;
  }
`

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`

const SidebarLabel = styled.span`
  margin-left: 16px;
`

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`

const SublinkLinks = styled.div`
  position: absolute;
  display: block;
  padding: 2rem;
  border-radius: var(--radius);

  a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;

    &:hover {
      color: #88add2;
    }
  }

  &:hover .links {
    visibility: visible;
  }

  @media screen and (max-width: 990px) {
    position: relative;
    top: 0;
    left: 0;
  }
`

export default NavLink
