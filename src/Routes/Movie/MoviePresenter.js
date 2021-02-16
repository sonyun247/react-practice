import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
    padding:20px;
`;

const MoviePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
    <>
        <Helmet>
            <title>Movie | JayTV</title>
        </Helmet>
        {loading ? <Loader /> : (
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="상영 중">
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
                    <Section title="개봉 예정">
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
                    <Section title="인기">
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

MoviePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default MoviePresenter;