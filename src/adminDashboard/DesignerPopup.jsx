import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getStatusColor } from "../utils/statuscolor";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TableFooter,
  Pagination,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { formatDate } from "../utils/date";
import { Link } from "react-router-dom";
import { getLink } from "../utils/drive";

const rowStyle = {
  color: "#6C757D",
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "center",
};

const tableHead = [
  "Order ID",
  "Order Date",
  "Assigned Date",
  "Completion Date	",
  "Amount",
  "Order Status",
  "Attachments",
];
export default function DesignerPopup({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalCount] = useState(data.orders.length);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage - 1);
  };
  const handleChangeRowsPerPage = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setPageSize(newSize);
    setCurrentPage(0);
  };

  const displayedRows = data.orders.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const pageSizeOptions = [5, 10, 25];
  return (
    <Box>
      <TableContainer
        sx={{
          border: "1px solid #EAECF0",
          width: "100%",
          height: "100%",
          margin: "auto",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",

          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "9999px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <Table aria-label="simple table">
          {displayedRows.length > 0 ? (
            <>
              {" "}
              <TableHead>
                <TableRow
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccc",
                    flexWrap: "nowrap",
                  }}
                >
                  {tableHead.map((header, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        color: "#21272A",
                        fontFamily: "InterMedium",
                        textWrap: "nowrap",
                        textAlign: "center",
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedRows.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ textWrap: "nowrap", color: "#6C757D" }}
                  >
                    <TableCell style={{ ...rowStyle }}>
                      {row._id.slice(0, 4) + "..."}
                    </TableCell>
                    <TableCell style={{ ...rowStyle }}>
                      {row.firstName}
                    </TableCell>
                    <TableCell style={{ ...rowStyle }}>
                      {row.assignedDate ? formatDate(row.assignedDate) : "--"}
                    </TableCell>
                    <TableCell style={{ ...rowStyle }}>
                      {" "}
                      {row.assignedAt ? formatDate(row.completedAt) : "--"}
                    </TableCell>
                    <TableCell style={{ ...rowStyle }}>{row.amount}</TableCell>
                    <TableCell
                      style={{ ...rowStyle, color: getStatusColor(row.status) }}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell style={rowStyle}>
                      {row.attachments.length > 0
                        ? row.attachments.map((img, ind) => (
                            <Link
                              target="_blank"
                              key={ind}
                              to={getLink(img).href}
                            >
                              <img
                                style={{ width: "40px", height: "auto" }}
                                src={getLink(img).imgsrc}
                              />
                            </Link>
                          ))
                        : "No attachments"}{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={tableHead.length}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        "& > *": {
                          // marginRight: '0px',
                        },
                      }}
                    >
                      <Button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 0}
                        sx={{
                          border: "1px solid #D0D5DD",
                          borderRadius: "8px",
                          padding: "8px, 14px, 8px, 14px",
                          gap: "8px",
                        }}
                      >
                        <ArrowBackIcon />
                        Previous
                      </Button>
                      <Pagination
                        count={Math.ceil(totalCount / pageSize)}
                        page={currentPage + 1}
                        onChange={handleChangePage}
                        hidePrevButton
                        hideNextButton
                        sx={{
                          "& .Mui-selected": {
                            color: "#2D7775",
                            backgroundColor: "#2D777533 !important",
                            borderRadius: "8px",
                          },
                          "& .Mui-selected.Mui-focusVisible": {
                            backgroundColor: "#2D777555",
                          },
                        }}
                      />

                      {/* End of pagging buttons */}
                      <Box>
                        <Button
                          onClick={handleNextPage}
                          disabled={
                            currentPage >= Math.ceil(totalCount / pageSize) - 1
                          }
                          sx={{
                            border: "1px solid #D0D5DD",
                            borderRadius: "8px",
                            padding: "8px, 14px, 8px, 14px",
                            gap: "8px",
                            marginRight: "10px",
                          }}
                        >
                          Next
                          <ArrowForwardIcon />
                        </Button>
                        <Select
                          value={pageSize}
                          onChange={handleChangeRowsPerPage}
                          sx={{
                            paddingY: "0px",
                            paddingX: "10px",
                            height: "40px",
                            gap: "8px",
                            borderRadius: "8px",
                          }}
                        >
                          {pageSizeOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </>
          ) : (
            <TableHead>
              {" "}
              <TableRow
                style={{ ...rowStyle, textWrap: "nowrap", color: "#6C757D" }}
              >
                {" "}
                <TableCell colSpan={7} style={{ ...rowStyle }}>
                  {" "}
                  User has not completed any orders yet
                </TableCell>{" "}
              </TableRow>
            </TableHead>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
