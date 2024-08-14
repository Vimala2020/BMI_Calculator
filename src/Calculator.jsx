import React, { useState } from 'react';
import underweight from './assets/underweight.png';
import obese from './assets/obese.png';
import healthy from './assets/healthy.png';
import overweight from './assets/overweight.png'

function Calculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  

  const calculateBmi = (e) => {
    e.preventDefault();

    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setMessage('You are underweight');
        setImage(underweight);
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setMessage('You are normal weight');
        setImage(healthy);
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setMessage('You are overweight');
        setImage(overweight);
      } else {
        setMessage('You are obese');
        setImage(obese);
      }
    } else {
      setMessage('Please enter a valid weight and height');
    }
  };

  const reload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
    setImage('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">BMI Calculator</h1>
        <form onSubmit={calculateBmi} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Weight (kgs):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight (kgs)"
              className="w-full p-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Height (cms):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height (cm)"
              className="w-full p-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg mt-4 hover:bg-blue-700 transition-colors font-semibold"
          >
            Calculate BMI
          </button>
          <button
            type="button"
            onClick={reload}
            className="w-full bg-gray-600 text-white p-3 rounded-lg mt-2 hover:bg-gray-700 transition-colors font-semibold"
          >
            Reset
          </button>
        </form>
        {bmi && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-green-700">Your BMI is: {bmi}</h2>
            <p className="text-gray-700 font-semibold">{message}</p>
            {image && <img src={image} alt={message} className="mx-auto mt-4 w-28 h-36 animate-fadeIn" />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
