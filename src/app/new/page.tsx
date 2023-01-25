"use client";

import { NoteData, Tag, RawNote } from "../types";
import { NoteForm } from "../components/NoteForm";
import { useLocalStorage } from "../middleware";
import { v4 as uuidV4 } from "uuid";
import { Container } from "react-bootstrap";

export default function NewNote() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  function onAddTag(tag: Tag) {
    setTags((prev) => [...prev, tag]);
  }

  function onSubmit({ tags, ...data }: NoteData) {
    var today = new Date();
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          ...data,
          id: uuidV4(),
          created: today.toLocaleString(),
          tagIds: tags.map((tag) => tag.id),
        },
      ];
    });
  }

  return (
    <>
      <Container className="my-4 pt-4 pl-4 p-4 bg-light rounded select-none">
        <h1 className="mb-4">New Note</h1>
        <NoteForm
          onSubmit={onSubmit}
          onAddTag={onAddTag}
          availableTags={tags}
        />
      </Container>
    </>
  );
}
