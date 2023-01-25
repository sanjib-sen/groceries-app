"use client";

import { useMemo } from "react";
import { useLocalStorage } from "./middleware";
import { NoteList } from "./components/NoteList";
import { RawNote, Tag } from "./types";
import { useUser } from "@auth0/nextjs-auth0/client";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  const { user, error, isLoading } = useUser();

  console.log(notes, tags);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  function updateTag(id: string, label: string) {
    setTags((prevTags) => {
      return prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  }

  function deleteTag(id: string) {
    setTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id);
    });
  }

  return (
    <>
      <NoteList
        notes={notesWithTags}
        availableTags={tags}
        onUpdateTag={updateTag}
        onDeleteTag={deleteTag}
      />
    </>
  );
}

export default App;
