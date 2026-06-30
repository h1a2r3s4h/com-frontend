import { api } from "@/services/api";

export const getLeads =
  async () => {
    const { data } =
      await api.get("/leads");

    return data;
  };