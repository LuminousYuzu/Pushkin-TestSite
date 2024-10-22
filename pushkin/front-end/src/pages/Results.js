import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { IoAccessibilityOutline, IoAccessibility } from "react-icons/io5";

const ResultsPage = () => {
  const { rank } = useParams();
  const score = rank; 
  const averageScore = 67.19; 

  // Calculate the number of people to highlight
  const totalPeople = 5;
  const highlightedPeople = Math.round((rank / 100) * totalPeople);

  const peopleIcons = Array.from({ length: totalPeople }, (_, i) => (
    i < highlightedPeople 
      ? <IoAccessibility key={i} style={{ margin: '0 5px', fontSize: '50px' }} /> 
      : <IoAccessibilityOutline key={i} style={{ margin: '0 5px', fontSize: '50px' }} />
  ));

  return (
    <Container className="mt-5 text-center">
      <h2>Your score .................... {score}</h2>
      <h2>Average score ............... {averageScore}</h2>
      <p>You scored higher than {rank} out of every 100 people who took this test:</p>
      <div>{peopleIcons}</div>
    </Container>
  );
};

export default ResultsPage;
