import { BaseContent } from '../interfaces/BaseContent';

export type Role = 'admin' | 'editor' | 'viewer';

export type Permission = {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
};

export type AccessControl<T extends BaseContent> = {
  role: Role;
  permissions: Record<Role, Permission>;
  canPerform: (
    role: Role,
    action: keyof Permission,
    content: T
  ) => boolean;
};

export const defaultPermissions: Record<Role, Permission> = {
  admin: { create: true, read: true, update: true, delete: true },
  editor: { create: true, read: true, update: true, delete: false },
  viewer: { create: false, read: true, update: false, delete: false },
};
