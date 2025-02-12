import { Container } from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
    <Container>
        <Header title="Information about author" />
        <Section
            title="Adrian Woźniak"
            body={
                <>
                    My name is <strong>Adrian</strong>. I live in Wroclaw. Currently I work as
                    restaurant manager in one of the KFC restaurants in Wrocław. I graduated from an IT technical school and after some time
                    I decided that I would like to return to my profession, so I decided to take a course with <b>Krzysiek and the team at YouCode.</b>
                    <br /><br />I am mainly interested in music and motorcycles.<br />When it comes to music,
                    I listen to a lot of different things
                    genres, i.e. <i>rock, rap, blues, funk, pop, punk, grunge, metal, techno,</i> etc.<br />
                    I had a motorcycle, a Suzuki SV650, but I sold it because I needed a car.
                    Currently I'm saving up to buy another motorcycle because I <em>really</em> miss it.
                </>
            }
        />
    </Container>
);

export default AuthorPage;