import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const SeatButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  background-color: ${({ state }) =>
    state === "unselected"
      ? "#e0e0e0"
      : state === "selected"
      ? "#ffc107"
      : state === "readyToPay"
      ? "#17a2b8"
      : state === "reserved"
      ? "#dc3545"
      : "#e0e0e0"};

  color: ${({ state }) => (state === "reserved" ? "#fff" : "#000")};

  &:hover {
    opacity: 0.9;
  }
`;
