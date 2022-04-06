import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home/Home";
import Colleague from "./routes/Сolleague/Colleague";

function App() {
  return (
    <div className="app">
    <div className="app-header">
      <Link to={'/'}>memo app</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colleague" element={<Colleague />} />
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
    </div>
  );
}

export default App;
