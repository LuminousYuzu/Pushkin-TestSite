import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ResultsPage = () => {
  const { rank } = useParams();
  const score = rank; 
  const averageScore = 67.19; // Example average score, replace with actual data

  // Calculate the number of people to highlight
  const totalPeople = 5;
  const highlightedPeople = Math.round((rank / 100) * totalPeople);

  const peopleIcons = Array.from({ length: totalPeople }, (_, i) => (
    <div
      key={i}
      style={{
        display: 'inline-block',
        width: '20px',
        height: '40px',
        backgroundColor: i < highlightedPeople ? 'blue' : 'gray',
        borderRadius: '10px',
        margin: '0 5px'
      }}
    />
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
