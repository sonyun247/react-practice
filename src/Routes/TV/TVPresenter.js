import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    padding:0px 10px;
`;

const TVPresenter = ({ popular, airingToday, loading, error }) => loading ? <Loader /> : (
    <Container>
        {popular && popular.length > 0 && (
            <Section title="Popular TV Shows">
                {popular.map(show => (<span key={show.id}>{show.name}</span>))}
            </Section>
        )}
        {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today TV Shows">
                {airingToday.map(show => (<span key={show.id}>{show.name}</span>))}
            </Section>
        )}
    </Container>
);

TVPresenter.propTypes = {
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default TVPresenter;