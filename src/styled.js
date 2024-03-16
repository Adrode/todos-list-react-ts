import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

// import { StyledNav, StyledList, StyledListElement, StyledNavLink } from "./styled";

export const StyledNav = styled.nav`
`;

export const StyledList = styled.ul`
    margin: 0;
    min-height: 60px;
    background-color: ${({ theme }) => theme.color.teal};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
`;

export const StyledListElement = styled.li`
    margin: 20px;
    list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};

    &.active {
        font-weight: bold;
    }
`;