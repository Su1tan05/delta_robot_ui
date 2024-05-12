import { RosProvider, Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  ManualControllPage,
  PlotsPage,
  SettingsPage,
  TablePage,
} from "./pages";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RosProvider>
          <Header />
          <Routes>
            <Route path="manualControll" element={<ManualControllPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="plots" element={<PlotsPage />} />
            <Route path="table" element={<TablePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>
          {/* <Iframe url="http://localhost:1111/"
        width="1200px"
        height="600px"
        id=""
        className=""
        display="block"
        position="relative"/> */}
        </RosProvider>
      </BrowserRouter>
    </Provider>
  );
}
