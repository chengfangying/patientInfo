import { User, Calendar, Stethoscope, Tag } from 'lucide-react';
import { Patient } from '../types';

interface PatientInfoCardProps {
  patient: Patient;
}

const genderStyle = (gender: string) => {
  if (gender === '男') return 'text-blue-600 bg-blue-50 border border-blue-100';
  if (gender === '女') return 'text-pink-600 bg-pink-50 border border-pink-100';
  return 'text-gray-500 bg-gray-50 border border-gray-100';
};

export default function PatientInfoCard({ patient }: PatientInfoCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <User size={18} className="text-blue-600" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">{patient.name}</h2>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${genderStyle(patient.gender)}`}>
            {patient.gender}
          </span>
        </div>
        <div className="ml-auto">
          <span className="text-sm text-gray-500">年龄</span>
          <span className="ml-1 text-sm font-semibold text-gray-800">{patient.age}岁</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Calendar size={14} className="text-gray-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-400">预约日期</p>
            <p className="text-sm font-medium text-gray-700">{patient.appointmentDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Stethoscope size={14} className="text-gray-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-400">预约医生</p>
            <p className="text-sm font-medium text-gray-700">{patient.appointmentDoctor}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Tag size={14} className="text-gray-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-400">预约项目</p>
            <p className="text-sm font-medium text-gray-700">{patient.appointmentProject}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
