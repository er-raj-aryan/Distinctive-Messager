import React, { useState, useEffect } from 'react';
import { FormControl,  Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc =>({id: doc.id,message :doc.data()}) ))

    })
  }, [])


  useEffect(() => {
    setUsername(prompt('Please enter your name'));

  }, [])
  // all logic to send code is here
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');

  }

  return (
    <div className="App">
      <img id="icon" src="https://pbs.twimg.com/profile_images/1267323349249605633/V9puzVnU_400x400.jpg" alt="DM"  ></img>
      <h1>Distinctive Messanger</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="enter the message" type="text" value={input} onChange={event => setInput(event.target.value)} />
        <IconButton className="app_iconButton"disabled={!input} variant="contained" color="primary" onClick={sendMessage}>
          <SendIcon/>
        </IconButton>
      </FormControl></form>

      <FlipMove>
         {/*message section*/}
      {
        messages.map(({id,message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }

      </FlipMove>
     
    </div>
  );
}

export default App;
