import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import AddBookButton from '../components/AddBookButton';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function AddDailyRecord() {
  const startRef = useRef();
  const endRef = useRef();
  const navigate = useNavigate();

  function handleCancel() {
    return navigate(-1);
  }

  function handleSubmit() {
    return navigate(-1);
  }

  return (
    <>
      <Header />
      <Container>
        <h3 className='my-3'>Add a daily record</h3>

        <Form>
          <div className='d-flex mb-3 justify-content-between align-items-end'>
            <Form.Group className='flex-fill me-4'>
              <Form.Label>Title</Form.Label>
              <Form.Select>
                <option>Disabled select</option>
              </Form.Select>
            </Form.Group>
            <AddBookButton />
          </div>

          <div className='d-flex mb-3 justify-content-between align-items-end'>
            <Form.Group className='mb-3 flex-fill me-3'>
              <Form.Label>Start</Form.Label>
              <Form.Control type='text' ref={startRef} required />
            </Form.Group>

            <Form.Group className='mb-3 flex-fill me-3'>
              <Form.Label>End</Form.Label>
              <Form.Control type='text' ref={endRef} required />
            </Form.Group>

            <Form.Group className='mb-3 flex-fill'>
              <Form.Label>Measurement</Form.Label>
              <Form.Select required>
                <option>Unit</option>
                <option>Page</option>
              </Form.Select>
            </Form.Group>
          </div>

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
