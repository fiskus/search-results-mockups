export interface Entry {
  modified: Date;
  path: string;
  size: number;
  meta: boolean;
}

export type JsonValue = number | string | JsonValue[] | object;

type Json = {
  [key: string]: JsonValue;
};

export interface Package {
  name: string;
  bucket: string;
  revisions: number;
  modified: Date;
  message: string;
  metadata?: Json;
  entries?: Entry[];
}
