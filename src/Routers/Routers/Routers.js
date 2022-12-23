import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import PropertyDetails from "../../Pages/PropertyDetails/PropertyDetails/PropertyDetails";

const routers = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element:<Home></Home>
			},
			{
				path: "/home",
				element:<Home></Home>
			},
			{
				path: "/propertyDetails/:id",
				element: <PropertyDetails></PropertyDetails>,
				loader: async({params}) => {
					const res = await fetch(`property.json`)
					const data = await res.json()
					const property = data.find((prop) => prop.id === parseInt(params.id));
					return property
				}
			}
		]
	}
])
export default routers;