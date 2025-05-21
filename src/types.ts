export interface Entry {
  modified: Date;
  path: string;
  size: number;
}

export interface Package {
  name: string;
  bucket: string;
  revisions: number;
  modified: Date;
  message: string;
  entries?: Entry[];
}
