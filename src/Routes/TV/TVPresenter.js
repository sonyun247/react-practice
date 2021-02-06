import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ popular,
    airingToday,
    loading,
    error }) => null;

TVPresenter.PropTypes = {
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default TVPresenter;