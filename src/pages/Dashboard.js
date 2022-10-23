import React from 'react';
import { Container } from 'react-bootstrap';
import RivisionAlert from '../components/RivisionAlert';
import Header from '../components/Header';
import AddDailyRecordButton from '../components/AddDailyRecordButton';
import DailyRecordList from '../components/DailyRecordList';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <div className='mt-3'>
          <RivisionAlert />
        </div>
        <div className='mt-3'>
          <AddDailyRecordButton />
        </div>
        <div className='mt-3'>
          <DailyRecordList />
        </div>
      </Container>
    </>
  );
}
