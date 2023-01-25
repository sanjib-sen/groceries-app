"use client";
import { useNote } from "@/app/cache";

export default function Head({ params }: { params: { id: string } }) {
  const title = useNote(params.id)?.title;
  return (
    <>
      <title>{title}</title>
    </>
  );
}
