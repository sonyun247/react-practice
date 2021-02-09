import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Section from "Components/Section";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
padding: 10px;
`;

const Form = styled.form`
    margin-bottom:50px;
    width:100%;
    `;

const Input = styled.input`
    all: unset;
    font-size:32px;
    width:100%;
    text-align:center;
    `;

const SearchPresenter = ({ movieResults,
    tvResults,
    searchWord,
    loading,
    error,
    handleSubmit,
    updateWord }) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search"
                value={searchWord}
                onChange={updateWord} />
        </Form>
        {loading ? <Loader /> : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie">
                        {movieResults.map(movie =>
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                imageUrl={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date.substring(0, 4)}
                                isMovie={true}
                            />)}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title="TV">
                        {tvResults.map(tv =>
                            <Poster key={tv.id}
                                id={tv.id}
                                imageUrl={tv.poster_path}
                                title={tv.name}
                                rating={tv.vote_average}
                                year={tv.first_air_date.substring(0, 4)}
                            />)}
                    </Section>
                )}
                {error && <Message color="red" text={error} />}
                {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && (<Message color="grey" text="Not Found " />)}
            </>
        )}
    </Container>);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchWord: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
}

export default SearchPresenter;