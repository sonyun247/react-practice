import { movieApi, tvApi } from "api";
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

    handleSubmit = event => {
        event.preventDefault();
        const { searchWord } = this.state;
        console.log(searchWord);
        if (searchWord !== "") {
            this.searching();
        }
    }

    updateWord = event => {
        const { target: { value } } = event;
        console.log(value)
        this.setState({
            searchWord: value
        })
    }

    async searching() {
        const { searchWord } = this.state;
        this.setState({ loading: true });
        try {
            const { data: { results: movieResults } } = await movieApi.search(searchWord);
            const { data: { results: tvResults } } = await tvApi.search(searchWord);
            this.setState({ movieResults, tvResults });
        } catch {
            this.setState({ error: "Can't find it" });
        } finally {
            this.setState({ loading: false });
        }
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
                handleSubmit={this.handleSubmit}
                updateWord={this.updateWord}
            />
        );
    }
}