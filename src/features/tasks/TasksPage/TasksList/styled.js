import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";

export const StyledTasks = styled.ul`
    padding-left: 0;
    margin: 0;
    overflow: auto;
`;

export const Element = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.color.gallery};
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    min-width: 30px;
    min-height: 30px;
    color: ${({ theme }) => theme.color.white};
    transition: 0.3s;

    cursor: pointer;

    ${({ $toggleDone }) => $toggleDone && css`
        background-color: ${({ theme }) => theme.color.green};
        border: 1px solid ${({ theme }) => theme.color.green};
    
        &:hover {
            filter: brightness(120%);
        }
    `}

    ${({ $remove }) => $remove && css`
        background-color: ${({ theme }) => theme.color.red};
        border: 1px solid ${({ theme }) => theme.color.red};

        &:hover {
            filter: brightness(120%);
        }
    `}
`;

export const Content = styled.span`
    display: flex;
    align-items: center;
    padding: 0 10px;

    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.teal};

    &:hover {
        filter: brightness(110%);
    }
`;