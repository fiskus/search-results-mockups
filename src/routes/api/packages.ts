import { json } from "@tanstack/react-start";
import { createAPIFileRoute } from "@tanstack/react-start/api";
import type { Entry, Package } from "../../types";

type ResEntry = Omit<Entry, "modified"> & {
  modified: string;
};

type ResPackage = Omit<Package, "modified" | "entries"> & {
  modified: string;
  entries?: ResEntry[];
};

export const APIRoute = createAPIFileRoute("/api/packages")({
  GET: async ({ request }) => {
    console.info("Fetching packages... @", request.url);
    return json<ResPackage[]>([
      {
        name: "foo/bar",
        bucket: "s3://production-instruments",
        revisions: 12,
        modified: "2025-05-18 14:22",
        message: "Initial import and structure.",
        entries: [
          {
            path: "konstantin/konstantinopolskyA.md",
            modified: "2025-05-18 14:22",
            size: 1234678,
          },
          {
            path: "konstantin/konstantinopolskyB.md",
            modified: "2025-05-18 14:22",
            size: 1234678,
          },
          {
            path: "konstantin/konstantinopolskyC.md",
            modified: "2025-05-18 14:22",
            size: 1234678,
          },
        ],
      },
      {
        name: "baz/qux",
        bucket: "s3://production-instruments",
        revisions: 5,
        modified: "2025-05-17 10:10",
        message: "Fixed typo in README.",
      },
      {
        name: "project/data",
        bucket: "s3://production-instruments",
        revisions: 23,
        modified: "2025-05-15 08:45",
        message: "Updated dataset for Q2.",
        entries: [
          {
            path: "docs/guideA.md",
            modified: "2025-05-17 10:10",
            size: 1234678,
          },
          {
            path: "src/utils/helperB.ts",
            modified: "2025-05-16 08:45",
            size: 345678,
          },
          {
            path: "data/reports/2025Q1.csv",
            modified: "2025-05-15 17:55",
            size: 234567,
          },
        ],
      },
      {
        name: "utils/helpers",
        bucket: "s3://production-instruments",
        revisions: 7,
        modified: "2025-05-14 17:55",
        message: "Refactored helper functions.",
        entries: [
          {
            path: "config/settings.json",
            modified: "2025-05-14 13:30",
            size: 123456,
          },
          {
            path: "logs/server.log",
            modified: "2025-05-13 06:12",
            size: 987654,
          },
        ],
      },
      {
        name: "ml/models",
        bucket: "s3://production-instruments",
        revisions: 19,
        modified: "2025-05-13 13:30",
        message: "Trained new model version.",
        entries: [
          {
            path: "scripts/deploy.sh",
            modified: "2025-05-12 20:00",
            size: 654321,
          },
          {
            path: "tests/unit/testA.spec.ts",
            modified: "2025-05-11 14:22",
            size: 456789,
          },
          {
            path: "assets/images/logo.png",
            modified: "2025-05-10 10:10",
            size: 345678,
          },
          {
            path: "public/index.html",
            modified: "2025-05-09 08:45",
            size: 234567,
          },
        ],
      },
      {
        name: "backup/archive",
        bucket: "s3://production-instruments",
        revisions: 3,
        modified: "2025-05-12 06:12",
        message: "Monthly snapshot.",
        entries: [
          {
            path: "temp/cache/data.json",
            modified: "2025-05-08 17:55",
            size: 123456,
          },
        ],
      },
      {
        name: "reports/weekly",
        bucket: "s3://production-instruments",
        revisions: 11,
        modified: "2025-05-10 20:00",
        message: "Added April reports.",
      },
    ]);
  },
});
