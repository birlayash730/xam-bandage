// Product type
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: Category;
  image: string;
}

export type Category = string;

// User type
export interface User {
  id: number;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
  address: Address;
}

// Cart type
export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: Array<{
    productId: number;
    quantity: number;
  }>;
}

export interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation?: {
    lat: string;
    long: string;
  };
}
