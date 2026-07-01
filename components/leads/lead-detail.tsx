"use client";


import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLeadStore } from "@/store/lead-store";
import { AddNoteDialog } from "./add-note-dialog";
function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-xs font-semibold uppercase text-slate-500">{title}</p>

      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}

export function LeadDetail() {
  const {
    leads,
    notes,
    selectedLeadId,
    updateStage,
    addTask,
    addCall,
    deleteLead,
  } = useLeadStore();

  const lead = leads.find((item) => item.id === selectedLeadId) ?? leads[0];

  const leadNotes = notes.filter((note) => note.leadId === lead.id);

  if (!lead) {
    return (
      <div className="rounded-lg border bg-white p-5">No lead selected</div>
    );
  }

  // const { deleteLead } =
  // useLeadStore();

  return (
    <div className="rounded-lg border bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p
            className={
              lead.priority === "Hot"
                ? "text-xs font-bold uppercase text-red-600"
                : lead.priority === "Warm"
                  ? "text-xs font-bold uppercase text-amber-600"
                  : "text-xs font-bold uppercase text-blue-600"
            }
          >
            {lead.priority} Prospect
          </p>

          <h2 className="mt-1 text-2xl font-bold break-words">{lead.name}</h2>
        </div>

        <Select
          value={lead.stage}
          onValueChange={(value) => updateStage(lead.id, value)}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="New">New</SelectItem>

            <SelectItem value="Contacted">Contacted</SelectItem>

            <SelectItem value="Visit Planned">Visit Planned</SelectItem>

            <SelectItem value="Negotiation">Negotiation</SelectItem>

            <SelectItem value="Won">Won</SelectItem>

            <SelectItem value="Lost">Lost</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {/* <EditLeadDialog lead={lead} /> */}

        <Button onClick={() => addCall(lead.id, "Manual call logged")}>
          Log Call
        </Button>

        <Button
          variant="outline"
          onClick={() => addTask(lead.id, `Follow up with ${lead.name}`)}
        >
          Add Follow Up
        </Button>

        <AddNoteDialog
  leadId={lead.id}
/>

        <Button
          variant="destructive"
          onClick={() => {
            if (confirm("Delete this lead?")) {
              deleteLead(lead.id);
            }
          }}
        >
          Loss Lead
        </Button>
      </div>
      

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
       <div className="rounded-lg border p-4">
  <p className="text-xs font-semibold uppercase text-slate-500">
    Phone
  </p>

  <a
    href={`tel:${lead.phone}`}
    className="mt-1 flex items-center gap-2 font-medium text-teal-600 hover:underline"
  >
    📞 {lead.phone}
  </a>
</div>

        <InfoCard title="Owner" value="Ravi Kumar" />

        <InfoCard title="Society" value={lead.society} />

        <InfoCard title="Location" value={lead.location} />

        <InfoCard title="Requirement" value={lead.requirement} />

        <InfoCard title="Budget" value={lead.budget} />
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Next Best Action</h3>

        <p className="mt-2 text-slate-600">Site visit at 4:30 PM</p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Timeline</h3>

        <div className="mt-4 space-y-4 border-l-2 border-teal-600 pl-4">
          {leadNotes.length === 0 ? (
            <p className="text-sm text-slate-500">No notes yet</p>
          ) : (
            leadNotes.map((note) => (
              <div key={note.id}>
                <p className="font-medium">{note.text}</p>

                <p className="text-sm text-slate-500">
                  {new Date(note.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
