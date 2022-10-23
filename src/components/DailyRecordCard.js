import React from 'react';
import { Card } from 'react-bootstrap';

export default function DailyRecordCard(props) {
  const record = props.record;
  return (
    <div className='my-2'>
      <Card>
        <Card.Body>
          <Card.Title className='mb-3'>{record.date}</Card.Title>

          {record.books.map((book) => (
            <div key={book.name} className='d-flex'>
              <Card.Text className='fw-bold'>{book.name}</Card.Text>
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
