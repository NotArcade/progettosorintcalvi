import './App.css';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
