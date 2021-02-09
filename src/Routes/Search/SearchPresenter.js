import Loader from "Components/Loader";
import Section from "Components/Section";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
padding: 0px 10px;
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
                            <span key={movie.id}>{movie.title}</span>)}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title="TV">
                        {tvResults.map(tv =>
                            <span key={tv.id}>{tv.name}</span>)}
                    </Section>
                )}
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