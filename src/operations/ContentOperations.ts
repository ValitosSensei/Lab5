import { BaseContent } from '../interfaces/BaseContent';

export type ContentOperations<T extends BaseContent> = {
  create: (item: T) => T;
  update: (id: string, updates: Partial<T>) => T;
  delete: (id: string) => void;
  getById: (id: string) => T | null;
};

// Приклад операцій для статей
export const articleOperations: ContentOperations<BaseContent> = {
  create: (item: BaseContent): BaseContent => ({ ...item }),
  update: (id: string, updates: Partial<BaseContent>): BaseContent =>
    ({ ...updates, id } as BaseContent),
  delete: (id: string): void => console.log(`Content with ID ${id} deleted.`),
  getById: (id: string): BaseContent | null => null, // Реалізуйте за потребою
};
