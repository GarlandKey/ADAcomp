import placeholder from './img/placeholder.webp';
import TopNav from '../TopNav/TopNav'
import OAuth from '../OAuth/OAuth';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <header className="App-header">
        <img src={placeholder} className="App-logo" alt="logo" />
        <p>
        Our web application streamlines the process of completing an Americans with Disabilities Act (ADA) compliance inspection. With our app, users can easily conduct the inspection electronically and generate complete documentation with just a few clicks. The app also includes a correspondence feature that allows users to automatically send the documentation to the client who is receiving the inspection. This saves time and effort for non-profit organizations who are conducting the inspections.
        </p>
        <OAuth />
        <h2>Android App Coming Soon!</h2>
        <img src={placeholder} className="App-mobile" alt="logo" />
      </header>
    </div>
  );
}

export default App;
