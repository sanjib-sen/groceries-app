"use client";

import { useRouter } from "next/navigation";
import { Note } from "@/app/components/Note";
import { useNote } from "@/app/cache";

export default function NoteLayout({ params }: { params: { id: string } }) {
  const router = useRouter();
  const id = params.id;
  const note = useNote(id);

  if (note == null) {
    return router.push("/");
  }

  return <Note note={note} />;
}
