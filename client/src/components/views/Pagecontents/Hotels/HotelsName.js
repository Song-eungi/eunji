import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HotelsName() {
  const [totalHotels, setTotalHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHotels = async() => {
    try {
      // 요청 처음에 초기화
      setError(null);
      setTotalHotels([]);
      // loading 상태 true
      setLoading(true);

      const response = await axios.get('http://localhost:3001/api/concat');
      setTotalHotels(response.data);
      console.log('fetch HotelNames');
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchHotels();
  }, []);

  //Country
  const [selectedCountry, setSelectedCountry] = useState(null);
  const hotelsCountries = totalHotels.map(concat => concat.keyword);
  const selectCountry = (e) => {
    setSelectedCountry(e.target.value);
  }

  //Location
  const [selectedLocation, setSelectedLocation] = useState(null);
  const hotelsLocations = totalHotels
    .filter(hotels  => selectedCountry === hotels.keyword)
    .map(concat => concat.PRDUCT);
  const selectLocation = (e) => {
    setSelectedLocation(e.target.value);
  }


  

  if (loading) return (<div className='loading'><h1>로딩중..</h1></div>);
  if (error) return (
    <div className='error'>
      <h1>로딩중 에러가 발생했습니다.</h1>
      <button onClick={fetchHotels}>다시 불러오기</button>
    </div>);
  if (!totalHotels) return null;
  
  return (
    <div>
        <label>기능: </label>
        <select id="country-select" defaultValue="default" onClick={selectCountry}>
          <option value="default" disabled>
            Choose a Function ...
          </option>
          {[...new Set(hotelsCountries)].map((hotelsCountry, key) => (
            <option value={hotelsCountry} key={key}>{hotelsCountry}</option>
          ))}
        </select>
        <br></br>

        <label>영양제: </label>
        <select id="location-select" defaultValue="default" onClick={selectLocation}>
          <option value="default" disabled>
            Choose a Nutrients ...
          </option>
          {[...new Set(hotelsLocations)].map((hotelsLocation, key) => (
            <option value={hotelsLocation} key={key}>{hotelsLocation}</option>
          ))}
        </select>
        <br></br>
        
        
      </div>
  );
}

export default HotelsName;