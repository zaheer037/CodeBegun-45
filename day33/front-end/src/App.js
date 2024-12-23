import './App.css';
import Profile from './components/Profile';
import Content from './components/Content';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
        <Content/>
        <h2>Hello</h2>
      </header>
    </div>
  );
}

export default App;
