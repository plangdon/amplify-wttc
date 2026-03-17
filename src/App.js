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
            <img src={process.env.PUBLIC_URL + "/sound.jpg"} width={"80%"}/>
          </div>

          <div>
       <a href={process.env.PUBLIC_URL + "/packet.pdf"}>Download Audition Packet</a>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
