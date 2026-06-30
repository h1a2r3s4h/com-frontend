export interface Call {
  id: string;

  leadId: string;

  direction:
    | "Inbound"
    | "Outbound"
    | "Missed";

  duration: string;

  result: string;

  recorded: boolean;

  at: string;
}