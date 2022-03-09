/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import { Gender, Patient } from "./types/patientsType";

type Fields = {
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: string,
  occupation?: string
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseId = (id: string): string => {
  if (!id || !uuidValidate(id) || !isString) {
    throw new Error('Incorrect or missing id: ' + id);
  }
  return id;
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error('Incorrect occupation: ' + occupation);
  }
  return occupation;
};

const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error('Incorrect or missing name: ' + name);
  }
  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error('Incorrect or missing ssn: ' + ssn);
  }
  return ssn;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

const toNewPatient = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): Patient => {
  const newPatient = {
    name: parseName(name),
    dateOfBirth: parseDate(dateOfBirth),
    ssn: parseSsn(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation),
    id: parseId(uuidv4())
  };
  return newPatient;
};

export default toNewPatient;

