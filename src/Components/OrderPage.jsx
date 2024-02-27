import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckIcon from "@mui/icons-material/Check";
import PrintIcon from "@mui/icons-material/Print";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const createData = (
  id,
  channel,
  orderNo,
  orderDate,
  city,
  customerName,
  orderValue,
  status
) => {
  return {
    id,
    checkbox: false,
    channel,
    orderNo,
    orderDate,
    city,
    customerName,
    orderValue,
    status,
  };
};

const rows = [
  createData(
    1,
    "Online",
    "ORD123",
    "2024-02-28",
    "City A",
    "John Doe",
    100,
    "Pending"
  ),
  createData(
    2,
    "In-store",
    "ORD124",
    "2024-02-27",
    "City B",
    "Jane Doe",
    150,
    "Accepted"
  ),
  // Add more rows as needed
];

const columns = [
  { id: "checkbox", label: "", minWidth: 30 },
  { id: "channel", label: "Channel", minWidth: 80 },
  { id: "orderNo", label: "Order No", minWidth: 80 },
  { id: "orderDate", label: "Order Date", minWidth: 80 },
  { id: "city", label: "City", minWidth: 80 },
  { id: "customerName", label: "Customer Name", minWidth: 120 },
  { id: "orderValue", label: "Order Value", minWidth: 80 },
  { id: "status", label: "Status", minWidth: 80 },
];

const itemsPerPage = 5; // Set the number of items per page

const OrderPage = () => {
  const [value, setValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckboxChange = (id) => {
    // Toggle the checkbox for the corresponding row
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, checkbox: !row.checkbox } : row
    );
    // Update the rows in the state
    // You might want to use state management like useState for rows
    // and update it using setRows(updatedRows)
  };

  const totalPages = Math.ceil(rows.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const displayedRows = rows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ maxWidth: 900, margin: "auto" }}>
      <Paper elevation={3} sx={{ marginBottom: 2 }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Pending" />
          <Tab label="Accepted" />
          <Tab label="AWB Created" />
          <Tab label="Ready to Ship" />
          <Tab label="Shipped" />
          <Tab label="Completed" />
          <Tab label="Cancelled" />
        </Tabs>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <div>
          <Button
            variant="outlined"
            style={{ color: "black", borderColor: "gray", fontSize: "0.7rem" }}
            startIcon={<AssignmentIcon />}
          >
            Import Orders
          </Button>
          <Button
            variant="outlined"
            style={{ color: "black", borderColor: "gray", fontSize: "0.7rem" }}
            startIcon={<CheckIcon />}
          >
            Accept
          </Button>
          <Button
            variant="outlined"
            style={{ color: "black", borderColor: "gray", fontSize: "0.7rem" }}
            startIcon={<PrintIcon />}
          >
            Print
          </Button>
        </div>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 400,
          marginBottom: 2,
          overflowX: "auto",
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{
                    minWidth: column.minWidth,
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    padding: "8px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox" style={{ minWidth: "30px" }}>
                  <Checkbox
                    size="small"
                    checked={row.checkbox}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </TableCell>
                {columns.slice(1).map((column) => (
                  <TableCell
                    key={column.id}
                    align="left"
                    style={{
                      minWidth: column.minWidth,
                      fontSize: "0.75rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
        }}
      >
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon />
          </IconButton>
          <div style={{ margin: "0 10px" }}>{currentPage}</div>
          <IconButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
      </Box>{" "}
    </Box>
  );
};

export default OrderPage;
