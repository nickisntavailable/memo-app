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

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  },[])
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
    </Routes>
    </div>
  );
}

export default App;

