import { Request } from "../utils";

const prefix = "products?title_like=";

export const getProductList = (query) => {
  // TODO: add query later on
  query = query ? query : "";
  return Request.get(`${prefix}${query}`);
};
