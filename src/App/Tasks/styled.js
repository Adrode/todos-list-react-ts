import styled, { css } from "styled-components";

export const List = styled.ul`
    background-color: #fff;
    padding: 20px;
    margin: 0;
    overflow: auto;
`;

export const Element = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    border-bottom: 2px solid #eee;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    min-width: 30px;
    min-height: 30px;
    color: white;
    transition: background 0.3s;

    ${({ $toggleDone }) => $toggleDone && css`
        background-color: green;
        border: 1px solid green;
    
        &:hover {
            background-color: hsl(120, 100%, 30%);
        }
    `}

    ${({ $remove }) => $remove && css`
        background-color: red;
        border: 1px solid red;

        &:hover {
            background-color: hsl(0, 100%, 65%);
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