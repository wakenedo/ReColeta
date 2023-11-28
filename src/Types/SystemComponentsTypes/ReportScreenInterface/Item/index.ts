export interface Item {
  id: number;
  name: string;
  address?: string;
  product?: string;
  category?: string;
  quantity?: number;
  price?: number;
  [key: string]: string | number | undefined;
}