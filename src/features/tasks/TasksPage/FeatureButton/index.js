import styled from "styled-components";

export const FeatureButton = styled.button`
    margin-left: 20px;
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    transition: color 0.3s;
    cursor: pointer;


    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }
    
    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;

export const StyledButtons = styled.div`
    padding: 20px;
    margin: 0;

    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 0 20px 20px 20px;
        flex-basis: 100%;
    }
`;