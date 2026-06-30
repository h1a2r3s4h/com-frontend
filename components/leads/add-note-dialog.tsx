"use client";

import { useState } from "react";
import { useLeadStore } from "@/store/lead-store";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddNoteDialog({
  leadId,
}: {
  leadId: string;
}) {
  const { addNote } =
    useLeadStore();

  const [note, setNote] =
    useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Add Note
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Add Note
          </DialogTitle>
        </DialogHeader>

        <Textarea
          value={note}
          onChange={(e) =>
            setNote(
              e.target.value
            )
          }
          placeholder="Write note..."
        />

        <Button
          onClick={() => {
            if (!note) return;

            addNote(
              leadId,
              note
            );

            setNote("");
          }}
        >
          Save Note
        </Button>
      </DialogContent>
    </Dialog>
  );
}