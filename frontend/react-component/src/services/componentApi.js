import { apiRequest } from "./api";

export const getComponents = () =>
  apiRequest("/components");

export const getComponentById = (id) =>
  apiRequest(`/components/${id}`);

export const likeComponent = (id) =>
  apiRequest(`/likes/${id}`, "POST");

export const rateComponent = (id, value) =>
  apiRequest(`/ratings/${id}`, "POST", { value });
