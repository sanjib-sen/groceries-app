"use client";

import { useMemo } from "react";
import { useLocalStorage } from "./middleware";
import { RawNote, Tag } from "./types";

export function useNote(id: string) {
  const [notes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);
  const note = notesWithTags.find((n) => n.id === id);

  return note;
}
