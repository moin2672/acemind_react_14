import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <h1>Products</h1> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
