import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
const Header = styled.header`
    z-index:99;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    background-color:rgba(20,20,20,1);
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;
const Lists = styled.ul`
    display:flex;
    width:100%;
`;
const List = styled.li`
    width:80px;
    height:50px;
    text-align:center;
    border-bottom:3px solid ${props => (props.current ? "red" : "transparent")};
    color:${props => (props.current ? "red" : "white")};
    transition: border-bottom .5s ease-out;
    margin-right:20px;
    :last-child{
        position:absolute;
        right:0;
    }
`;
const LinkStyle = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:24px;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        <Lists>
            <List current={pathname === "/"}>
                <LinkStyle to="/"><FontAwesomeIcon icon={faHome} /></LinkStyle>
            </List>
            <List current={pathname === "/movie"}>
                <LinkStyle to="/movie">Movie</LinkStyle>
            </List>
            <List current={pathname === "/tv"}>
                <LinkStyle to="/tv">TV</LinkStyle>
            </List>
            <List current={pathname === "/search"}>
                <LinkStyle to="/search"><FontAwesomeIcon icon={faSearch} /></LinkStyle>
            </List>
        </Lists>
    </Header >
)
);