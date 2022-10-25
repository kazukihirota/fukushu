import React, { useRef, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { child, getDatabase, push, ref, set, update } from 'firebase/database';
import { useAuth } from '../contexts/AuthContext';

export default function AddBook() {
  const navigate = useNavigate();
  const db = getDatabase();
  const { currentUser } = useAuth();
  const [error, setError] = useState('');
  const titleRef = useRef();
  const typeRef = useRef();

  console.log(currentUser);

  function handleCancel() {
    return navigate(-1);
  }

  console.log(titleRef);

  function handleSubmit() {
    const bookData = {
      title: titleRef.current.value,
      type: typeRef.current.value,
    };

    const userId = currentUser.uid;

    try {
      const newBookKey = push(child(ref(db), 'books')).key;

      const updates = {};
      updates['/books/' + newBookKey] = bookData;
      updates['/user-books/' + userId + '/' + newBookKey] = bookData;

      update(ref(db), updates);
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
            <Form.Control type='text' ref={titleRef} required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Book type</Form.Label>
            <Form.Control type='text' ref={typeRef} required />
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
