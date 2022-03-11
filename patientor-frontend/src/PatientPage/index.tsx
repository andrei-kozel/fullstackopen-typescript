import { Button } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../constants';
import { useStateValue } from '../state';
import { Entry, Patient } from '../types';
import HealthCheck from './HealthCheck';
import Hospital from './Hospital';
import OccupationalHealthcare from './OccupationalHealthcare';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case 'Hospital':
      return <Hospital entry={entry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthcare entry={entry} />;
    case 'HealthCheck':
      return <HealthCheck entry={entry} />;
    default:
      return assertNever(entry);
  }
};

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | undefined>();
  const [{ diagnoses }] = useStateValue();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const { data } = await axios.get<Patient>(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `${apiBaseUrl}/patients/${id}`
        );
        setPatient(data);
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatient();
  }, []);

  return (
    <div>
      <h1>Patientor</h1>
      <h3>{patient?.name}</h3>
      <p>ssn: {patient?.ssn}</p>
      <p>occuppation: {patient?.occupation}</p>

      <h3>entries</h3>
      {patient?.entries.map((entry, i) => (
        <div key={i}>
          {Object.keys(diagnoses).length === 0 ? null : (
            <EntryDetails entry={entry} />
          )}
        </div>
      ))}

      <Button variant="contained" color="primary">
        Add new entry
      </Button>
    </div>
  );
};

export default PatientPage;
