import WorkIcon from '@mui/icons-material/Work';
import Card from '@mui/material/Card';
import React from 'react';
import { HospitalEntry } from '../types';

const Hospital: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  return (
    <div>
      <Card style={{ padding: '10px' }}>
        {entry.date} <WorkIcon />
        <p>{entry.description}</p>
        <p>diagnose by {entry.specialist}</p>
      </Card>
    </div>
  );
};

export default Hospital;
