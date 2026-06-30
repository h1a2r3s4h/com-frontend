export type LeadPriority =
  | "Hot"
  | "Warm"
  | "Cold";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  society: string;
  location: string;
  requirement: string;
  budget: string;
  stage: string;
  priority: LeadPriority;
}