import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
    padding:0px 10px;
`;

const TVPresenter = ({ popular, airingToday, loading, error }) => loading ? <Loader /> : (
    <Container>
        {popular && popular.length > 0 && (
            <Section title="Popular TV Shows">
                {popular.map(tv => (<span key={tv.id}>{tv.name}</span>))}
            </Section>
        )}
        {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today TV Shows">
                {airingToday.map(tv => (<span key={tv.id}>{tv.name}</span>))}
            </Section>
        )}
        {error && <Message color="red" text={error} />}
    </Container>
);

TVPresenter.propTypes = {
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default TVPresenter;