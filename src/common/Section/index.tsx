import { ReactNode } from "react";
import { StyledSection, Header, Title, StyledContainer } from "./styled";

interface SectionProps {
    title: ReactNode;
    body: ReactNode;
    extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
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