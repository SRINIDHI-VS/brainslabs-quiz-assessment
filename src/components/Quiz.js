import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles/quiz.css';
import Spinner from '../components/Spinner';

const Quiz = () => {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({});
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/capital')
      .then(response => {
        setCountries(response.data.data);
        inputRef.current.focus();
      })
      .catch(error => console.error(error));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (countries.length) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      setCurrentCountry(countries[randomIndex]);
    }
  }, [countries]);

  const handleInputChange = event => {
    setUserInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (userInput.toLowerCase() === currentCountry.capital.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setCurrentCountry(countries[randomIndex]);
    setUserInput('');
    setIsCorrect(null);
  };


  // Added Spinner effect till the data being fetched from API, once data is received then the data will be showcased and spinner will be set to false.
  return isLoading ? <Spinner /> : (
    <div className='container'>
      <h1>Hi Sam😄, Guess the Capital City🗺️</h1>
      {currentCountry.name && (
        <div className='sub-container'>
          <h2>What is the capital city of <span>{currentCountry.name}?</span></h2>
          <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleInputChange} ref={inputRef} />
            <button type="submit" disabled={!userInput}>Check Answer</button>
          </form>

          {/* Conditional Rendering According to the user inputs and validation */}
          {isCorrect === true && (
            <p className='correct'>Correct🥳</p>
          )}
          {isCorrect === false && (
            <p className='incorrect'>Incorrect😞.The correct answer is <span>{currentCountry.capital}.</span></p>
          )}
          {isCorrect !== null && (
            <button onClick={handleNextQuestion}>Next👉</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
