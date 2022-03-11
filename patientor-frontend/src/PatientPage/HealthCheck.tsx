import DateRangeIcon from '@mui/icons-material/DateRange';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import { green, orange, red, yellow } from '@mui/material/colors';
import React from 'react';
import { HealthCheckEntry } from '../types';

const HealthCheck: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
  const pickColor = () => {
    switch (entry.healthCheckRating) {
      case 0:
        return { color: green[500] };
      case 1:
        return { color: yellow[500] };
      case 2:
        return { color: orange[500] };
      case 3:
        return { color: red[500] };
      default:
        return { color: green[500] };
    }
  };

  return (
    <div>
      <Card style={{ padding: '10px' }}>
        {entry.date} <DateRangeIcon />
        <p>{entry.description}</p>
        <FavoriteIcon sx={pickColor} />
        <p>diagnose by {entry.specialist}</p>
      </Card>
    </div>
  );
};

export default HealthCheck;
