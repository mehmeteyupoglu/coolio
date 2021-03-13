import { Request } from "../utils";

const prefix = "products?title_like=";

export const getProductList = (query) => {
  return Request.get(`${prefix}${query}`);
};
