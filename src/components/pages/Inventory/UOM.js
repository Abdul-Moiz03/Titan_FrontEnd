import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import UOM_Modal from "./UOM_Modal";
import { AddButton } from "../../../assets/buttons/AddButton";

import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "uomName",
    headerName: "Unit Of Measurement",
    width: 500,
  },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
];
const token = localStorage.getItem("token");
async function deleteElement(uomAutoId) {
  try {
    const response = await fetch(
      `http://localhost:8007/api/UnitOfMeasurements/${uomAutoId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 204) {
      console.log("Element deleted successfully.");
    } else {
      console.error(
        `Failed to delete element. Status code: ${response.status}`
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
const Viewbtn = ({ row, onEditClick }) => {
  const [HoveredIcon, setHoveredIcon] = useState(null);

  const handleIconMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="icon-wrapper">
      <Button sx={{ color: "black" }}>
        <EditIcon
          style={{ color: HoveredIcon === "edit" ? "#FBB515" : "inherit" }}
          onMouseEnter={() => handleIconMouseEnter("edit")}
          onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            onEditClick(row); // Call the parent component's onEditClick function and pass the row data
          }}
        />
      </Button>
      <Button sx={{ color: "black" }}>
        <DeleteIcon
          style={{
            color: HoveredIcon === "visibility" ? "#FBB515" : "inherit",
          }}
          onMouseEnter={() => handleIconMouseEnter("visibility")}
          onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            deleteElement(row.uomAutoId);
          }}
        />
      </Button>
    </div>
  );
};

export default function UOM() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowss, setRowss] = useState([]);
  const [rowDataForEdit, setRowDataForEdit] = useState(null);
  const GettingData = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "http://localhost:8007/api/UnitOfMeasurements",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      const arr = [];
      setRowss(arr);
      for (let i = 0; i < data.length; i++) {
        const obj = { ...data[i], id: i + 1 };
        arr.push(obj);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    GettingData();
  }, [rowss]);
  const handleOpenCreateModal = () => {
    setIsModalOpen(true); // Open the modal for create
    setRowDataForEdit(null); // Reset the rowDataForEdit for create
  };

  const handleOpenEditModal = (rowData) => {
    setIsModalOpen(true); // Open the modal for edit
    setRowDataForEdit(rowData); // Set the rowDataForEdit for editing
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  return (
    <>
      <AddButton onClickHandle={handleOpenCreateModal} caption="UOM" />
      <Box sx={{ px: 2, height: 600, width: "auto" }}>
        {isModalOpen && !rowDataForEdit && (
          <UOM_Modal
            isEdit={false}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
        {isModalOpen && rowDataForEdit && (
          <UOM_Modal
            isEdit={true}
            rowData={rowDataForEdit}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}

        <DataGrid
          rows={rowss}
          columns={[
            ...columns,
            {
              field: "actions",
              headerName: "Actions",
              headerAlign: "center",
              align: "center",
              width: 180,
              renderCell: (params) => (
                <Viewbtn
                  row={params.row}
                  onEditClick={handleOpenEditModal} // Pass the parent component's function as a prop
                />
              ),
            },
          ]}
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
    </>
  );
}
