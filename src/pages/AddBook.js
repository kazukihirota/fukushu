import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getDatabase, ref, set } from 'firebase/database';
import { useAuth } from '../contexts/AuthContext';

export default function AddBook() {
  const navigate = useNavigate();
  const db = getDatabase();
  const { currentUser } = useAuth();
  const [error, setError] = useState('');

  const userId = currentUser.uid;

  function handleCancel() {
    return navigate(-1);
  }

  function handleSubmit() {
    try {
      set(ref(db, 'books/' + userId), {});
    } catch {
      setError('Failed to add the book');
    }

    return navigate(-1);
  }

  return (
    <>
      <Header />
      <Container>
        {error && <Alert variant='danger'>{error}</Alert>}

        <h3 className='my-3'>Add a new book</h3>

        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Type</Form.Label>
            <Form.Control type='text' required />
          </Form.Group>

          <div className='d-flex justify-content-between'>
            <Button variant='secondary' type='button' onClick={handleCancel}>
              Cancel
            </Button>
            <Button type='submit' onClick={handleSubmit}>
              Add
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
