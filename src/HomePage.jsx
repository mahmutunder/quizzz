import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <h1>Select a Subject</h1>
      <div className="buttons">
        <Link to="subject/html" className="btn">HTML</Link> 
        <Link to="subject/js" className="btn">JavaScript</Link> 
      </div>
    </div>
  );
}

export default HomePage;
