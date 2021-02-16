import Loader from "Components/Loader";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Imdb from "assets/imdb.webp";
import { useEffect, useState } from "react";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 20px 50px;
  overflow:hidden;
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

const TabWrapper = styled.div`
width:80%;
margin-top:30px;
display:flex;
justify-content:space-between;
`;
const Tab = styled.div`
  height:25px;
  width:50%;
  border:1px solid white;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:16px;
  letter-spacing:5px;
  cursor: pointer;
`;

const TabContents = styled.div`
width:80%;
height:100%;
margin-top:30px;
overflow:scroll;
`;
const TabContentGrid = styled.div`
display:grid;
grid-auto-flow:column;
grid-template-columns:repeat(auto-fill,200px);
grid-auto-columns:200px;
grid-template-rows:repeat(auto-fill,minmax(max-content,300px));
grid-gap:20px;
`;
const TabContent = styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`;
const ContentImg = styled.div`
border-radius:25px;
height:100%;
width:100%;
background-image:url(${props => props.bgUrl});
background-size:auto;
background-repeat:no-repeat;
background-position:center center;
`;
const ContentText = styled.div`
margin-top:10px;
font-size:16px;
text-align:center;
`;


const useTabs = (tabName, result) => {
  const [tab, setTab] = useState();
  const [tabData, setTabData] = useState([]);
  const selectTabs = tabName => {
    setTab(tabName);
  }
  useEffect(() => {
    switch (tab) {
      case "company":
        setTabData(result.production_companies);
        break;
      case "country":
        setTabData(result.production_countries);
        break;
      case "seasons":
        setTabData(result.seasons);
        break;
    }
  }, [tab])
  console.log(tabData);
  return { tabData, selectTabs }
}
const DetailPresenter = ({ result, externalId, loading, error }) => {
  let tabName;
  const { tabData, selectTabs } = useTabs(tabName, result);
  return (
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
                <Overview>{`${result.overview.substring(0, 180)}...`}</Overview>
                <TabWrapper>
                  {result.seasons ? (
                    <>
                      <Tab onClick={() => selectTabs("company")}>제작</Tab>
                      <Tab onClick={() => selectTabs("country")}>국가</Tab>
                      <Tab onClick={() => selectTabs("seasons")}>시즌</Tab>
                    </>
                  ) : (
                      <>
                        <Tab onClick={() => selectTabs("company")}>제작</Tab>
                        <Tab onClick={() => selectTabs("country")}>국가</Tab>
                      </>
                    )
                  }
                </TabWrapper>
                <TabContents>
                  {tabData && tabData.length > 0 && (
                    <TabContentGrid>
                      {tabData.map(data => (
                        <TabContent key={data.id}>
                          <ContentImg bgUrl={data.logo_path
                            ? `https://image.tmdb.org/t/p/w200${data.logo_path}`
                            : `https://image.tmdb.org/t/p/w200${data.poster_path}`
                          } />
                          <ContentText>{data.name}</ContentText>
                        </TabContent>
                      ))}
                    </TabContentGrid>)}
                </TabContents>
              </Data>
            </Content>
          </Contents>
        </Container >
      ))
}

DetailPresenter.propTypes = {
  result: PropTypes.object,
  externalId: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default DetailPresenter;