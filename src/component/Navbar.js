import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { AiOutlineBars } from "react-icons/ai";

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    box-shadow: 0 05px 15px rgba(0, 0, 0, .4);
    overflow: hidden;
    
`;


const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none
    
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    text-decoration: none;
    
`;

const MenuBars = styled(AiOutlineBars)`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${AiOutlineBars});
        background-size: contain;
        height: 35px;
        width: 35px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        color: white;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: -48px;
    
    @media screen and (max-width: 768px) {
        display: none
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
    color: #fff;
    text-decoration: none;
    
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none
    }
`

const Navbar = () => {
    return (
        <Nav>
            <Logo>CYRRUS</Logo>
            <MenuBars/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary={true}>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar;