import Loader from "Components/Loader";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Imdb from "assets/imdb.webp";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 20px 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px) grayscale(70%);
  opacity: 0.5;
  z-index: 0;
`;

const Contents = styled.div`
  display: flex;
  flex-direction:column;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 30px;
`;

const Title = styled.h3`
  width:80%;
  font-size: 32px;
  display:flex;
  justify-content:space-between;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 14px;
  opacity: 1;
  line-height: 1.5;
  width: 80%;
`;

const IMDB = styled.img`
  height:inherit;
  width:60px;
`;

const Nav = styled.div`
margin-bottom:30px;
font-size:16px;
opacity:0.8;
`;
const DetailPresenter = ({ result, externalId, loading, error }) =>
  loading ? (
    <>
      <Helmet><title>Loading | JayTV</title></Helmet>
      <Loader />
    </>
  ) : (
      <Container>
        <Helmet>
          <title>
            {result.title
              ? result.title
              : result.name} | JayTV
          </title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        < Contents >
          <Nav>
            {result.title
              ? <><Link to="/movie">Movie</Link>{` ❯ ${result.title}`}</>
              : <><Link to="/tv">TV</Link>{` ❯ ${result.name}`}</>}
          </Nav>
          <Content>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                  : require("../../assets/noPosterSmall.png")
              }
            />
            <Data>
              <Title>
                {result.title
                  ? result.title
                  : result.name}
                {result.imdb_id
                  ? <a href={`https://imdb.com/title/${result.imdb_id}`} target="_blank"><IMDB src={Imdb} /></a>
                  : <a href={`https://imdb.com/title/${externalId.imdb_id}`} target="_blank"><IMDB src={Imdb} /></a>}
              </Title>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result.runtime === 0 || null ?
                    result.runtime = "0" :
                    result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
                <Divider>•</Divider>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
              </ItemContainer>
              <Overview>{result.overview}</Overview>
            </Data>
          </Content>
        </Contents>
      </Container >
    );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default DetailPresenter;