import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routers/Routers/Routers';

function App() {
  return <RouterProvider router={routers} className="App">

  </RouterProvider>;
}

export default App;
