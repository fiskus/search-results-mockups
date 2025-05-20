import * as M from "@mui/material";

const rows = [
  {
    name: "foo/bar",
    bucket: "s3://production-instruments",
    revisions: 12,
    modified: "2025-05-18 14:22",
    message: "Initial import and structure.",
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
  },
  {
    name: "utils/helpers",
    bucket: "s3://production-instruments",
    revisions: 7,
    modified: "2025-05-14 17:55",
    message: "Refactored helper functions.",
  },
  {
    name: "ml/models",
    bucket: "s3://production-instruments",
    revisions: 19,
    modified: "2025-05-13 13:30",
    message: "Trained new model version.",
  },
  {
    name: "backup/archive",
    bucket: "s3://production-instruments",
    revisions: 3,
    modified: "2025-05-12 06:12",
    message: "Monthly snapshot.",
  },
  {
    name: "reports/weekly",
    bucket: "s3://production-instruments",
    revisions: 11,
    modified: "2025-05-10 20:00",
    message: "Added April reports.",
  },
];

export default function PackageTable() {
  return (
    <M.TableContainer component={M.Paper}>
      <M.Table size="small">
        <M.TableHead>
          <M.TableRow>
            <M.TableCell>Package</M.TableCell>
            <M.TableCell>Revisions</M.TableCell>
            <M.TableCell>Last Modified</M.TableCell>
            <M.TableCell>Last Commit</M.TableCell>
          </M.TableRow>
        </M.TableHead>
        <M.TableBody>
          {rows.map((row, i) => (
            <M.TableRow key={i}>
              <M.TableCell component="th" scope="row">
                <M.Typography variant="body2">{row.name}</M.Typography>
                <M.Typography variant="caption" color="text.secondary">
                  {row.bucket}
                </M.Typography>
              </M.TableCell>
              <M.TableCell>{row.revisions}</M.TableCell>
              <M.TableCell>{row.modified}</M.TableCell>
              <M.TableCell>{row.message}</M.TableCell>
            </M.TableRow>
          ))}
        </M.TableBody>
      </M.Table>
    </M.TableContainer>
  );
}
