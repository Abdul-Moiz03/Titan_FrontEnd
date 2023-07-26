import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import CreatePurchaseRequisitionModal from "./CreatePurchaseRequisitionModal";
import { useEffect } from "react";
import { AddButton } from "../../../assets/buttons/AddButton";
import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";
const token = localStorage.getItem("token");
const columns = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "equipName",
    headerName: "Equipment Name",
    width: 150,
    type: "string",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "quantity",
    headerName: "No of Equipments",
    type: "number",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "purchaseId",
    headerName: "Purchase ID",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerName: "Status",
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,

    width: 80,
    headerAlign: "center",
    align: "center",

    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "purchasesDescp",
    headerName: "Description",
    width: 250,
    headerAlign: "center",
    align: "center",
    headerAlign: "center",
  },
];

async function deleteElement(purchaseAutoId) {
  try {
    const response = await fetch(
      `http://localhost:8007/api/Purchases/${purchaseAutoId}`,
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
            deleteElement(row.purchaseAutoId);
          }}
        />
      </Button>
    </div>
  );
};
export default function PurchaseRequisition() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowss, setRowss] = useState([]);

  const [rowDataForEdit, setRowDataForEdit] = useState(null);

  const processData = async (data) => {
    const arr = await Promise.all(
      data.map(async (item, index) => {
        const obj = { ...item, id: index + 1 };
        return obj;
      })
    );
    return arr;
  };
  const GettingData = async () => {
    try {
      const response = await fetch("http://localhost:8007/api/Purchases", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      processData(data).then((arr) => {
        setRowss(arr);
      });
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
        caption="Purchase Requisition"
      />
      <Box sx={{ px: 2, height: 600, width: "auto" }}>
        {isModalOpen && !rowDataForEdit && (
          <CreatePurchaseRequisitionModal
            isEdit={false}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
        {isModalOpen && rowDataForEdit && (
          <CreatePurchaseRequisitionModal
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
                <Viewbtn row={params.row} onEditClick={handleOpenEditModal} />
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
