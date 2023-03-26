import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "items",
    headerName: "Items",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "group",
    headerName: "Group",
    type: "string",
    width: 110,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "cost",
    headerName: "Cost",
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    type: "number",
    width: 100,
    headerAlign: "center",
    align: "center",

    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "available",
    headerName: "Available",
    type: "String",
    width: 100,
    align: "center",
  },
  {
    field: "minimumQuantity",
    headerName: "Minimum Quantity",
    type: "number",
    width: 150,
    align: "center",
  },
  {
    field: "leadtime",
    headerName: "Lead Time",
    type: "number",
    width: 80,
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    items: "Snow",
    category: "Jon",
    group: 35,
    cost: 35,
    available: 35,
    minimumQuantity: 35,
    leadtime: 35,
  },
  {
    id: 2,
    items: "Lannister",
    category: "Cersei",
    group: 42,
    cost: 35,
    available: 35,
    minimumQuantity: 35,
    leadtime: 35,
  },
  {
    id: 3,
    items: "Lannister",
    category: "Jaime",
    group: 45,
    cost: 35,
    available: 35,
    minimumQuantity: 35,
    leadtime: 35,
  },
  {
    id: 4,
    items: "Stark",
    category: "Arya",
    group: 16,
    cost: 35,
    available: 35,
    minimumQuantity: 35,
    leadtime: 35,
  },
  {
    id: 5,
    items: "Targaryen",
    category: "Daenerys",
    group: null,
    cost: 35,
    available: 35,
    minimumQuantity: 35,
    leadtime: 35,
  },
  {
    id: 6,
    items: "Melisandre",
    category: null,
    group: 150,
    cost: 35,
    available: 35,
    minimumQuantity: 35,
    leadtime: 35,
  },
  {
    id: 7,
    items: "Clifford",
    category: "Ferrara",
    group: 44,
    cost: 35,
    available: 35,
    minimumQuantity: 35,
    leadtime: 35,
  },
  {
    id: 8,
    items: "Frances",
    category: "Rossini",
    group: 36,
    cost: 35,
    available: 35,
    minimumQuantity: 35,
    leadtime: 35,
  },
  {
    id: 9,
    items: "Roxie",
    category: "Harvey",
    group: 65,
    cost: 35,
    available: 35,
    minimumQuantity: 35,
    leadtime: 35,
  },
];

export default function Equipment() {
  return (
    <Box sx={{ px: 2, height: 600, width: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
