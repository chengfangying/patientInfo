import { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FormModule as FormModuleType, FormValues } from '../types';
import QuestionField from './QuestionField';

interface FormModuleProps {
  module: FormModuleType;
  values: FormValues;
  onChange: (questionId: string, value: string | string[] | number) => void;
  onConfirm?: () => void;
  confirmed?: boolean;
}

export default function FormModule({
  module,
  values,
  onChange,
  onConfirm,
  confirmed,
}: FormModuleProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`rounded-xl border transition-all duration-200 ${
      confirmed
        ? 'border-green-200 bg-green-50/30'
        : 'border-gray-200 bg-white'
    }`}>
      <div
        className="flex items-center justify-between px-5 py-4 cursor-pointer select-none"
        onClick={() => setCollapsed((v) => !v)}
      >
        <div className="flex items-center gap-2">
          {confirmed && <CheckCircle size={16} className="text-green-500 flex-shrink-0" />}
          <h3 className="text-base font-semibold text-gray-800">{module.name}</h3>
        </div>
        <div className="flex items-center gap-3">
          {confirmed && (
            <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-0.5 rounded-full">
              已确认
            </span>
          )}
          {collapsed ? (
            <ChevronDown size={16} className="text-gray-400" />
          ) : (
            <ChevronUp size={16} className="text-gray-400" />
          )}
        </div>
      </div>

      {!collapsed && (
        <div className="px-5 pb-5 border-t border-gray-100">
          <div className="pt-4">
            {module.questions.map((question) => (
              <QuestionField
                key={question.id}
                question={question}
                value={values[question.id]}
                onChange={onChange}
              />
            ))}
          </div>

          {module.hasOwnConfirm && onConfirm && (
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={onConfirm}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  confirmed
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {confirmed ? '已确认' : '确认基本信息'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
