import Layout from "./layouts"
import './App.css';
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
