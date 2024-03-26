import { BrowserRouter } from "react-router-dom"
import Pages from "./pages";
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
