import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

export default function RivisionAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant='info' onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Today's revision</Alert.Heading>
        <p>list of things you have to revise</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show list of revisions</Button>;
}
