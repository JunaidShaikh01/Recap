import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [uploads, setUploads] = useState([]);
  const [media, setmedia] = useState([]);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAudioChange = (e) => {
    setAudio(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("audio", audio);

    const response = await axios.post(
      "http://localhost:3001/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setUploads([...uploads, response.data]);
  };

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get("http://localhost:3001/uploads");
        console.log("Fetching Media ", response.data);
        setmedia(response.data);
      } catch (error) {
        console.error("Error fetchning media:-", error);
      }
    };
    fetchMedia();
  }, []);

  // console.log(":-", fetchUploads);
  console.log("Uploades :- ", uploads);
  console.log("Media :-", media);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Image and Audio</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Audio
          </label>
          <input
            type="file"
            accept="audio/*"
            onChange={handleAudioChange}
            className="mt-1 block w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Upload
        </button>
      </form>
      <button
        // onClick={fetchUploads}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Fetch Uploads
      </button>
      <ul className="mt-4 space-y-2">
        
        {media.length > 0 &&
          media.map((item) => (
            <li key={item.id}>
              {/* <h1>{item}</h1> */}
              <img
                src={`http://localhost:3001/${item.imageUrl}`}
                alt="Uploaded"
                className="w-32 h-32 object-cover"
              />
              <audio
                controls
                src={`http://localhost:3001/${item.audioUrl}`}
                className="w-full mt-2"
              />
              Your browser does not support the audio element.
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
