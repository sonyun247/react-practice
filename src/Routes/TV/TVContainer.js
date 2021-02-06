import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
    state = {
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    }
    render() {
        const { popular, airingToday, loading, error } = this.state;
        return (
            <TVPresenter
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}