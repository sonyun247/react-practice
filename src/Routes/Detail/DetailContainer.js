import { movieApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const { location: { pathname } } = props;
        this.state = { result: null, externalId: null, error: null, loading: true, isMovie: pathname.includes("/movie/") }
    }

    async componentDidMount() {
        const { match: { params: { id } }, history: { push } } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/")
        }
        let result = null;
        let externalId = null;
        try {
            if (isMovie) {
                ({ data: result } = await movieApi.detail(parsedId));
            } else {
                ({ data: result } = await tvApi.detail(parsedId));
                ({ data: externalId } = await tvApi.external(parsedId));
            }
        } catch {
            this.setState({ error: "Can't find it" })
        } finally {
            this.setState({ loading: false, result, externalId })
        }
    }

    render() {
        const { result, externalId, error, loading } = this.state;
        return (
            <DetailPresenter
                result={result}
                externalId={externalId}
                error={error}
                loading={loading}
            />
        );
    }
}