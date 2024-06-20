import React, { useState } from 'react';
import axios from 'axios';

const SongForm = () => {
  const [name, setName] = useState('');
  const [singer, setSinger] = useState('');
  const [language, setLanguage] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [song, setSong] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('singer', singer);
    formData.append('language', language);
    formData.append('category', category);
    formData.append('image', image);
    formData.append('song', song);

    try {
      const response = await axios.post('http://localhost:5000/api/dashboard/songs', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error uploading the song!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Song Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Singer Name:</label>
        <input type="text" value={singer} onChange={(e) => setSinger(e.target.value)} required />
      </div>
      <div>
        <label>Language:</label>
        <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <div>
        <label>Song Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      </div>
      <div>
        <label>Song File:</label>
        <input type="file" onChange={(e) => setSong(e.target.files[0])} required />
      </div>
      <button type="submit">Upload Song</button>
    </form>
  );
};

export default SongForm;
