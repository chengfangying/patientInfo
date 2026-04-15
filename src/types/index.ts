export interface Patient {
  id: string;
  name: string;
  gender: '男' | '女' | '未知';
  age: number;
  appointmentDoctor: string;
  appointmentTime: string;
  appointmentDate: string;
  appointmentProject: string;
}

export interface Doctor {
  id: string;
  name: string;
}

export interface TooltipContent {
  text: string;
  imageUrl?: string;
}

export interface QuestionOption {
  id: string;
  label: string;
  value: string;
  tooltip?: TooltipContent;
}

export interface Question {
  id: string;
  label: string;
  type: 'text' | 'input' | 'date' | 'radio' | 'checkbox' | 'number';
  tooltip?: TooltipContent;
  options?: QuestionOption[];
  placeholder?: string;
  required?: boolean;
  unit?: string;
}

export interface FormModule {
  id: string;
  name: string;
  hasOwnConfirm: boolean;
  questions: Question[];
}

export interface FormValues {
  [questionId: string]: string | string[] | number;
}

export interface BasicInfo {
  chiefComplaint: string;
  medicalHistory: string;
  allergyHistory: string;
}
