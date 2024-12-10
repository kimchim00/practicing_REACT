import React from "react";
import styled from "styled-components";


const SeatWrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${(props) =>
    props.state === "unselected"
      ? "#ccc"
      : props.state === "selected"
      ? "#ff9800"
      : props.state === "temporary"
      ? "#03a9f4"
      : props.state === "reserved"
      ? "#4caf50"
      : "#fff"};
`;

const Seat = ({ number, state, onClick }) => {
  return (
    <SeatWrapper state={state} onClick={onClick}>
      {number}
    </SeatWrapper>
  );
};

export default Seat;
