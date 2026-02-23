let bookings = [];

exports.createBooking = (req, res) => {
  const { name, number, email, house, date, time } = req.body;

  if (!name || !number || !email || !house || !date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newBooking = {
    id: bookings.length + 1,
    name,
    number,
    email,
    house,
    date,
    time,
  };

  bookings.push(newBooking);

  res.status(201).json({
    message: "Booking created successfully",
    booking: newBooking,
  });
};
