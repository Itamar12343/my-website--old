import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
