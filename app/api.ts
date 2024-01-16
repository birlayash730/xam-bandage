// api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, User, Cart } from "./types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { limit?: number; sort?: string }>({
      query: ({ limit = "", sort = "" }) =>
        `/products?limit=${limit}&sort=${sort}`,
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
    getProductsByCategory: builder.query<
      Product[],
      { category: string; limit?: number; sort?: string }
    >({
      query: ({ category, limit = "", sort = "" }) =>
        `/products/category/${category}?limit=${limit}&sort=${sort}`,
    }),
    getUser: builder.query<User, number>({
      query: (userId) => `/users/${userId}`,
    }),
    signupUser: builder.mutation<User, User>({
      query: (user) => ({
        url: "/auth/register",
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation<
      { token: string },
      { username: string; password: string }
    >({
      query: ({ username, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { username, password },
      }),
    }),
    getCart: builder.query<Cart, string>({
      query: (id) => `/carts/${id}`,
      ...{tagTypes: ['Cart'] as any},
      providesTags: [{ type: "Cart" as never, id: "GET" }],
    }),
    getUserCart: builder.query<Cart[], {userId: string}>({
      query: ({userId}: {userId: string}) => `/carts/user/${userId}`,
      providesTags: [{ type: "Cart" as never, id: "GET" }],
    }),
    addProductToCart: builder.mutation<
      void,
      { productId: number; quantity: number, cartId: number, userId: number }
    >({
      query: ({ productId, quantity, cartId, userId }) => ({
        url: `/carts/${cartId}`,
        method: "PUT",
        body: {
          userId,
          date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
          products: [{productId, quantity}]
        },
      }),
      invalidatesTags: [{ type: "Cart" as never, id: "GET" }],
    }),
    updateProductInCart: builder.mutation<
      void,
      { itemId: number; quantity: number }
    >({
      query: ({ itemId, quantity }) => ({
        url: `/carts/1/items/${itemId}`,
        method: "PUT",
        body: { quantity },
      }),
      invalidatesTags: [{ type: "Cart" as never, id: "GET" }],
    }),
    removeProductFromCart: builder.mutation<void, number>({
      query: (itemId) => ({
        url: `/carts/1/items/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Cart" as never, id: "GET" }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetUserQuery,
  useSignupUserMutation,
  useLoginUserMutation,
  useGetCartQuery,
  useGetUserCartQuery,
  useAddProductToCartMutation,
  useUpdateProductInCartMutation,
  useRemoveProductFromCartMutation,
} = apiSlice;
