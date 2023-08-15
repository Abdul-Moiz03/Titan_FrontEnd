import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
// import CreateIssuanceRequisitionModal from "./CreateIssuanceRequisitionModal";
import EditIcon from "@mui/icons-material/Edit";
import Schedule_Work_Order from "./Schedule_Work_Order";
import { useEffect } from "react";
import { AddButton } from "../../../assets/buttons/AddButton";
import DeleteIcon from "@mui/icons-material/Delete";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "assetId",
    headerName: "Asset Id",
    width: 180,
    type: "string",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "headOfProblem",
    headerName: "Head Of Problem",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "description",
    headerName: "Description",
    type: "string",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "frequencyDays",
    headerName: "Frequency Days",
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,

    width: 100,
    headerAlign: "center",
    align: "center",

    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "initialDateTime",
    headerName: "Initial Date Time",
    type: "number",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
];
const token = localStorage.getItem("token");
async function deleteElement(swrAutoId) {
  try {
    const response = await fetch(
      `http://localhost:8007/api/ScheduledWorkRequests/${swrAutoId}`,
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
            deleteElement(row.swrAutoId);
          }}
        />
      </Button>
    </div>
  );
};

export default function Maintenance_Model() {
  const [rowss, setRowss] = useState([]);
  const [rowDataForEdit, setRowDataForEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const GettingData = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "http://localhost:8007/api/ScheduledWorkRequests",
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
      <AddButton
        onClickHandle={handleOpenCreateModal}
        caption="Schedule Work Order"
      />
      <Box sx={{ px: 2, height: 600, width: "auto" }}>
        {isModalOpen && !rowDataForEdit && (
          <Schedule_Work_Order
            isEdit={false}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
        {isModalOpen && rowDataForEdit && (
          <Schedule_Work_Order
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
