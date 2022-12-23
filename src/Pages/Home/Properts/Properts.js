import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PropertyCard from './PropertyCard';
import "./Properts.css"

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
		<div>
			<h2 className='section-title'>Ours Property List</h2>
			<div className='property-section'>
				{
					properts.map(property=><PropertyCard key={property.id} property={property}></PropertyCard>)
				}
			</div>
		</div>
	);
};

export default Properts;