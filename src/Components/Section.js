import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    :not(:last-child){
        margin-bottom:20px;
    }
`;
const Title = styled.span`
    font-size:20px;
    font-weight:600;
`;
const Grid = styled.div`
    margin-top:25px;
    display:grid;
    grid-template-columns:repeat(auto-fill,120px);
    grid-auto-columns:120px;
    grid-gap:20px;
    grid-auto-flow:column;
    overflow:scroll;
`;

const Section = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;