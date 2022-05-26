import { Provider } from "react-redux";
import store from "./redux/store";
import FactsRoutes from "./Routes";

const App = () => (
  <Provider store={store}>
    <FactsRoutes />
  </Provider>
);

export default App;
