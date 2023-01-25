"use client";

import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NoteType, RawNote, Tag } from "../types";
import { useLocalStorage } from "../middleware";

export type NoteProps = {
  note: NoteType;
};

export function Note({ note }: NoteProps) {
  const navigate = useRouter();
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  function onDeleteNote(id: string) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  }

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1 className="text-center">{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link href={`note/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              onClick={() => {
                onDeleteNote(note.id);
                navigate.push("/");
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link href="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>

      <Row>
        <Stack direction="horizontal">
          <p className="text-start text-muted">Created on: {note.created}</p>
          {note.modified ? (
            <p className="text-end ms-auto text-muted">
              Last Modified: {note.modified}
            </p>
          ) : (
            ""
          )}
        </Stack>
      </Row>
    </>
  );
}
