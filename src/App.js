import React, { useEffect, useState } from "react";
import "./App.css";
import SideNav from "./SideNav";
import Table from "./Table";
import Grid from "./Grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5`)
      .then((response) => response.json())
      .then((data) => setPhotosData(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <SideNav />
        <Routes>
          <Route path="/table" element={<Table photosData={photosData} />} />
          <Route path="/grid" element={<Grid photosData={photosData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
