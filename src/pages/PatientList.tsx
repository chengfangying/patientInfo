import { useState, useMemo } from 'react';
import { Users } from 'lucide-react';
import FilterBar from '../components/FilterBar';
import PatientTable from '../components/PatientTable';
import { Patient } from '../types';
import { MOCK_PATIENTS, MOCK_DOCTORS } from '../data/mockData';

interface PatientListProps {
  onFillForm: (patient: Patient) => void;
}

export default function PatientList({ onFillForm }: PatientListProps) {
  const [filters, setFilters] = useState({
    date: '',
    doctorId: '',
    keyword: '',
  });

  const handleFilter = (date: string, doctorId: string, keyword: string) => {
    setFilters({ date, doctorId, keyword });
  };

  const filteredPatients = useMemo(() => {
    return MOCK_PATIENTS.filter((p) => {
      const matchDate = !filters.date || p.appointmentDate === filters.date;
      const matchDoctor =
        !filters.doctorId ||
        MOCK_DOCTORS.find((d) => d.id === filters.doctorId)?.name === p.appointmentDoctor;
      const matchKeyword =
        !filters.keyword ||
        p.name.includes(filters.keyword) ||
        p.appointmentDoctor.includes(filters.keyword);
      return matchDate && matchDoctor && matchKeyword;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Users size={16} className="text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">患者列表</h1>
          <span className="ml-2 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            {filteredPatients.length} 位患者
          </span>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50">
            <FilterBar doctors={MOCK_DOCTORS} onFilter={handleFilter} />
          </div>
          <PatientTable patients={filteredPatients} onFillForm={onFillForm} />
        </div>

        <p className="mt-4 text-xs text-gray-400 text-center">
          共 {MOCK_PATIENTS.length} 条记录，当前显示 {filteredPatients.length} 条
        </p>
      </div>
    </div>
  );
}
