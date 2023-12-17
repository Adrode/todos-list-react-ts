import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    margin: 0;

    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        padding: 0 20px 20px 20px;
        flex-basis: 100%;
    }
`;

export const Button = styled.button`
    margin-left: 20px;
    padding: 0;
    border: none;
    background-color: transparent;
    color: teal;
    transition: color 0.3s;


    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }
    
    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #AAA;
    }
`;