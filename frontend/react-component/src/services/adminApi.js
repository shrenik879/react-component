import { apiRequest } from "./api";

export const getPendingComponents = () =>
  apiRequest("/admin/components/pending");

export const approveComponent = (id) =>
  apiRequest(`/admin/components/${id}/approve`, "PATCH");

export const rejectComponent = (id) =>
  apiRequest(`/admin/components/${id}/reject`, "PATCH");
