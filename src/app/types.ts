export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
  created: string;
  modified?: string;
};

export type Tag = {
  id: string;
  label: string;
};

export type NoteType = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
  created: string;
  modified?: string;
};
