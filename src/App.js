import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width:"98%"}}>
          <div>
            <img src={process.env.PUBLIC_URL + "/IMG_0546.jpg"} width={"100%"}/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
