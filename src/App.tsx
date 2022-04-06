import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";

function App() {
  return (
    <div className="app">
    <div className="app-header">
      memo app
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
    </div>
  );
}

export default App;
