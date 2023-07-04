import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div style={{fontSize: 24, fontWeight: 900, marginBottom: 10}}>
            Wethersfield Teen Theater Company presents…
          </div>
         

          <div>
            <img src={process.env.PUBLIC_URL + "/000432_hero.jpg"} />
          </div>

          <div style={{fontSize: 24, fontWeight: 900, marginBottom: 10}}>
            Show Dates <br/>
            Thursday, July 20 - 7:30pm<br/>
            Friday, July 21 - 7:30pm<br/>
            Saturday, July 22 - 2:00pm & 7:30pm<br/>
          </div>

          <div className="row">
            <div className="column" style={{textAlign: 'left'}}>
              Tickets on sale July 14<br/>
              Buy tickets on <a href="https://www.Showtix4u.com" target="_blank">www.Showtix4u.com</a><br/>
              Or at the door<br/>
              $12 - adults<br/>
              $7 - Students and Seniors<br/>
            </div>
            <div className="column">
              Wethersfield High School Auditorium<br/>
              411 Wolcott Hill Rd<br/>
              Wethersfield, CT 06109<br/>
            </div>
          </div>

          <div>
            Is presented through special arrangement with Music Theatre International (MTI).  <br/>
            All authorized performance materials are also supplied by MTI.<br/>
            www.mtishows.com<br/>
          </div>


        </p>
      </header>
    </div>
  );
}

export default App;
