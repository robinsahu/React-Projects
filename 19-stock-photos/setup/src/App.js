import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const pageUrl = "&page=";
const searchParam = "&query=";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const fetchPhotos = async () => {
    let url;
    if (query) {
      url = `${searchUrl}${clientId}${searchParam}${query}`; // will get different type of response for search URL
    } else {
      url = `${mainUrl}${clientId}${pageUrl}${page}`;
    }
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (query && page === 1) {
        return setPhotos([...data.results]);
      } else if (query) {
        setPhotos((oldPhotos) => {
          return [...oldPhotos, ...data?.results];
        });
      } else {
        setPhotos((oldPhotos) => {
          return [...oldPhotos, ...data];
        });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  const scrollEvent = () => {
    console.log(window.innerHeight, window.scrollY, document.body.scrollHeight);
    if (
      !loading &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
    ) {
      setPage((oldPage) => oldPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query && page !== 1) setPage(1);
    else {
      fetchPhotos();
    }
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-input"
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
