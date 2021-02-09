import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
    z-index:99;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    background-color:rgba(20,20,20,0.8);
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;
const Lists = styled.ul`
    display:flex;
`;
const List = styled.li`
    width:80px;
    height:50px;
    text-align:center;
    border-bottom:3px solid ${props => (props.current ? "red" : "transparent")};
    transition: border-bottom .5s ease-out;
`;
const LinkStyle = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        <Lists>
            <List current={pathname === "/"}>
                <LinkStyle to="/">Home</LinkStyle>
            </List>
            <List current={pathname === "/tv"}>
                <LinkStyle to="/tv">TV</LinkStyle>
            </List>
            <List current={pathname === "/search"}>
                <LinkStyle to="/search">Search</LinkStyle>
            </List>
        </Lists>
    </Header >
)
);