import styled from "styled-components";

export const StyledForm = styled.form`
    gap: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }
`;

export const Button = styled.button`
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.color.teal};
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};

    display: flex;
    flex-basis: 100px;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
    }

    &:hover {
        filter: brightness(110%);
        transform: scale(1.05);
    }
`;