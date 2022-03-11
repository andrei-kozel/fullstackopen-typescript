import WorkIcon from '@mui/icons-material/Work';
import Card from '@mui/material/Card';
import React from 'react';
import { OccupationalHealthcareEntry } from '../types';

const OccupationalHealthcare: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => (
  <div>
    <div>
      <Card style={{ padding: '10px' }}>
        {entry.date} <WorkIcon />
        <p>{entry.description}</p>
        <p>diagnose by {entry.specialist}</p>
      </Card>
    </div>
  </div>
);

export default OccupationalHealthcare;
