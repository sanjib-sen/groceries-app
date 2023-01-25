"use client";

import { NoteData, RawNote, Tag } from "@/app/types";
import { NoteForm } from "@/app/components/NoteForm";
import { useLocalStorage } from "@/app/middleware";
import { useNote } from "@/app/cache";
import { Navigate } from "react-router-dom";

export default function EditNote({ params }: { params: { id: string } }) {
  const note = useNote(params.id);
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  function onAddTag(tag: Tag) {
    setTags((prev) => [...prev, tag]);
  }

  function onUpdateNote(id: string, { tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          var today = new Date();
          data.modified = today.toLocaleString();
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
        } else {
          return note;
        }
      });
    });
  }

  if (note) {
    return (
      <>
        <h1 className="mb-4">Edit Note</h1>{" "}
        <NoteForm
          title={note.title}
          markdown={note.markdown}
          tags={note.tags}
          onSubmit={(data) => onUpdateNote(note.id, data)}
          onAddTag={onAddTag}
          availableTags={tags}
          created={note.created}
        />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
}
