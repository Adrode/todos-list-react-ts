import { StyledSection, StyledHeader, StyledTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledHeader>
            <StyledTitle>
                {title}
            </StyledTitle>
            {extraHeaderContent}
        </StyledHeader>
        <div>
            {body}
        </div>
    </StyledSection>
);

export default Section;