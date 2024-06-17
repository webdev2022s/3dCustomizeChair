import { createContext, useContext, useReducer } from "react";
import { chairColors, cushionColors } from "./dataColor";

const CustomizeContextProvider = createContext();

const initialState = {
  material: "leather",
  legs: 1,
  chairColor: chairColors.at(0),
  cushionColor: cushionColors.at(0),
};

function reducer(state, action) {
  switch (action.type) {
    case "setMaterial":
      return { ...state, material: action.payLoad };
    case "setLegs":
      return { ...state, legs: action.payLoad };

    case "setChairColor":
      return { ...state, chairColor: action.payLoad };

    case "setCusionColor":
      return { ...state, cushionColor: action.payLoad };
    default:
      throw new Error("Unknown Action Type");
  }
}

function CustomizeContext({ children }) {
  const [{ material, legs, chairColor, cushionColor }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function selectMaterials(data) {
    dispatch({ type: "setMaterial", payLoad: data });
  }

  function selectLegs(data) {
    dispatch({ type: "setLegs", payLoad: data });
  }

  function selectColor(data) {
    dispatch({ type: "setChairColor", payLoad: data });
  }

  function selectCushionColor(data) {
    dispatch({ type: "setCusionColor", payLoad: data });
  }

  const value = {
    material,
    legs,
    chairColor,
    cushionColor,
    selectMaterials,
    selectLegs,
    selectColor,
    selectCushionColor,
  };
  return (
    <CustomizeContextProvider.Provider value={value}>
      {children}
    </CustomizeContextProvider.Provider>
  );
}

function useCustomize() {
  const context = useContext(CustomizeContextProvider);
  if (context === undefined) throw new Error("Context is out of Range");
  return context;
}

export { CustomizeContext, useCustomize };
