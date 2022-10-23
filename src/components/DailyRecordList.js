import React from 'react';
import { DailyBook, DailyRecord } from '../models/dailyRecord';
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
      <h1>Records</h1>
      {records.map((r) => (
        <DailyRecordCard record={r} key={r} />
      ))}
    </>
  );
}
