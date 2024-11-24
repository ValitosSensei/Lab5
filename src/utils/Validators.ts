import { Article } from '../interfaces/Article';

export type ValidationResult = {
  isValid: boolean;
  errors?: string[];
};

export type Validator<T> = {
  validate: (data: T) => ValidationResult;
};

// Валідатор для статей
export const articleValidator: Validator<Article> = {
  validate: (data: Article): ValidationResult => {
    const errors: string[] = [];
    if (!data.title) errors.push('Title is required.');
    if (!data.content) errors.push('Content is required.');
    return { isValid: errors.length === 0, errors };
  },
};
