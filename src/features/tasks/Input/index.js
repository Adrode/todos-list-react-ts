import styled from "styled-components";

export default styled.input`
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.color.silver};
    flex-grow: 1;
    overflow: auto;
`;