import { Container, Navbar, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

export default function Header() {
  const [error, setError] = useState('');
  const { logout, currentUser } = useAuth();
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
          Hi {currentUser ? currentUser.name : ''}
          <Button variant='none' className='ms-2' onClick={handleLogout}>
            <FiLogOut />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
