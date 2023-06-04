import "regenerator-runtime/runtime";
import React, { useEffect } from "react";

import "./assets/global.css";

import HomeScreen from "./src/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPrompt from "./src/component/SignInPrompt";
import TutorScreen from "./src/TutorScreen";
import { useSetRecoilState } from "recoil";
import {
  ContractIdState,
  IsSignedInState,
  WalletState,
} from "./src/state/RecoilState";
import "./reset.css";

export default function App({ isSignedIn, contractId, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  const setIsSignedIn = useSetRecoilState(IsSignedInState);
  const setContractId = useSetRecoilState(ContractIdState);
  const setWallet = useSetRecoilState(WalletState);

  useEffect(() => {
    setIsSignedIn(isSignedIn);
    setContractId(contractId);
    setWallet(wallet);
  }, []);

  if (!isSignedIn) {
    return (
      <SignInPrompt
        greeting={valueFromBlockchain}
        onClick={() => wallet.signIn()}
      />
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <HomeScreen
                isSignedIn={isSignedIn}
                contractId={contractId}
                wallet={wallet}
              />
            }
          />
          <Route
            path='/tutor'
            element={
              <TutorScreen
                isSignedIn={isSignedIn}
                contractId={contractId}
                wallet={wallet}
              />
            }
          />
          {/* <Route path='*' element={<NotFound/>}  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
