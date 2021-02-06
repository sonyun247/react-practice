import PropTypes, { func } from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({ movieResults,
    tvResults,
    searchWord,
    loading,
    error,
    handleSubmit }) => null;

SearchPresenter.PropTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchWord: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
}

export default SearchPresenter;