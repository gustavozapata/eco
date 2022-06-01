import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Templates</h2>
      <nav>
        <li>
          <Link to="/templates/landing-page">Templates / Landing page</Link>
        </li>
        <li>
          <Link to="/templates/documentation">Templates / Documentation</Link>
        </li>
      </nav>
    </div>
  );
}

export default App;
