import React from 'react';
import { DailyBook, DailyRecord } from '../models/dailyRecord';
import AddDailyRecordButton from './AddDailyRecordButton';
import DailyRecordCard from './DailyRecordCard';

export default function () {
  const records = [
    new DailyRecord('2022-10-20', [
      new DailyBook('book1', '20', '30', 'page'),
      new DailyBook('book2', '205', '230', 'page'),
    ]),
  ];

  return (
    <>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h2>Records</h2>
        <AddDailyRecordButton />
      </div>

      {records.map((r) => (
        <DailyRecordCard record={r} key={r} />
      ))}
    </>
  );
}
