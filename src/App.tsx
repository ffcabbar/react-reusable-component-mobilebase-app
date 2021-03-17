import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import SuccessPage from "./components/SuccessPage/SuccessPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/successpage" component={SuccessPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
