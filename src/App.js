import { AuthProvider } from './contexts/AuthContext';
import Signup from './pages/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddDailyRecord from './pages/AddDailyRecord';
import AddBook from './pages/AddBook';
import { BookProvider } from './contexts/BookContext';

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
      <BookProvider>
        <RouterProvider router={router} />
      </BookProvider>
    </AuthProvider>
  );
}

export default App;
