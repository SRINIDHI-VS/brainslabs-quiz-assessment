import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles/quiz.css'

const Quiz = () => {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({});
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/capital')
      .then(response => {setCountries(response.data.data)
        inputRef.current.focus()})
      .catch(error => console.error(error));
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

  return (
    <div className='container'>
      <h1>Hi Sam😄, Guess the Capital City🗺️</h1>
      {currentCountry.name && (
        <div>
          <h2>What is the capital city of <span>{currentCountry.name}?</span></h2>
          <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleInputChange} ref={inputRef} />
            <button type="submit" disabled={!userInput}>Check Answer</button>
          </form>
          {isCorrect === true && (
            <p className='correct'>Correct🥳 </p>
          )}
          {isCorrect === false && (
            <p className='incorrect'>Incorrect😞. The correct answer is <span>{currentCountry.capital}.</span></p>
          )}
          {isCorrect !== null && (
            <button onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
