import React, { Fragment } from "react";
import { mapping, light as theme } from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
} from "react-native-ui-kitten";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import Firebase, { FirebaseProvider } from "./src/utils";
import AppContainer from "./src/navigation";

const strictTheme = { ["text-font-family"]: "OpenSans" }; // <-- Your Font

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <FirebaseProvider value={Firebase}>
        <AppContainer />
      </FirebaseProvider>
    </ApplicationProvider>
  </>
);

export default App;
