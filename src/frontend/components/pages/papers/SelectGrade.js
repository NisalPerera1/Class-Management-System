import React, { useState } from 'react';
import Grade6 from './Grade6';
import Grade7 from './Grade7';
import Grade8 from './Grade8';
import Grade9 from './Grade9';
import Grade10 from './Grade10';
import Grade11 from './Grade11';
import { Button } from '@mui/material';
import './papers.css'





export default function SelectGrade() {
  const [selectedGrade, setSelectedGrade] = useState(null);

  const handleClick6 = () => {
    setSelectedGrade('G6');
  };

  const handleClick7 = () => {
    setSelectedGrade('G7');
  };

  const handleClick8 = () => {
    setSelectedGrade('G8');
  };
  const handleClick9 = () => {
    setSelectedGrade('G9');
  };
  const handleClick10 = () => {
    setSelectedGrade('G10');
  };
  const handleClick11 = () => {
    setSelectedGrade('G11');
  };

  return (
<div class="d-grid gap-2 col-6 mx-auto">
<br></br>
      {selectedGrade === 'G6' ? (
        <Grade6 />
      ) : (
        //hide g7,8,9,10,11
        selectedGrade !== 'G7' && selectedGrade !== 'G8' && selectedGrade !== 'G9' && selectedGrade !== 'G10' && selectedGrade !== 'G11' &&(
        <button class="btn btn-primary" type="button" onClick={handleClick6}>Grade 6</button>
        )
      )}


      {selectedGrade === 'G7' ? (
        <Grade7 />
      ) : (
        selectedGrade !== 'G6' && selectedGrade !== 'G8' && selectedGrade !== 'G9' && selectedGrade !== 'G10' && selectedGrade !== 'G11' &&(
          <button class="btn btn-primary" type="button" onClick={handleClick7}>Grade 7</button>
        )
      )}


{selectedGrade === 'G8' ? (
        <Grade8 />
      ) : (
        //hide g6,g7
        selectedGrade !== 'G6' && selectedGrade !== 'G7' && selectedGrade !== 'G9' && selectedGrade !== 'G10' && selectedGrade !== 'G11' &&(
          <button class="btn btn-primary" type="button" onClick={handleClick8}>Grade 8</button>
        )
      )}

{selectedGrade === 'G9' ? (
        <Grade9 />
      ) : (
        //hide g6,g7
        selectedGrade !== 'G6' && selectedGrade !== 'G7' && selectedGrade !== 'G8' && selectedGrade !== 'G10' && selectedGrade !== 'G11' &&(
          <button class="btn btn-primary" type="button" onClick={handleClick9}>Grade 9</button>
        )
      )}

      {selectedGrade === 'G10' ? (
        <Grade10/>
      ) : (
        selectedGrade !== 'G6' && selectedGrade !== 'G7' && selectedGrade !== 'G8' && selectedGrade !== 'G9' && selectedGrade !== 'G11' &&(
          <button class="btn btn-primary" type="button" onClick={handleClick10}>Grade 10</button>
        )
      )}

{selectedGrade === 'G11' ? (
        <Grade11 />
      ) : (
        //hide g6,g7
        selectedGrade !== 'G6' && selectedGrade !== 'G7' && selectedGrade !== 'G8' && selectedGrade !== 'G9' && selectedGrade !== 'G10' &&(
          <button class="btn btn-primary" type="button" onClick={handleClick11}>Grade 11</button>
        )
      )}


      
    </div>
  );
}
