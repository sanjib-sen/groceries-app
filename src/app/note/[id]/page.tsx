"use client";

import { Note } from "@/app/components/Note";
import { useNote } from "@/app/cache";
import { Navigate } from "react-router-dom";
export default function NoteLayout<ReactNode>({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const note = useNote(id);

  if (note == null) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Note note={note} />
    </>
  );
}
