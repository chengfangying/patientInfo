import { useState } from 'react';
import { Search, Calendar, ChevronDown } from 'lucide-react';
import { Doctor } from '../types';

interface FilterBarProps {
  doctors: Doctor[];
  onFilter: (date: string, doctorId: string, keyword: string) => void;
}

export default function FilterBar({ doctors, onFilter }: FilterBarProps) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [doctorId, setDoctorId] = useState('');
  const [keyword, setKeyword] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedDoctor = doctors.find((d) => d.id === doctorId);

  const handleSearch = () => {
    onFilter(date, doctorId, keyword);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 gap-2 hover:border-blue-400 transition-colors focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
        <Calendar size={15} className="text-gray-400 flex-shrink-0" />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="text-sm text-gray-700 outline-none bg-transparent cursor-pointer"
        />
      </div>

      <div className="relative">
        <div
          className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 gap-2 cursor-pointer hover:border-blue-400 transition-colors min-w-44"
          onClick={() => setDropdownOpen((v) => !v)}
        >
          <span className="text-sm text-gray-500 flex-shrink-0">预约医生</span>
          <div className="w-px h-4 bg-gray-200 flex-shrink-0" />
          <span className={`text-sm flex-1 ${selectedDoctor ? 'text-gray-700' : 'text-gray-400'}`}>
            {selectedDoctor ? selectedDoctor.name : '请选择'}
          </span>
          <ChevronDown
            size={14}
            className={`text-gray-400 flex-shrink-0 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
          />
        </div>
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
            <div
              className="px-3 py-2 text-sm text-gray-400 hover:bg-gray-50 cursor-pointer"
              onClick={() => { setDoctorId(''); setDropdownOpen(false); }}
            >
              全部医生
            </div>
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className={`px-3 py-2 text-sm cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                  doctorId === doctor.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => { setDoctorId(doctor.id); setDropdownOpen(false); }}
              >
                {doctor.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 gap-2 flex-1 max-w-64 hover:border-blue-400 transition-colors focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
        <Search size={15} className="text-gray-400 flex-shrink-0" />
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="搜索患者"
          className="text-sm text-gray-700 outline-none bg-transparent flex-1 placeholder-gray-400"
        />
      </div>

      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
      >
        查询
      </button>
    </div>
  );
}
