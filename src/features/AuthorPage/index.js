import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
    <>
        <Header title="Information about author" />
        <Section
            title="Adrian Woźniak"
            body={
                <>
                    Nazywam się <strong>Adrian</strong>. Mieszkam we Wrocławiu. Obecnie pracuję jako
                    kierownik restauracji w jednej z wrocławskich restauracji KFC. Ukończyłem technikum informatyczne i po czasie
                    uznałem że chciałbym wrócić do zawodu, także zdecydowałem się na podjęcie kursu u <b>Krzyśka i ekipy w YouCode.</b>
                    <br /><br />Interesuję się głównie muzyką oraz motocyklami.<br />Jeżeli chodzi o muzykę, to
                    słucham wielu rzeczy z różnych
                    gatunków, tj. <i>rock, rap, blues, funk, pop, punk, grunge, metal, techno,</i> itp.<br />
                    Jeszcze rok temu posiadałem motocykl, Suzuki SV650, lecz sprzedałem go ponieważ potrzebowałem samochodu,
                    lecz obecnie oszczędzam aby kupić kolejny motocykl, ponieważ <em>bardzo</em> mi tego brakuje.
                </>
            }
        />
    </>
);

export default AuthorPage;