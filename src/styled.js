import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    &.active {
        color: ${({ theme }) => theme.color.red};
    }
`;