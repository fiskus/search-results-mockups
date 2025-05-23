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
        metadata: {
          assay_run_number: "assay_run_37",
          created_at$: "2021-06-24 21:15:47.602487",
          samples: [
            {
              cell_line_batch_eln_dipslay_id: "EXP21000324",
              cell_line_batch_eln_name:
                "210426 gRNA stable cell line generation (Cas9- 139 high, 142 high, 143 low, 143 high, 144 low, 144 high)",
              cell_line_batch_name: "HEK293T-Cas9-139-004",
              cell_line_engineered_construct: ["OT-Cas9-139"],
              cell_line_engineered_lentivirus: ["VIR001380"],
              cell_line_notes: "Maintained at 0.5ug/ml puromycin media",
              cell_line_parent_cell_name: ["HEK293T"],
              cell_line_parent_name: "HEK293T-Cas9-139",
              cell_line_species: ["Human"],
              cell_line_tissue: "Embryonic Kidney",
              cell_line_type: ["Cell Line"],
              cell_line_vendor: ["ATCC"],
              date_frozen: null,
              engineered_lentivirus_batch: ["VIR001380-001"],
              frozen_by: "Grace Olinger",
              number_of_cellsvial: "3e6",
              passage_number: "5",
            },
            {
              cell_line_batch_eln_dipslay_id: "EXP21000324",
              cell_line_batch_eln_name:
                "210426 gRNA stable cell line generation (Cas9- 139 high, 142 high, 143 low, 143 high, 144 low, 144 high)",
              cell_line_batch_name: "HEK293T-Cas9-139-004",
              cell_line_engineered_construct: ["OT-Cas9-139"],
              cell_line_engineered_lentivirus: ["VIR001380"],
              cell_line_notes: "Maintained at 0.5ug/ml puromycin media",
              cell_line_parent_cell_name: ["HEK293T"],
              cell_line_parent_name: "HEK293T-Cas9-139",
              cell_line_species: ["Human"],
              cell_line_tissue: "Embryonic Kidney",
              cell_line_type: ["Cell Line"],
              cell_line_vendor: ["ATCC"],
              date_frozen: null,
              engineered_lentivirus_batch: ["VIR001380-001"],
              frozen_by: "Grace Olinger",
              number_of_cellsvial: "3e6",
              passage_number: "5",
            },
            {
              cell_line_batch_eln_dipslay_id: "EXP21000324",
              cell_line_batch_eln_name:
                "210426 gRNA stable cell line generation (Cas9- 139 high, 142 high, 143 low, 143 high, 144 low, 144 high)",
              cell_line_batch_name: "HEK293T-Cas9-139-004",
              cell_line_engineered_construct: ["OT-Cas9-139"],
              cell_line_engineered_lentivirus: ["VIR001380"],
              cell_line_notes: "Maintained at 0.5ug/ml puromycin media",
              cell_line_parent_cell_name: ["HEK293T"],
              cell_line_parent_name: "HEK293T-Cas9-139",
              cell_line_species: ["Human"],
              cell_line_tissue: "Embryonic Kidney",
              cell_line_type: ["Cell Line"],
              cell_line_vendor: ["ATCC"],
              date_frozen: null,
              engineered_lentivirus_batch: ["VIR001380-001"],
              frozen_by: "Grace Olinger",
              number_of_cellsvial: "3e6",
              passage_number: "5",
            },
          ],
          date_of_experiment: null,
          description: "Cas9 Pilot Screen BR1",
          display_id: "EXP21000539",
          experiment_type: "Amplicon sequencing",
          name: "Cas9 Library Screen",
          sample_prep_protocol: null,
        },
        entries: [
          {
            path: "konstantin/konstantinopolskyA.md",
            modified: "2025-05-18 14:22",
            size: 1234678,
            meta: false,
          },
          {
            meta: true,
            path: "konstantin/konstantinopolskyB.md",
            modified: "2025-05-18 14:22",
            size: 1234678,
          },
          {
            meta: true,
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
        metadata: {
          Author: "EDP",
          ComputerName: "Genome Lab - 1234",
          Date: "2023-07-10",
          DiseaseArea: "COVID-19",
          "Drug Substance": "RNA",
          ELN_ID: "827392-0102",
          FolderName: "A34-VB9877",
          Organism: "Monkey",
          ProjectID: "YYD",
          StudyID: "ABC-23-023394",
          Target: "T1",
          "Test Material": "FIS-1111",
          Tissue: "Lungs",
        },
      },
      {
        name: "project/data",
        bucket: "s3://production-instruments",
        revisions: 23,
        modified: "2025-05-15 08:45",
        message: "Updated dataset for Q2.",
        metadata: {
          ComputerName: "BOSLAB-5819",
          Author: "Xien",
          Date: "2022-10-10T00:00:00",
          ProjectID: "KHK",
          StudyID: "NCS-22-01240",
          FolderName: "NHP_LiverPK_Batch01_FullScan_LIMS",
          DiseaseArea: "AGT",
          Target: "T1",
          Organisem: "Monkey",
          Tissue: "Liver",
          "Drug Substance": "RNA",
          "Test Material": "GALNAC -202",
          ELN_ID: "Rnd-QPCR-10-20",
        },
        entries: [
          {
            meta: true,
            path: "docs/guideA.md",
            modified: "2025-05-17 10:10",
            size: 1234678,
          },
          {
            meta: false,
            path: "src/utils/helperB.ts",
            modified: "2025-05-16 08:45",
            size: 345678,
          },
          {
            meta: true,
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
            meta: false,
            path: "config/settings.json",
            modified: "2025-05-14 13:30",
            size: 123456,
          },
          {
            meta: false,
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
            meta: false,
            path: "scripts/deploy.sh",
            modified: "2025-05-12 20:00",
            size: 654321,
          },
          {
            meta: false,
            path: "tests/unit/testA.spec.ts",
            modified: "2025-05-11 14:22",
            size: 456789,
          },
          {
            meta: true,
            path: "assets/images/logo.png",
            modified: "2025-05-10 10:10",
            size: 345678,
          },
          {
            meta: false,
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
            meta: false,
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
