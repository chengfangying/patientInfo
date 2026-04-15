import { useState } from 'react';
import PatientList from './pages/PatientList';
import PatientForm from './pages/PatientForm';
import { Patient } from './types';

type Page = 'list' | 'form';

export default function App() {
  const [page, setPage] = useState<Page>('list');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handleFillForm = (patient: Patient) => {
    setSelectedPatient(patient);
    setPage('form');
  };

  const handleBack = () => {
    setSelectedPatient(null);
    setPage('list');
  };

  if (page === 'form' && selectedPatient) {
    return <PatientForm patient={selectedPatient} onBack={handleBack} />;
  }

  return <PatientList onFillForm={handleFillForm} />;
}
