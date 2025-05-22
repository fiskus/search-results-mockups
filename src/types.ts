export interface Entry {
  modified: Date;
  path: string;
  size: number;
  meta: boolean
}

export interface Package {
  name: string;
  bucket: string;
  revisions: number;
  modified: Date;
  message: string;
  metadata?: object;
  entries?: Entry[];
}
