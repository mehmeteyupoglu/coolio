import { Request } from "../utils";

const prefix = "products";

export const getProductList = (query) => {
  // TODO: add query later on
  query = query ? query : "";
  return Request.get(`${prefix}${query}`);
};
