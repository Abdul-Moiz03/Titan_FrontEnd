import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Groups_Modal from "./Groups_Modal";
import { AddButton } from "../../../assets/buttons/AddButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import Category_Modal from "./Category_Modal";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "catId",
    headerName: "Category ID",
    width: 180,
    type: "string",
    headerAlign: "center",
    align: "center",
  },

  {
    field: "catName",
    headerName: "Category Name",
    type: "string",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "groupName",
    headerName: "Group Name",
    type: "string",
    width: 150,
    headerAlign: "center",
    align: "center",
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
async function deleteElement(catId) {
  try {
    const response = await fetch(
      `http://localhost:8007/api/Categories/${catId}`,
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
            deleteElement(row.catId);
          }}
        />
      </Button>
    </div>
  );
};
export default function Category() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowss, setRowss] = useState([]);
  const [rowDataForEdit, setRowDataForEdit] = useState(null);
  const GettingGroupData = async (groupAutoID) => {
    try {
      const res = await fetch(
        `http://localhost:8007/api/Groups/${groupAutoID}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const resdata = await res.json();
      return resdata.groupName;
      // Return the group name
    } catch (error) {
      console.log("Error", error);
      return null;
    }
  };
  const processData = async (data) => {
    const arr = await Promise.all(
      data.map(async (item, index) => {
        const obj = { ...item, id: index + 1 };
        const groupName = await GettingGroupData(obj.groupAutoId);
        obj.groupName = groupName;
        return obj;
      })
    );

    return arr;
  };
  const GettingData = async () => {
    try {
      const response = await fetch("http://localhost:8007/api/Categories", {
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
      <AddButton onClickHandle={handleOpenCreateModal} caption="Category" />
      <Box sx={{ px: 2, height: 600, width: "auto" }}>
        {isModalOpen && !rowDataForEdit && (
          <Category_Modal
            isEdit={false}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
        {isModalOpen && rowDataForEdit && (
          <Category_Modal
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
