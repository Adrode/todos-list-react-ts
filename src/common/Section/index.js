import { StyledSection, Header, Title, StyledContainer } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <Title>
                {title}
            </Title>
            {extraHeaderContent}
        </Header>
        <StyledContainer>
            {body}
        </StyledContainer>
    </StyledSection>
);

export default Section;