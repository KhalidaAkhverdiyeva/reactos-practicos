import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './component/CustomNavbar';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Blog from './pages/Blog/blog';
import useSWR from 'swr';
import './index.css';

const fetcher = (...args) => fetch(...args)
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });

function App() {
  const { data, error } = useSWR('http://localhost:5000/data', fetcher);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const processedData = data.map(item => ({
        ...item,
        id: crypto.randomUUID()
      }));
      setUsers(processedData);
    }
  }, [data]);

  if (error) {
    console.error('Error loading data:', error);
    return <div>Error loading data</div>;
  }

  if (!data) return <div>Loading...</div>;
  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return <div>Error: Data is not an array</div>;
  }

  const addUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  return (
    <Router>
      <header>
        <CustomNavbar />
      </header>
      <Routes>
        <Route exact path='/' element={<Home data={users} />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog addUser={addUser} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;