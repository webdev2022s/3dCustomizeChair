import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import styled from "styled-components";
import Controller from "./components/Controller";
import { CustomizeContext } from "./context/CustomizeContext";

const StyledCanva = styled.div`
  height: 100dvh;
  width: 100dvw;

  background-color: var(--color-grey-900);
`;

function App() {
  return (
    <CustomizeContext>
      <StyledCanva>
        <Canvas>
          <fog attach={"fog"} args={["#1f2937"]} />
          <Experience />
        </Canvas>
        <Controller />
      </StyledCanva>
    </CustomizeContext>
  );
}

export default App;
