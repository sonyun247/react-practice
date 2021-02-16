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

const HomePresenter = ({ popular, popularTv, error, loading }) => (
    <>
        <Helmet>
            <title>Home | JayTV</title>
        </Helmet>
        {loading ? <Loader /> : (
            <Container>
                {popular && popular.length > 0 && (
                    <Section title="인기 영화">
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
                {popularTv && popularTv.length > 0 && (
                    <Section title="인기 쇼">
                        {popularTv.map(tv => (<Poster key={tv.id}
                            id={tv.id}
                            imageUrl={tv.poster_path}
                            title={tv.name}
                            rating={tv.vote_average}
                            year={tv.first_air_date.substring(0, 4)}
                        />))}
                    </Section>
                )}
                {error && <Message color="red" text={error} />}
            </Container>
        )}</>);

HomePresenter.propTypes = {
    popular: PropTypes.array,
    popularTv: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter;