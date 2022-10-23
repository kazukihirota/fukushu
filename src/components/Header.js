import { Container, Navbar, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Header() {
  const [error, setError] = useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to logout');
    }
  }

  return (
    <Navbar bg='light'>
      <Container>
        <Navbar.Brand className='fw-bold' href='/'>
          Fukushu
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button variant='light' onClick={handleLogout}>
            Log Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
