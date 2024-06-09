"use client";
import React, { useState } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [squaresHistory, setSquaresHistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const squares = squaresHistory[currentStep];

  const onSquareClick = (index: number) => {
    const newSquares = squares.slice();
    if (newSquares[index] === 'X') {
      newSquares[index] = null; 
    } else {
      newSquares[index] = 'X'; 
    }
    const newSquaresHistory = squaresHistory.slice(0, currentStep + 1);
    setSquaresHistory([...newSquaresHistory, newSquares]);
    setCurrentStep(currentStep + 1);
  };

  const onBackButtonClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      alert("Geri alınacak hamle yok!");
    }
  };

  return (
    <main className={styles.main}>
      <button className={styles.backButton} onClick={onBackButtonClick}>
        GERİ AL
      </button>

      <div className={styles.squareContainer}>
        {squares.map((square, index) => (
          <div 
            key={index} 
            className={styles.square} 
            onClick={() => onSquareClick(index)}
          >
            {square}
          </div>
        ))}
      </div>
    </main>
  );
}









