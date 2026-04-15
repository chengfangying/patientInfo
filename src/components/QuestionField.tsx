import { Question, FormValues } from '../types';
import InfoTooltip from './InfoTooltip';
import OptionTooltip from './OptionTooltip';

interface QuestionFieldProps {
  question: Question;
  value: string | string[] | number | undefined;
  onChange: (questionId: string, value: string | string[] | number) => void;
}

export default function QuestionField({ question, value, onChange }: QuestionFieldProps) {
  const handleRadioChange = (optionValue: string) => {
    onChange(question.id, optionValue);
  };

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    const current = (value as string[]) || [];
    if (checked) {
      onChange(question.id, [...current, optionValue]);
    } else {
      onChange(question.id, current.filter((v) => v !== optionValue));
    }
  };

  const isCheckboxChecked = (optionValue: string): boolean => {
    return ((value as string[]) || []).includes(optionValue);
  };

  return (
    <div className="mb-6">
      <div className="flex items-start mb-2">
        <label className="text-sm font-medium text-gray-700 flex items-center flex-wrap">
          {question.required && (
            <span className="text-red-500 mr-1">*</span>
          )}
          <span>{question.label}</span>
          {question.type !== 'radio' && question.type !== 'checkbox' && question.type !== 'input' && question.type !== 'date' && question.tooltip && (
            <InfoTooltip content={question.tooltip} />
          )}
        </label>
      </div>

      {question.type === 'input' && (
        <input
          type="text"
          value={(value as string) || ''}
          onChange={(e) => onChange(question.id, e.target.value)}
          placeholder={question.placeholder}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
        />
      )}

      {question.type === 'date' && (
        <input
          type="date"
          value={(value as string) || ''}
          onChange={(e) => onChange(question.id, e.target.value)}
          className="w-48 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
        />
      )}

      {question.type === 'text' && (
        <textarea
          rows={3}
          value={(value as string) || ''}
          onChange={(e) => onChange(question.id, e.target.value)}
          placeholder={question.placeholder}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
        />
      )}

      {question.type === 'number' && (
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={(value as number) ?? ''}
            onChange={(e) => onChange(question.id, e.target.valueAsNumber)}
            placeholder={question.placeholder}
            className="w-36 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
          />
          {question.unit && (
            <span className="text-sm text-gray-500">{question.unit}</span>
          )}
        </div>
      )}

      {question.type === 'radio' && question.options && (
        <div className="space-y-2">
          {question.options.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name={question.id}
                value={option.value}
                checked={value === option.value}
                onChange={() => handleRadioChange(option.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              {option.tooltip ? (
                <OptionTooltip content={option.tooltip}>
                  <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors border-b border-dashed border-gray-400 group-hover:border-blue-400">
                    {option.label}
                  </span>
                </OptionTooltip>
              ) : (
                <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                  {option.label}
                </span>
              )}
            </label>
          ))}
        </div>
      )}

      {question.type === 'checkbox' && question.options && (
        <div className="space-y-2">
          {question.options.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                value={option.value}
                checked={isCheckboxChecked(option.value)}
                onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              {option.tooltip ? (
                <OptionTooltip content={option.tooltip}>
                  <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors border-b border-dashed border-gray-400 group-hover:border-blue-400">
                    {option.label}
                  </span>
                </OptionTooltip>
              ) : (
                <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                  {option.label}
                </span>
              )}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
