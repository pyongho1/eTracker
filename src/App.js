import React, { useState } from 'react';
import firebase from './firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css';


function App() {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    const db = getFirestore(firebase); // Initialize Firestore

    try {
      // Save the message to Firebase Firestore
      await addDoc(collection(db, 'spendings'), {
        text: message,
      });

      // Clear the input field
      setMessage('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='mainContainer'>
      <NavBar />
      <h1>eTracker</h1>
      <p>Enter a message:</p>
      <input type="text" value={message} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default App;