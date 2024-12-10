export const calculateTotalPrice = (seats) => {
    return seats
      .filter((seat) => seat.state === "selected" || seat.state === "temporary")
      .reduce((total, seat) => total + seat.price, 0);
  };
  