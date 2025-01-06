import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: black;
  height: 500px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
function App() {
  return (
    <Wrapper>
      <div className="w-[400px]"></div>
    </Wrapper>
  );
}

export default App;
