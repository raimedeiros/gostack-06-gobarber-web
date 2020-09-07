import { ValidationError } from 'yup';

interface Errors {
  // informa que recebera uma key (qualquer nome)
  // do tipo string e um valor do tipo string
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};
  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });
  return validationErrors;
}
