import { useQuery } from "@tanstack/react-query";

import { getLeads }
from "../api/lead-api";

export function useLeads() {
  return useQuery({
    queryKey: ["leads"],
    queryFn: getLeads,
  });
}