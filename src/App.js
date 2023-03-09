import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddUserPage from "./pages/AddUserPage";
import MainPage from "./pages/MainPage";
import React, {useState,useEffect} from 'react';

function App() {
  const [isLoading, setLoading] = useState(true);

  
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      <div style = {{ padding: 10 }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<AddUserPage />} />
          <Route path="/items" element={<IndexPage />} />

          <Route path="/add" element={<AddUserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
