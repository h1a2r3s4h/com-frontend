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
  const { addLead } = useLeadStore();

  const [open, setOpen] =
    useState(false);

  const [form, setForm] =
    useState({
      name: "",
      phone: "",
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

    addLead(form);

    setOpen(false);

    setForm({
      name: "",
      phone: "",
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

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Create Lead
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
            placeholder="Requirement"
            value={form.requirement}
            onChange={(e) =>
              setForm({
                ...form,
                requirement:
                  e.target.value,
              })
            }
            className="col-span-2"
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