import React from "react";
import Index from "./src/Index";
import store from "./src/store/index";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Index />
      </PaperProvider>
    </Provider>
  );
}

