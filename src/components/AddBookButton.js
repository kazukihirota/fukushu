import React from 'react';
import { Button } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function AddBookButton() {
  const navigate = useNavigate();
  function handleClick() {
    return navigate('/add-book');
  }
  return (
    <Button variant='outline-primary' onClick={handleClick}>
      <FiPlus />
      <span className='ms-1'>Add book</span>
    </Button>
  );
}
