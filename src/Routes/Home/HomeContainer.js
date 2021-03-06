import { movieApi, tvApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
    state = {
        popular: null,
        popularTv: null,
        error: null,
        loading: true
    }

    async componentDidMount() {
        try {
            const { data: { results: popular } } = await movieApi.popular();
            const { data: { results: popularTv } } = await tvApi.popular();
            this.setState({ popular, popularTv });
        } catch {
            this.setState({ error: "Can't find it" });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { popular, popularTv, error, loading } = this.state;
        return (
            <HomePresenter
                popular={popular}
                popularTv={popularTv}
                error={error}
                loading={loading}
            />
        );
    }
}