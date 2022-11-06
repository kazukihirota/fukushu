import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import AddBookButton from './AddBookButton';

const API_URL = process.env.REACT_APP_SERVER_URL + 'books';

export default function BookList() {
  const { currentUser } = useAuth();
  const token = currentUser.token;
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(API_URL, config);

    setBooks(
      response.data.map((b) => ({
        title: b.title,
        type: b.type === undefined ? 'No type' : b.type,
      }))
    );
  }

  const sorted = books.reduce(
    (sorted, item) => ({
      ...sorted,
      [item.type]: [...(sorted[item.type] || []), item],
    }),
    {}
  );

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h2>Book shelf</h2>
        <AddBookButton />
      </div>

      {Object.entries(sorted).map((obj) => (
        <Card className='mb-3'>
          <Card.Header className='fw-bold'>{obj[0]}</Card.Header>
          <ListGroup variant='flush'>
            {obj[1].map((b) => (
              <ListGroup.Item>{b.title}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}
