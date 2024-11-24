import { BaseContent } from '../interfaces/BaseContent';

export type Versioned<T extends BaseContent> = T & {
  version: number;
  previousVersions?: T[];
};

export const versioningOperations = <T extends BaseContent>(
  content: Versioned<T>
) => ({
  createNewVersion: (updates: Partial<T>) => ({
    ...content,
    ...updates,
    version: content.version + 1,
    previousVersions: [...(content.previousVersions || []), { ...content }],
  }),
});
