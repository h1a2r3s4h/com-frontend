import { Lead } from "@/store/lead-store";

export function exportLeadsCSV(
  leads: Lead[]
) {
  const headers = [
    "Name",
    "Phone",
    "Society",
    "Location",
    "Requirement",
    "Budget",
    "Stage",
    "Priority",
  ];

  const rows = leads.map((lead) => [
    lead.name,
    lead.phone,
    lead.society,
    lead.location,
    lead.requirement,
    lead.budget,
    lead.stage,
    lead.priority,
  ]);

  const csv = [
    headers.join(","),
    ...rows.map((row) =>
      row.join(",")
    ),
  ].join("\n");

  const blob = new Blob(
    [csv],
    {
      type: "text/csv",
    }
  );

  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;
  a.download = "leads.csv";
  a.click();

  URL.revokeObjectURL(url);
}