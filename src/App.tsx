import Header from './components/Header/Header';
import Poster from './components/Poster/Poster';
import Market from './components/Market/Market';

function App() {

  return (
    <div className="App">
      {/* Header */}
      <Header />

      <main>
        {/* Poster */}
        <Poster />

        {/* Market */}
        <Market />

      </main>

    </div>
  );
}

export default App;
