import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home/Home";
import Colleague from "./routes/Сolleague/Colleague";
import { useEffect } from "react";
import { getData } from "app/actions/actionData";
import { useDispatch } from "react-redux";
import Questions from "routes/Questions/Questions";
import QuestionsShort from "routes/QuestionsShort/QuestionsShort";
import Settings from "routes/Settings/Settings";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  },[dispatch])
  
  return (
    <div className="app">
    <div className="app-header">
      <Link to={'/'}>memo app</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colleague" element={<Colleague />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/questions-short" element={<QuestionsShort />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    </div>
  );
}

export default App;

