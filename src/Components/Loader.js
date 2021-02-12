import styled, { keyframes } from "styled-components";
const grow = keyframes`
  0% {
    transform: scale(0.2);
    opacity: 1;
  }
  20% {
    transform: scale(0.7);
    opacity: 0.7;
  }
  40% {
    transform: scale(1.3);
    opacity: 0.5;
  }
  60% {
    transform: scale(1.8);
    opacity: 0.3;
  }
  80% {
    transform: scale(2.3);
    opacity: 0.1;
  }
  100% {
    transform: scale(2.8);
    opacity: 0;
  }
}`;
const Container = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:48px;
    animation: ${grow} 1.5s linear infinite;
`;
const Circle = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background: red;
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
`;
const InnerCircle = styled.div`
    z-index:99;
    background-color:rgba(20,20,20,1);
    width: 4vh;
    height: 4vh;
    border-radius: 50%;
`;

export default () => (
    <Container>
        <Circle><InnerCircle></InnerCircle></Circle>
    </Container>
)