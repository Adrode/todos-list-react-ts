import { StyledList, StyledListElement, StyledNavLink } from "./styled";
import { toTasks, toAuthor } from "../routes";

const Navigation = () => (
    <nav>
        <StyledList>
            <StyledListElement>
                <StyledNavLink to={toTasks()}>
                    Tasks
                </StyledNavLink>
            </StyledListElement>
            <StyledListElement>
                <StyledNavLink to={toAuthor()}>
                    About author
                </StyledNavLink>
            </StyledListElement>
        </StyledList>
    </nav>
);

export default Navigation;