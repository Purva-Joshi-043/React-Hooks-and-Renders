import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useReducer } from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFeteching from "./components/DataFeteching";
import UseContextComponentC from "./components/UseContextComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import UseMemo from "./components/UseMemo";
import FocusInput from "./components/FocusInput";
import HookTimer from "./components/HookTimer";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CustomHookCounter from "./components/CustomHookCounter";
import CustomHookCounterTwo from "./components/CustomHookCounterTwo";
import CustomHookForm from "./components/CustomHookForm";
import UseState from "./React Render/UseState/UseState";
import { UseReducer } from "./React Render/UseState/UseReducer/UseReducer";
import { ObjectUseState } from "./React Render/UseState/Immutable State/ObjectUseState";
import { ArrayUseState } from "./React Render/UseState/Immutable State/ArrayUseState";
import Parent from "./React Render/UseState/Parent Child/Parent";
import ParentOne from "./React Render/UseState/Optimisation/ParentOne";
import { ChildOne } from "./React Render/UseState/Optimisation/ChildOne";
import { GrandParent } from "./React Render/UseState/Optimisation/GrandParent";
import ParentTwo from "./React Render/UseState/Optimisation/ParentTwo";
import ParentThree from "./React Render/UseState/Incorrect Optimisation/ParentThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <div className="App">
    //   {/* <HookCounter/> */}
    //   {/* <HookCounterTwo/> */}
    //   {/* <HookCounterThree/> */}
    //   {/* <HookCounterFour/> */}
    //   {/* <HookCounterOne/> */}
    //   {/* <HookMouse/> */}
    //   {/* <MouseContainer/> */}
    //   {/* <IntervalHookCounter/> */}
    //   {/* <DataFeteching/> */}

    //   {/* <UserContext.Provider value={"Purva"}>
    //     <ChannelContext.Provider value={"React Hooks"}>
    //       <UseContextComponentC />
    //     </ChannelContext.Provider>
    //   </UserContext.Provider> */}
    //   {/* <CounterOne/> */}
    //   {/* <CounterTwo/> */}
    //   {/* <CounterThree/> */}
    //   </div>
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    //   <div className="App">
    //     Count - {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
    // <div className="App">
    //    {/* <DataFetchingOne/> */}
    //   {/* <DataFetchingTwo/> */}
    //   {/* <UseMemo/> */}
    //   {/* <FocusInput/> */}
    //   {/* <HookTimer/> */}
    //   {/* <DocTitleOne/>
    //   <DocTitleTwo/> */}
    //   {/* <CustomHookCounter/>
    //   <CustomHookCounterTwo/> */}
    //   {/* <CustomHookForm/> */}
    //   <UseState/>

    // </div>
    //React Render 
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer/> */}
      {/* <ObjectUseState/> */}
      {/* <ArrayUseState/> */}
      {/* <Parent/> */}
      {/* <ParentOne>
        <ChildOne/>
      </ParentOne> */}
      {/* <GrandParent/> */}
      {/* <ParentTwo/> */}
      <ParentThree/>
    </div>
  );
}

export default App;
