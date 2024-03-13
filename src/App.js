import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width:"98%"}}>
          <div style={{fontSize: 24, fontWeight: 900, marginBottom: 10}}>
            Wethersfield Teen Theater Company presents…
          </div>
         

          <div>
            <img src={process.env.PUBLIC_URL + "/IMG_0546.JPG"} width={"80%"}/>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
