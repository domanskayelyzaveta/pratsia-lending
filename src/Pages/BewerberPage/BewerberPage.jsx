import { Outlet, Link } from "react-router-dom";

const BewerberPage = () => {
  return (
    <div>
      <h1>Bewerber Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="branchen">Branchen</Link>
          </li>
          <li>
            <Link to="jobangebote">Jobangebote</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default BewerberPage;
