import React from 'react';
import { Card } from 'react-bootstrap';

export default function RivisionItem(props) {
  const item = props.item;

  return (
    <div className='my-2'>
      <Card>
        <Card.Body>
          <Card.Title className='mb-3'>{item.date}</Card.Title>

          {item.books.map((book) => (
            <div key={book.name} className='d-flex'>
              <Card.Text className='fw-bold'>{book.title}</Card.Text>
              <Card.Text className='ms-3'>
                from {book.unit} {book.start}
              </Card.Text>
              <Card.Text className='ms-1'>
                to {book.unit} {book.end}
              </Card.Text>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}
