import './App.css';
import HomeServices from './components/HomeServices/HomeServices';
import Header from './components/Layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeServices />
      </main>
    </div>
  );
}

export default App;
