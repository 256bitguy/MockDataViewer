import React, { useState, useEffect } from 'react';
 
 
 
import './index.css';
import SearchBar from './Components/SearchBar';
import RecordList from './Components/RecordList';
import { generateMockData } from './utils/GenerateMockData';

const App = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const allData = generateMockData();

  const fetchRecords = (allData, offset, limit) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (offset < allData.length) {
          resolve(allData.slice(offset, offset + limit));
        } else {
          reject(new Error('No more records to load'));
        }
      }, 500);
    });
  };

  const loadMoreData = async () => {
    setLoading(true);
    try {
      const newRecords = await fetchRecords(allData, offset, 10);
      setData((prevData) => [...prevData, ...newRecords]);
      setOffset((prevOffset) => prevOffset + 10);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const filteredData = data.filter(
    (record) =>
      record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Mock Data Viewer</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RecordList data={filteredData} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <button onClick={loadMoreData} disabled={loading} className="load-more-button">
        Load More
      </button>
    </div>
  );
};

export default App;
