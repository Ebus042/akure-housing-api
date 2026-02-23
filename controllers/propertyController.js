const properties = require("../data/properties");

exports.getAllProperties = (req, res) => {
  const { location, type, price } = req.query;
  console.log("Query:", req.query);

  let filtered = properties;

  if (location) {
    filtered = filtered.filter((property) => property.location === location);
  }

  if (type) {
    filtered = filtered.filter((property) => property.houseType === type);
  }

  if (price) {
    const [min, max] = price.split("-").map(Number);

    filtered = filtered.filter(
      (property) => property.price >= min && property.price <= max,
    );
  }
  console.log("Filtered Result:", filtered);

  res.json(filtered);
};

exports.getPropertyById = (req, res) => {
  const property = properties.find((p) => p.id === parseInt(req.params.id));

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  res.json(property);
};
