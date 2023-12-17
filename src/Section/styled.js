import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-bottom: 10px;
`;

export const StyledHeader = styled.header`
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const StyledTitle = styled.h2`
    padding: 20px;
    margin: 0;

    @media (max-width: 767px) {
        flex-basis: 100%;
    }
`;