import { create } from "zustand";
import { leads as initialLeads } from "@/mock/crm-data";
import { persist } from "zustand/middleware";
export interface Lead {
  id: string;
  name: string;
  phone: string;
  society: string;
  location: string;
  requirement: string;
  budget: string;
  stage: string;
  priority: "Hot" | "Warm" | "Cold";
}

export interface Note {
  id: string;
  leadId: string;
  text: string;
  createdAt: string;
}

export interface Task {
  id: string;
  leadId: string;
  title: string;
  completed: boolean;
}

export interface Call {
  id: string;
  leadId: string;
  result: string;
  createdAt: string;
}

interface LeadStore {
  leads: Lead[];
  notes: Note[];
  tasks: Task[];
  calls: Call[];

  selectedLeadId: string;

  setSelectedLead: (id: string) => void;
addLead: (
  lead: Omit<Lead, "id">
) => void;
  deleteLead: (leadId: string) => void;

completeTask: (taskId: string) => void;

  updateStage: (
    leadId: string,
    stage: string
  ) => void;

  addNote: (
    leadId: string,
    text: string
  ) => void;

  addTask: (
    leadId: string,
    title: string
  ) => void;

  addCall: (
    leadId: string,
    result: string
  ) => void;
  updateLead: (
  lead: Lead
) => void;
  
}

export const useLeadStore =
  create<LeadStore>()(
    persist(
      (set) => ({
        leads: initialLeads,

        notes: [],

        tasks: [],

        calls: [],

        selectedLeadId:
          initialLeads[0]?.id ?? "",

        setSelectedLead: (id) =>
          set({
            selectedLeadId: id,
          }),

        addLead: (lead) =>
  set((state) => ({
    leads: [
      {
        id: crypto.randomUUID(),
        ...lead,
      },
      ...state.leads,
    ],
  })),

        updateStage: (
          leadId,
          stage
        ) =>
          set((state) => ({
            leads: state.leads.map(
              (lead) =>
                lead.id === leadId
                  ? {
                      ...lead,
                      stage,
                    }
                  : lead
            ),
          })),

        addNote: (
          leadId,
          text
        ) =>
          set((state) => ({
            notes: [
              {
                id: crypto.randomUUID(),
                leadId,
                text,
                createdAt:
                  new Date().toISOString(),
              },
              ...state.notes,
            ],
          })),

        addTask: (
          leadId,
          title
        ) =>
          set((state) => ({
            tasks: [
              {
                id: crypto.randomUUID(),
                leadId,
                title,
                completed: false,
              },
              ...state.tasks,
            ],
          })),

        addCall: (
  leadId,
  result
) =>
  set((state) => ({
    calls: [
      {
        id: crypto.randomUUID(),
        leadId,
        result,
        createdAt:
          new Date().toISOString(),
      },
      ...state.calls,
    ],
  })),

deleteLead: (leadId) =>
  set((state) => {
    const remainingLeads =
      state.leads.filter(
        (lead) => lead.id !== leadId
      );

    return {
      leads: remainingLeads,

      selectedLeadId:
        state.selectedLeadId === leadId
          ? remainingLeads[0]?.id ?? ""
          : state.selectedLeadId,
    };
  }),

completeTask: (taskId) =>
  set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            completed: true,
          }
        : task
    ),
  })),
  updateLead: (updatedLead) =>
  set((state) => ({
    leads: state.leads.map((lead) =>
      lead.id === updatedLead.id
        ? updatedLead
        : lead
    ),
  })),

        
      }),
      {
        name: "crm-storage",
      }
    )
  );