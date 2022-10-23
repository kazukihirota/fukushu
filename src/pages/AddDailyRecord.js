import React from 'react';
import { Container, Form } from 'react-bootstrap';
import AddBookButton from '../components/AddBookButton';
import Header from '../components/Header';

export default function AddDailyRecord() {
  return (
    <>
      <Header />
      <Container>
        <h3 className='mt-3'>Add daily record</h3>

        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Disabled select menu</Form.Label>
            <Form.Select>
              <option>Disabled select</option>
            </Form.Select>
          </Form.Group>
          <AddBookButton />
        </Form>
      </Container>
    </>
  );
}
