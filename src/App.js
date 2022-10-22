import { Container } from 'react-bootstrap';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import Signup from './pages/Signup';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <Header />
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
