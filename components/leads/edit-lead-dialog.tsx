"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Lead,
  useLeadStore,
} from "@/store/lead-store";

interface Props {
  lead: Lead;
}

export function EditLeadDialog({
  lead,
}: Props) {
  const { updateLead } =
    useLeadStore();

  const [open, setOpen] =
    useState(false);

  const [form, setForm] =
    useState({
      name: lead.name,
      phone: lead.phone,
      society: lead.society,
      location: lead.location,
      requirement:
        lead.requirement,
      budget: lead.budget,
    });

  const handleSave = () => {
  updateLead({
    ...lead,
    ...form,
  });

  setOpen(false);
};

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
        >
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Edit Lead
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
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
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
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
            className="col-span-2"
            placeholder="Requirement"
            value={form.requirement}
            onChange={(e) =>
              setForm({
                ...form,
                requirement:
                  e.target.value,
              })
            }
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
          onClick={handleSave}
          className="w-full"
        >
          Save Changes
        </Button>
      </DialogContent>
    </Dialog>
  );
}