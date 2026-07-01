"use client";

import { useState } from "react";
import { useLeadStore } from "@/store/lead-store";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function NewLeadDialog() {
const { addLead, leads } = useLeadStore();

  const [open, setOpen] =
    useState(false);

  const [form, setForm] =
    useState({
      name: "",
      phone: "+91 ",
      society: "",
      location: "",
      requirement: "",
      budget: "",
      stage: "New",
      priority: "Warm" as
        | "Hot"
        | "Warm"
        | "Cold",
    });

  const handleSubmit = () => {
  if (!form.name) return;

  const exists = leads.some(
    (lead) => lead.phone === form.phone
  );

  if (exists) {
    alert("Phone number already exists.");
    return;
  }

  addLead(form);

  setOpen(false);

  setForm({
    name: "",
    phone: "+91 ",
    society: "",
    location: "",
    requirement: "",
    budget: "",
    stage: "New",
    priority: "Warm",
  });
};

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          New Lead
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Create Lead
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <Input
  placeholder="Phone"
  value={form.phone}
  maxLength={14} // +91 + 10 digits
  onChange={(e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(2, 12);

    setForm({
      ...form,
      phone: `+91 ${digits}`,
    });
  }}
/>

          <Input
            placeholder="Society"
            value={form.society}
            onChange={(e) =>
              setForm({
                ...form,
                society:
                  e.target.value,
              })
            }
          />

          <Input
            placeholder="Location"
            value={form.location}
            onChange={(e) =>
              setForm({
                ...form,
                location:
                  e.target.value,
              })
            }
          />

          <Input
            placeholder="Requirement"
            value={form.requirement}
            onChange={(e) =>
              setForm({
                ...form,
                requirement:
                  e.target.value,
              })
            }
            className="col-span-1 sm:col-span-2"
          />

          <Input
            placeholder="Budget"
            value={form.budget}
            onChange={(e) =>
              setForm({
                ...form,
                budget:
                  e.target.value,
              })
            }
          />
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full"
        >
          Save Lead
        </Button>
      </DialogContent>
    </Dialog>
  );
}