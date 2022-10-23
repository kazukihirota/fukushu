import React from 'react';
import { Container } from 'react-bootstrap';
import RivisionList from '../components/RivisionList';
import Header from '../components/Header';
import AddDailyRecordButton from '../components/AddDailyRecordButton';
import DailyRecordList from '../components/DailyRecordList';

export default function Dashboard() {
  return (
    <>
      <Header />

      <Container>
        <div className='d-flex justify-content-between align-items-start mt-3'>
          <RivisionList />
          <AddDailyRecordButton />
        </div>
        <div className='mt-3'></div>
        <div className='mt-3'>
          <DailyRecordList />
        </div>
      </Container>
    </>
  );
}
