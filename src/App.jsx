import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import SubjectPage from "./SubjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/subject/:subject" element={<SubjectPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
