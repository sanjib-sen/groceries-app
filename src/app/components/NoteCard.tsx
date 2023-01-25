"use client";

import { Badge, Card, Stack } from "react-bootstrap";
import Link from "next/link";
import { Tag } from "../types";
import styles from "./NoteList.module.css";

export type NoteCardProps = {
  tags: Tag[];
  title: string;
  id: string;
};

export function NoteCard({ id, title, tags }: NoteCardProps) {
  return (
    <Card
      as={Link}
      href={`/note/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5 text-center">{title}</span>
          {tags.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {tags.map((tag) => (
                <Badge className="text-truncate badge-success" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
}
