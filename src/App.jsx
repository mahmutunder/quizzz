import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SubjectPage from "./SubjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/subject/:subject" element={<SubjectPage />} />
    </Routes>
  );
}

export default App;
