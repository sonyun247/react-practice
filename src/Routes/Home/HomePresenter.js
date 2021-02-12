import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
    padding:10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
    <>
        <Helmet>
            <title>Movie | JayTV</title>
        </Helmet>
        {loading ? <Loader /> : (
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="Now Playing Movies">
                        {nowPlaying.map(movie => (<Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.title}
                            rating={movie.vote_average}
                            year={movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />))}
                    </Section>
                )}
                {upcoming && upcoming.length > 0 && (
                    <Section title="Upcoming Movies">
                        {upcoming.map(movie => (<Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.title}
                            rating={movie.vote_average}
                            year={movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title="Popular Movies">
                        {popular.map(movie => (<Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.title}
                            rating={movie.vote_average}
                            year={movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />))}
                    </Section>
                )}
                {error && <Message color="red" text={error} />}
            </Container>
        )}</>);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter;