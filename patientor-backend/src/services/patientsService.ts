import patientsData from "../../data/patients";
import { NonSensitivePatients, Patient } from "../types/patientsType";

const getAll = (): Patient[] => {
  return patientsData;
};

const getNonSensitivePatients = (): NonSensitivePatients[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

const addPatient = (patient: Patient) => {
  patientsData.push(patient);
};

export default { getAll, getNonSensitivePatients, addPatient };