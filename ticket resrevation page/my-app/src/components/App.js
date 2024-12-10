import React, { useState } from "react";
import styled from "styled-components";
import seatsData from '../assets/seats.json';


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  height: 100vh;
`;

const TotalPrice = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const SeatSectionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 20px;
  padding: 5px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  border: 0.25px solid gray;
  border-radius: 20px;
  width: 30%;
  padding: 10px;

  &:nth-child(4) {
    width: 45%;
  }

  &:nth-child(3) {
    align-items: center;
    width: 18%;
  }

  &:nth-child(1) {
    align-items: center;
    width: 18%;
  }
`;

const SeatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const Seat = styled.button`
  width: 40px;
  height: 40px;
  margin: 5px;
  background-color: ${(props) =>
    props.state === "selected" ? "green" : props.state === "reserved" ? "gray" : "lightgray"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Flex_row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
 
  padding: 10px;
`;

const Stage_div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
 background-color: aqua;
  padding: 10px 50px;
`;



const App = () => {
  const [seats, setSeats] = useState(seatsData);
  const [totalClicks, setTotalClicks] = useState(0);

  const handleSeatClick = (clickedSeat) => {
    setSeats((prevSeats) => {
      return prevSeats.map((seat) => {
        if (seat.number === clickedSeat.number) {
          if (seat.clickCount >= 4) {
            alert("This seat is reserved");
            return seat;
          }

          const updatedSeat = {
            ...seat,
            clickCount: seat.clickCount ? seat.clickCount + 1 : 1,
            state: seat.state === "selected" ? "unselected" : "selected",
          };

          return updatedSeat;
        }
        return seat;
      });
    });

    setTotalClicks((prevClickCount) => prevClickCount + 1);
  };

  const totalPrice = seats
    .filter((seat) => seat.state === "selected")
    .reduce((total, seat) => total + seat.price, 0);

  const groupSeatsByRow = (seats, seatsPerRow) => {
    const rows = [];
    for (let i = 0; i < seats.length; i += seatsPerRow) {
      rows.push(seats.slice(i, i + seatsPerRow));
    }
    return rows;
  };

  return (
    <AppWrapper>
      <h1>Seat Reservation System</h1>
      <Flex_row>
        <TotalPrice>Count: {totalClicks}</TotalPrice>
        <TotalPrice>Total Price: {totalPrice} Toman</TotalPrice>
      </Flex_row>

      <Stage_div>Stage</Stage_div>
      <SeatSectionsWrapper>
        {["B", "A", "C", "D"].map((section) => {
          let seatsPerRow = 2;
          if (section === "A") seatsPerRow = 8;
          if (section === "B") seatsPerRow = 5;
          if (section === "C") seatsPerRow = 5;
          if (section === "D") seatsPerRow = 12;

          return (
            <SectionWrapper key={section}>
              {groupSeatsByRow(seats.filter((seat) => seat.section === section), seatsPerRow).map((row, index) => (
                <SeatsRow key={index}>
                  {row.map((seat) => (
                    <Seat
                      key={seat.number}
                      state={seat.state}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat.number}
                    </Seat>
                  ))}
                </SeatsRow>
              ))}
            </SectionWrapper>
          );
        })}
      </SeatSectionsWrapper>
    </AppWrapper>
  );
};

export default App;
