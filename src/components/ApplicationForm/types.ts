export interface FormData {
  name: string;
  email: string;
  gender: 'male' | 'female' | '';
  choice: string;
}

export interface ApplicationFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}