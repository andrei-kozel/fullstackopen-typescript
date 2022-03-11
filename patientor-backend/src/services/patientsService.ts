import { v4 as uuid } from 'uuid';
import patientsData from "../../data/patients";
import { Entry, NewPatient, Patient, PublicPatient } from "../types/patientsType";

const generateId = (): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return uuid();
};

const getAll = (): Patient[] => {
  return patientsData;
};

const getNonSensitivePatients = (): PublicPatient[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

const getOne = (id: string): Patient | undefined => {
  return patientsData.find(patient => patient.id === id);
};


const addPatient = (newPatient: NewPatient): Patient => {
  const patient = {
    ...newPatient,
    id: generateId()
  };

  patientsData.push(patient);

  return patient;
};

const addEntry = (id: string, entry: Entry) => {
  const patient = patientsData.find(p => p.id === id);
  if (!patient) {
    throw new Error('Not found');
  } else {
    patient.entries.push(entry);
  }
};

export default { getAll, getNonSensitivePatients, addPatient, getOne, addEntry };