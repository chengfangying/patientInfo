import { File as FileEdit, Loader2 } from 'lucide-react';
import { Patient } from '../types';

interface PatientTableProps {
  patients: Patient[];
  loading?: boolean;
  onFillForm: (patient: Patient) => void;
}

export default function PatientTable({ patients, loading, onFillForm }: PatientTableProps) {
  const genderColor = (gender: string) => {
    if (gender === '男') return 'text-blue-600 bg-blue-50';
    if (gender === '女') return 'text-pink-600 bg-pink-50';
    return 'text-gray-500 bg-gray-100';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 size={24} className="animate-spin text-blue-500" />
        <span className="ml-2 text-sm text-gray-500">加载中...</span>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50/80 border-b border-gray-100">
            <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              患者姓名
            </th>
            <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              性别
            </th>
            <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              年龄
            </th>
            <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              预约医生
            </th>
            <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              预约时间
            </th>
            <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              操作
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {patients.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-16 text-gray-400 text-sm">
                暂无患者数据
              </td>
            </tr>
          ) : (
            patients.map((patient, index) => (
              <tr
                key={patient.id}
                className={`hover:bg-blue-50/30 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                }`}
              >
                <td className="px-5 py-4">
                  <span className="font-medium text-gray-800 text-sm">{patient.name}</span>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${genderColor(patient.gender)}`}>
                    {patient.gender}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-gray-600">
                  {patient.age}岁
                </td>
                <td className="px-5 py-4 text-sm text-gray-600">
                  {patient.appointmentDoctor}
                </td>
                <td className="px-5 py-4 text-sm text-gray-600 tabular-nums">
                  {patient.appointmentTime}
                </td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => onFillForm(patient)}
                    className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors group"
                  >
                    <FileEdit size={14} className="group-hover:scale-110 transition-transform" />
                    填写表单
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
