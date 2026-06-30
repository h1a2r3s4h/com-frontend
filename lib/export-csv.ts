export function exportLeadsCSV(leads: any[]) {
  const headers = [
    "Name",
    "Phone",
    "Society",
    "Location",
    "Stage",
    "Priority",
  ];

  const rows = leads.map((lead) => [
    lead.name,
    lead.phone,
    lead.society,
    lead.location,
    lead.stage,
    lead.priority,
  ]);

  const csv = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csv], {
    type: "text/csv",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = "leads.csv";

  a.click();

  URL.revokeObjectURL(url);
}