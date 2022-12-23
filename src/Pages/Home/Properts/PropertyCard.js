import React from 'react';
import "./PropertyCard.css"
import { FaMapMarkerAlt } from "react-icons/fa";

const PropertyCard = ({ property }) => {
	return (
    <div className="card">
      <div className="card-img">
        <img src={property?.img} alt="" />
      </div>

      <div className="card-body">
        <h3 className='card-title'>{property?.propertyName.slice(0, 40)}{ property.id}</h3>
        <div className='location'>
          <FaMapMarkerAlt className='marker'></FaMapMarkerAlt>
          <span>{property?.location}</span>
        </div>
        <div className="cardDescrib">
          <div>
            <p>{property?.rooms}</p>
            <h5>Rooms</h5>
          </div>
          <div>
            <p>{property?.bathrooms}</p>
            <h5>BathRooms</h5>
          </div>
          <div>
            <p>${property?.rent}</p>
            <h5>Rents</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;