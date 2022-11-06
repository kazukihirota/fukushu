import React from 'react';
import { Container } from 'react-bootstrap';
import RivisionList from '../components/RivisionList';
import Header from '../components/Header';
import DailyRecordList from '../components/DailyRecordList';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import BookList from '../components/BookList';

export default function Dashboard() {
  return (
    <>
      <Header />

      <Container>
        <div className='d-flex justify-content-between align-items-start mt-3'>
          <RivisionList />
        </div>
        <div className='mt-3'>
          <DailyRecordList />
        </div>
        <div className='mt-3'>
          <BookList />
        </div>
      </Container>
    </>
  );
}
