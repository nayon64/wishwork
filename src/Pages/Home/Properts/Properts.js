import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PropertyCard from './PropertyCard';
import "./Properts.css"
import { Link } from 'react-router-dom';

const Properts = () => {


	const { data: properts = [], isLoading } = useQuery({
		queryKey: ["propertys"],
		queryFn: async () => {
			const res = await fetch("property.json")
			const data = await res.json()
			return data;
		}
	})

	console.log(properts)
	
	return (
    <div className='properts'>
      <h2 className="section-title">Ours Property List</h2>
      <div className="property-section">
        {properts.map((property) => (
          <Link to={`/propertyDetails/${property.id}`}>
            <PropertyCard key={property.id} property={property}></PropertyCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Properts;