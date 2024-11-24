import { BaseContent } from './BaseContent';

export interface Product extends BaseContent {
  name: string;
  price: number;
  description: string;
}
