import React from 'react';
import styled from 'styled-components';


const SectionWrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 30px;
`;

const SeatButton = styled.button`
  width: 50px; 
  height: 50px; 
  background-color: ${props => props.state === "selected" ? "#007bff" : "#ccc"};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; 
  }
`;


const Seat = ({ seat, onClick }) => {
  return (
    <div>
      <SeatButton state={seat.state} onClick={() => onClick(seat)}>
        {seat.number}
      </SeatButton>
      
    </div>
  );
};

const SeatSection = ({ title, seats, onSeatClick }) => {
  return (
    <div>
      <h2>{title}</h2>
      {seats.map((seat) => (
        <Seat key={seat.number} seat={seat} onClick={onSeatClick} />
      ))}
    </div>
  );
};

export default SeatSection;
