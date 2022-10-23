import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Header from '../components/Header';

export default function AddBook() {
  function handleCancel() {
    return;
  }

  function handleSubmit() {
    return;
  }

  return (
    <>
      <Header />
      <Container>
        <h3 className='mt-3'>Add a new book</h3>

        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Type</Form.Label>
            <Form.Control type='text' required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Unit</Form.Label>
            <Form.Control type='text' required />
            <Form.Text className='text-muted'>
              For example, page or unit
            </Form.Text>
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
