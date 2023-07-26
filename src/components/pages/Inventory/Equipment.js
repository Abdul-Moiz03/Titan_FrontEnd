import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import CreateEquipModal from "./CreateEquipModal";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useEffect } from "react";
import { AddButton } from "../../../assets/buttons/AddButton";
import DeleteIcon from "@mui/icons-material/Delete";

const token = localStorage.getItem("token");
const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "equipId",
    headerName: "Equipment ID",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "equipName",
    headerName: "Equipment Name",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "groupName",
    headerName: "Group",
    type: "string",
    width: 110,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "catName",
    headerName: "Category",
    type: "String",
    width: 100,
    align: "center",
  },
  {
    field: "equipCost",
    headerName: "Cost",

    type: "number",
    width: 100,
    headerAlign: "center",
    align: "center",
  },

  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "equipLeadTime",
    headerName: "Lead Time",
    type: "number",
    width: 80,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 80,
    align: "center",
    headerAlign: "center",
  },
];

//   {
//     id: 1,
//     items: "Snow",
//     category: "Jon",
//     group: 35,
//     cost: 35,
//     available: 35,
//     minimumQuantity: 35,
//     leadtime: 35,
//   },
//   {
//     id: 2,
//     items: "Lannister",
//     category: "Cersei",
//     group: 42,
//     cost: 35,
//     available: 35,
//     minimumQuantity: 35,
//     leadtime: 35,
//   },
//   {
//     id: 3,
//     items: "Lannister",
//     category: "Jaime",
//     group: 45,
//     cost: 35,
//     available: 35,
//     minimumQuantity: 35,
//     leadtime: 35,
//   },
//   {
//     id: 4,
//     items: "Stark",
//     category: "Arya",
//     group: 16,
//     cost: 35,
//     available: 35,
//     minimumQuantity: 35,
//     leadtime: 35,
//   },
//   {
//     id: 5,
//     items: "Targaryen",
//     category: "Daenerys",
//     group: null,
//     cost: 35,
//     available: 35,
//     minimumQuantity: 35,
//     leadtime: 35,
//   },
//   {
//     id: 6,
//     items: "Melisandre",
//     category: null,
//     group: 150,
//     cost: 35,
//     available: 35,
//     minimumQuantity: 35,
//     leadtime: 35,
//   },
//   {
//     id: 7,
//     items: "Clifford",
//     category: "Ferrara",
//     group: 44,
//     cost: 35,
//     available: 35,
//     minimumQuantity: 35,
//     leadtime: 35,
//   },
//   {
//     id: 8,
//     items: "Frances",
//     category: "Rossini",
//     group: 36,
//     cost: 35,
//     available: 35,
//     minimumQuantity: 35,
//     leadtime: 35,
//   },
//   {
//     id: 9,
//     items: "Roxie",
//     category: "Harvey",
//     group: 65,
//     cost: 35,
//     available: 35,
//     minimumQuantity: 35,
//     leadtime: 35,
//   },
// ];
async function deleteElement(equipAutoId) {
  try {
    const response = await fetch(
      `http://localhost:8007/api/Equipments/${equipAutoId}`,
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
            deleteElement(row.equipAutoId);
          }}
        />
      </Button>
    </div>
  );
};
export default function Equipment() {
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

  const GettingCategoryData = async (catAutoId) => {
    try {
      const res = await fetch(
        `http://localhost:8007/api/Categories/${catAutoId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const resdata = await res.json();
      return resdata.catName;
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
        const catName = await GettingCategoryData(obj.catAutoId);
        obj.catName = catName;
        return obj;
      })
    );

    return arr;
  };
  const GettingData = async () => {
    try {
      const response = await fetch("http://localhost:8007/api/Equipments", {
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
      <AddButton onClickHandle={handleOpenCreateModal} caption="Equipment" />
      <Box sx={{ px: 2, height: 600, width: "auto" }}>
        {isModalOpen && !rowDataForEdit && (
          <CreateEquipModal
            isEdit={false}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
        {isModalOpen && rowDataForEdit && (
          <CreateEquipModal
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
