import { useState } from 'react';
import { ArrowLeft, Save, CheckCircle, AlertCircle } from 'lucide-react';
import { Patient, FormValues } from '../types';
import { MOCK_FORM_CONFIG } from '../data/mockData';
import PatientInfoCard from '../components/PatientInfoCard';
import FormModuleComponent from '../components/FormModule';

interface PatientFormProps {
  patient: Patient;
  onBack: () => void;
}

interface SaveStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export default function PatientForm({ patient, onBack }: PatientFormProps) {
  const [formValues, setFormValues] = useState<{ [moduleId: string]: FormValues }>({});
  const [basicConfirmed, setBasicConfirmed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>({ type: null, message: '' });

  const handleFieldChange = (
    moduleId: string,
    questionId: string,
    value: string | string[] | number
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [moduleId]: {
        ...(prev[moduleId] || {}),
        [questionId]: value,
      },
    }));
  };

  const handleBasicConfirm = () => {
    setBasicConfirmed(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveStatus({ type: null, message: '' });
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSaving(false);
    setSaveStatus({ type: 'success', message: '表单已成功保存！' });
    setTimeout(() => setSaveStatus({ type: null, message: '' }), 3000);
  };

  const basicModule = MOCK_FORM_CONFIG.find((m) => m.id === 'basic');
  const otherModules = MOCK_FORM_CONFIG.filter((m) => m.id !== 'basic');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft size={16} />
            返回患者列表
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">{patient.name}</span>
            <span className="text-gray-300">·</span>
            <span className="text-sm text-gray-500">填写评估表单</span>
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
          >
            {saving ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                保存中...
              </>
            ) : (
              <>
                <Save size={15} />
                保存表单
              </>
            )}
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-6">
        {saveStatus.type && (
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-lg mb-4 text-sm font-medium ${
              saveStatus.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {saveStatus.type === 'success' ? (
              <CheckCircle size={16} />
            ) : (
              <AlertCircle size={16} />
            )}
            {saveStatus.message}
          </div>
        )}

        <PatientInfoCard patient={patient} />

        <div className="space-y-4">
          {basicModule && (
            <FormModuleComponent
              module={basicModule}
              values={formValues[basicModule.id] || {}}
              onChange={(qId, val) => handleFieldChange(basicModule.id, qId, val)}
              onConfirm={handleBasicConfirm}
              confirmed={basicConfirmed}
            />
          )}

          {otherModules.map((module) => (
            <FormModuleComponent
              key={module.id}
              module={module}
              values={formValues[module.id] || {}}
              onChange={(qId, val) => handleFieldChange(module.id, qId, val)}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
          >
            {saving ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                保存中...
              </>
            ) : (
              <>
                <Save size={16} />
                保存整体表单
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
