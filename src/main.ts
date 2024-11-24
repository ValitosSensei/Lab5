import { Article } from './interfaces/Article';
import { articleValidator } from './utils/Validators';
import { defaultPermissions, AccessControl } from './utils/AccessControl';
import { articleOperations } from './operations/ContentOperations';


const testArticle: Article = {
  id: '1',
  title: 'Sample Article',
  content: 'This is a sample article.',
  author: 'Admin',
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'draft',
};

// Перевірка валідації
console.log('Article validation:', articleValidator.validate(testArticle));

// Операції зі статтями
const newArticle = articleOperations.create(testArticle);
console.log('Created article:', newArticle);

// Перевірка прав доступу
const accessControl: AccessControl<Article> = {
  role: 'editor',
  permissions: defaultPermissions,
  canPerform: (role, action) => defaultPermissions[role][action],
};

console.log(
  'Can editor delete an article?',
  accessControl.canPerform('editor', 'delete', testArticle)
);
