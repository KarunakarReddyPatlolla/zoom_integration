import './App.css';
import {useState} from 'react' ;
import Zoom from './components/Zoom.js' ;


function App() {
  
  const [joinMeet, setJoinMeet] = useState(false)
  const [meetId, setMeetId] = useState("")
  const [meetPassword, setMeetPassword] = useState("")

  const launchMeet = (e) => {
    e.preventDefault();

    if (meetId !== "" & meetId.length === 10) {
      setJoinMeet(true)
    }else {
      alert("Enter valid meeting Id")
    }
  }

  return (
    <div className="App">
    { joinMeet && (<Zoom meetingId = {meetId} password = {meetPassword} />) } 
     {!joinMeet && (<div className="App-header">
        <h1> Zoom Meeting </h1>
        <form className= "container" onSubmit = {launchMeet}>
          <img src="https://www.concensus.com/wp-content/uploads/2020/04/CTech_ZoomMeetingBlog.jpg" className="App-logo" alt="logo" />
          <p>
            Join meeting here
          </p>
          <input type= "text" value = {meetId} onChange = {(e) => setMeetId(e.target.value)} placeholder = "Enter Meeting ID" />
          <input type= "text" value = {meetPassword} onChange = {(e) => setMeetPassword(e.target.value)} placeholder = "Enter Meeting Password" />
          <button className= "Launch-button" type="submit" > Launch Meeting </button>
        </form>
      </div>
      )}
    </div>
  );
}

export default App;
