import React from "react";
// import "./PointNav.css";

const PointNav = () => {
  return (
    <div className="PointNav">
      <aside>
        <nav>
          <h2>Priority</h2>
          <ul>
            <li><button className="prev" alt="previous"></button></li>
            <li><h2>1</h2></li>
            <li><button className="next" alt="next"></button></li>
          </ul>
        </nav>
        <section>
          <h3>Category Name</h3>
          <ul>
            <li className="listItem"><p>1.1 - Point Title</p></li>
            <li className="listItem"><p>1.2 - Point Title</p></li>
            <li className="listItem"><p>1.3 - Point Title</p></li>
            <li className="listItem"><p>1.4 - Point Title</p></li>
            <li className="listItem"><p>1.5 - Point Title</p></li>
            <li className="listItem"><p>1.6 - Point Title</p></li>
            <li className="listItem"><p>1.7 - Point Title</p></li>
            <li className="listItem"><p>1.8 - Point Title</p></li>
            <li className="listItem"><p>1.9 - Point Title</p></li>
            <li className="listItem"><p>1.10 - Point Title</p></li>
            <li className="listItem"><p>1.11 - Point Title</p></li>
            <li className="listItem"><p>1.12 - Point Title</p></li>
            <li className="listItem"><p>1.13 - Point Title</p></li>
            <li className="listItem"><p>1.14 - Point Title</p></li>
            <li className="listItem"><p>1.15 - Point Title</p></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

export default PointNav;