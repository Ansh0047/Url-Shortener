import { useState } from "react";

const apiurl = import.meta.env.VITE_API_URL;
export default function App() {
  const [url, setUrl] = useState("");
  const [shortId, setShortId] = useState("");
  const [error, setError] = useState(null);

  const handleClick = async () => {
    // send the user url to backend to get the shortId
    try {
      const res = await fetch(`${apiurl}/url`, {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      if (!res.ok) {
        setError(data.error);
        return;
      }

      const id = data.id;
      setShortId(id);
    } catch (error) {
      setError(data.error);
    }

    // console.log("button clicked " + url);
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          URL Shortener
        </h1>

        <div className="flex flex-col space-y-4">
          <label className="text-gray-600 font-medium">Enter the URL</label>
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>

        {shortId && (
          <div>
            <p>Generated Url : 
              <a 
              href={`${apiurl}/url/${shortId}`}
              target="_blank" 
              rel="noopener noreferrer"> {`${apiurl}/url/${shortId}`}</a>
            </p>
          </div>
        )}

        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
