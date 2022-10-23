import { AuthProvider } from './contexts/AuthContext';
import Signup from './pages/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddDailyRecord from './pages/AddDailyRecord';
import AddBook from './pages/AddBook';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/add-daily-record',
    element: <AddDailyRecord />,
  },
  {
    path: '/add-book',
    element: <AddBook />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
