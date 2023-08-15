import React, { useState }  from 'react';
import { db } from './firebase';

const FormData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();

      // Add form data to Firestore
      await db.collection('formData').add({
          name: name,
          email: email,
          timestamp: new Date()
      });

      // Clear the input fields after submission
      setName('');
      setEmail('');
  };
  return (
    <div>
        <h1>Submit Form Data</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
);
}


export default FormData
