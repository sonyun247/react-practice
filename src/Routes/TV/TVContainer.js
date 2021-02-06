import { tvApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
    state = {
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    }

    async componentDidMount() {
        try {
            const { data: { results: popular } } = await tvApi.popular();
            const { data: { results: airingToday } } = await tvApi.airingToday();
            this.setState({ popular, airingToday })
        } catch {
            this.setState({ error: "Can't find it" })
        } finally {
            this.setState({ loading: false })
        }
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