// import { useQuery } from '@tanstack/react-query';
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import bedRoom from "../../../assets/img/bedroom.jpg"
import bathRoom from "../../../assets/img/bathroom.jpg"
import room from "../../../assets/img/room.jpg"
import "./PropertyDetails.css";

const PropertyDetails = () => {
  // const [property, setProperty] = useState({});

  const property = useLoaderData();
  console.log(property);

  return (
    <div className="propertyPages">
      <div className="property">
        <img className="main-img" src={property?.img} alt="" />
        <div className="propertyDescrib">
          <h3>{property.propertyName}</h3>
          <div className="location">
            <FaMapMarkerAlt className="marker"></FaMapMarkerAlt>
            <span>{property?.location}</span>
          </div>
          <div className="properyDetailSection">
            <div className="smallCard">
              <img src={bedRoom} alt="" />
              <div>
                <h3>{property?.rooms}</h3>
                <h4>Bed Rooms</h4>
              </div>
            </div>
            <div className="smallCard">
              <img src={bathRoom} alt="" />
              <div>
                <h3>{property?.bathrooms}</h3>
                <h4>Bath Rooms</h4>
              </div>
            </div>
            <div className="smallCard">
              <img src={room} alt="" />
              <div>
                <h3>${property?.rent}</h3>
                <h4>Rent</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
		  <div className="propertyDetails">
			  <h2>Property Details</h2>
        <p>{property?.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
