import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <h1>Select a Subject</h1>
      <div className="buttons">
        <Link to="subject/html" className="btn">HTML</Link> {/* ✅ Remove leading `/` */}
      </div>
    </div>
  );
}

export default HomePage;
