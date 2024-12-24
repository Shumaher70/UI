import styled from "styled-components";
import { Button } from "./components/Button";

function App() {
  const Wrapper = styled.div`
    display: flex;
    background-color: black;
    height: 500px;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  return (
    <Wrapper>
      <Button>button</Button>
    </Wrapper>
  );
}

export default App;
