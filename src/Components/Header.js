import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
    display:flex;
    &:hover{
        background-color: gainsboro;
    }
`;

export default () => (
    <header>
        <List>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/tv">TV</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
            <li>
                <Link to="/detail">Detail</Link>
            </li>
        </List>
    </header >
);