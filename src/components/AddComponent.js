import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";

const AddComponent = (props) => {
  const navigate = useNavigate();
  const [listing, setListing] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
  });

  const handleTextChange = (e) => {
    const { id, value } = e.target;
    console.log(e.target);
    setListing({
      ...listing,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addListing({
        id: Date.now(),
        ...listing
    });
    navigate("/");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "350px" }}
      >
        <TextField
          id="name"
          placeholder="Name"
          value={listing.name}
          onChange={handleTextChange}
          required
        />
        <TextField
          id="address"
          placeholder="Address"
          value={listing.address}
          onChange={handleTextChange}
          required
        />
        <TextField
          id="hours"
          placeholder="Hours"
          value={listing.hours}
          onChange={handleTextChange}
          required
        />
        <TextField
          id="description"
          placeholder="Description"
          value={listing.description}
          onChange={handleTextChange}
          required
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>

      <iframe
        title="map"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}
    &q=${listing.name}+${listing.address}`}
      ></iframe>
    </div>
  );
};

export default AddComponent;
