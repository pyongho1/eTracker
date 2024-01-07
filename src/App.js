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
      <img src="/logo2.png" alt='eTracker' />
      <div className='container'>
        <h2>Keep track of your finance</h2>
        <button>See more</button>
        <input type="text" value={message} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Save</button>

      </div>
      {/* <div className='buttonContainer'>
        <div>box one</div>
        <div>box two</div>
        <div>box three</div>
      </div> */}
      <div class="container text-center">
        <div class="row row-cols-3 boxContainer">
          <div class="col boxContain">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Enter a new expense</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col boxContain">

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Expense History</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col boxContain">

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Expense Analytics</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col boxContain">

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">ETC</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;