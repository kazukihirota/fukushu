import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { DailyBook } from '../models/dailyRecord';
import RivisionItem from './RivisionItem';

export default function RivisionList() {
  const revisions = [new DailyBook('book1', '200', '204', 'page')];

  return (
    <div>
      <h2>Rivision items</h2>
      {revisions.map((r) => (
        <RivisionItem item={r} key={r} />
      ))}
    </div>
  );
}
