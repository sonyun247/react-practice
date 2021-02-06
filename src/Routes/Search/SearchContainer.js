import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchWord: "",
        loading: false,
        error: null
    }
    render() {
        const { movieResults, tvResults, searchWord, loading, error } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchWord={searchWord}
                loading={loading}
                error={error}
            />
        );
    }
}