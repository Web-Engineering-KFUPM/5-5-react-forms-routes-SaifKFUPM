import { Routes, Route, NavLink } from 'react-router-dom';
export default function Home() {
  return (
    <section>
      <header className="hero card">
        <h1>Welcome to the React Student Portal</h1>
        <p>Register, explore, and get ready for the upcoming React course.</p>
        <div className="badges">
          <span className="badge">React Router</span>
          <span className="badge">Controlled Forms</span>
          <span className="badge">Validation</span>
        </div>
      </header>

      <div className="grid-2">
        <div className="card">
          <h3>Latest Announcements</h3>
          <ul className="list">
            <li>
              🎉 Course kickoff: <b>Nov 3, 2025</b>
            </li>
            <li>📦 Starter repo posted in LMS</li>
            <li>🧪 Lab 1: Router + Form Validation</li>
          </ul>
        </div>

        <div className="card">
          <h3>Quick Start</h3>
          <ol className="list ordered">
            <li>Open the Registration page</li>
            <li>Add a password field</li>
            <li>Add gender radio buttons</li>
            <li>Make all fields required</li>
            <li>Validate email format</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
