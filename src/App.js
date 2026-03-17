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
            <img src={process.env.PUBLIC_URL + "/IMG_1839.JPEG"} width={"80%"}/>
          </div>

          <div style={{fontSize: 16, fontWeight: 900, marginBottom: 10}}>
            Downoad <a href='{process.env.PUBLIC_URL + "/WTTC_Mean_Girls_Audition_Packet.pdf"}'>WTTC Mean Girls Audition Packet</a>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
