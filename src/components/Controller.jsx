import styled, { css } from "styled-components";
import { useCustomize } from "../context/CustomizeContext";
import { chairColors, cushionColors } from "../context/dataColor";

const StyledControl = styled.div`
  position: fixed;

  right: 2.4rem;
  width: 28rem;
  top: 5dvh;
  background-color: var(--color-grey-400);

  color: var(--color-grey-0);

  border: 1px solid var(--color-grey-0);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const StyledTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.4rem;
  text-transform: uppercase;

  border-bottom: 1px solid var(--color-grey-0);
  background-color: var(--color-grey-800);
  overflow: hidden;
  & h2 {
    text-align: center;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s all;
`;

const StyledLeather = styled.div`
  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-brand-600);
      border-radius: var(--border-radius-md);
      padding: 0.7rem;
    `}

  font-weight: 500;
  transition: 0.5s all;

  &:hover {
    padding: 0.7rem;
    color: var(--color-grey-900);
    background-color: var(--color-brand-600);
    border-radius: var(--border-radius-md);
  }
`;
const StyledFabric = styled.div`
  ${(props) =>
    props.$active &&
    css`
      padding: 0.7rem;
      background-color: var(--color-brand-600);
      border-radius: var(--border-radius-md);
    `}

  font-weight: 500;
  transition: 0.5s all;

  &:hover {
    padding: 0.7rem;
    color: var(--color-grey-900);
    background-color: var(--color-brand-600);
    border-radius: var(--border-radius-md);
  }
`;

const StyledChairColor = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: 1px solid var(--color-grey-700);
  background-color: ${(props) => props.$color};

  display: flex;
  gap: 3rem;
`;

const SyledUL = styled.ul`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s all;

  ${(props) =>
    props.$active &&
    css`
      padding: 0.3rem;
      background-color: var(--color-brand-600);
      border-radius: var(--border-radius-md);
    `}

  & div {
    font-size: 1rem;
    text-transform: capitalize;
  }

  &:hover {
    padding: 0.3rem;
    color: var(--color-grey-900);
    background-color: var(--color-brand-600);
    border-radius: var(--border-radius-md);
  }
`;

export default function Controller() {
  const {
    legs,
    material,
    selectMaterials,
    selectLegs,
    chairColor,
    selectColor,
    selectCushionColor,
    cushionColor,
  } = useCustomize();

  return (
    <StyledControl>
      <section>
        <StyledTitle>
          <h2>Chair Material</h2>
        </StyledTitle>
        <StyledFlex>
          <StyledLeather
            $active={material === "leather"}
            onClick={() => selectMaterials("leather")}
          >
            Leather{" "}
          </StyledLeather>
          <StyledFabric
            $active={material === "fabric"}
            onClick={() => selectMaterials("fabric")}
          >
            Fabric{" "}
          </StyledFabric>
        </StyledFlex>
      </section>

      <section>
        <StyledTitle>
          <h2>Leg model</h2>
        </StyledTitle>
        <StyledFlex>
          <StyledLeather $active={legs === 1} onClick={() => selectLegs(1)}>
            Modern{" "}
          </StyledLeather>
          <StyledFabric $active={legs === 2} onClick={() => selectLegs(2)}>
            Classic{" "}
          </StyledFabric>
        </StyledFlex>
      </section>

      <section>
        <StyledTitle>
          <h2>Chair Color</h2>
        </StyledTitle>
        <SyledUL>
          {chairColors.map((color) => (
            <StyledLi
              key={color.name}
              $active={chairColor === color.color}
              onClick={() => selectColor(color.color)}
            >
              <StyledChairColor $color={color.color} />
              <div>{color.name}</div>
            </StyledLi>
          ))}
        </SyledUL>
      </section>

      <section>
        <StyledTitle>
          <h2>Cusion Color</h2>
        </StyledTitle>
        <SyledUL>
          {cushionColors.map((color) => (
            <StyledLi
              key={color.name}
              $active={cushionColor === color.color}
              onClick={() => selectCushionColor(color.color)}
            >
              <StyledChairColor $color={color.color} />
              <div>{color.name}</div>
            </StyledLi>
          ))}
        </SyledUL>
      </section>
    </StyledControl>
  );
}
