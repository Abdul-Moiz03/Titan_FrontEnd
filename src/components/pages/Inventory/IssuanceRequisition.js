// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";
// import { useState } from "react";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import { Button } from "@mui/material";
// import CreateIssuanceRequisitionModal from "./CreateIssuanceRequisitionModal";

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "requestpersonname",
//     headerName: "Request Person Name(ID)",
//     width: 450,
//     type: "string",
//     headerAlign: "center",
//     align: "center",
//   },
//   {
//     field: "noofequipments",
//     headerName: "No of Equipments",
//     type: "number",
//     width: 150,
//     headerAlign: "center",
//     align: "center",
//   },
//   {
//     field: "workorderid",
//     headerName: "Work Order ID",
//     type: "number",
//     width: 110,
//     headerAlign: "center",
//     align: "center",
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     // description: 'This column has a value getter and is not sortable.',
//     // sortable: false,

//     width: 100,
//     headerAlign: "center",
//     align: "center",

//     // valueGetter: (params) =>
//     //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
//   {
//     field: "actions",
//     headerName: "Actions",
//     width: 250,
//     renderCell: (params) => <Viewbtn id={params.row.id} />,
//   },
// ];
// const viewpurchaserequisition = (id) => {
//   console.log(id);
// };
// const Viewbtn = (props) => {
//   const [HoveredIcon, setHoveredIcon] = useState(null);

//   const handleIconMouseEnter = (iconName) => {
//     setHoveredIcon(iconName);
//   };

//   const handleIconMouseLeave = () => {
//     setHoveredIcon(null);
//   };
//   return (
//     <div className="icon-wrapper">
//       <Button sx={{ color: "black" }}>
//         <VisibilityIcon
//           style={{
//             color: HoveredIcon === "visibility" ? "#FBB515" : "inherit",
//           }}
//           onMouseEnter={() => handleIconMouseEnter("visibility")}
//           onMouseLeave={handleIconMouseLeave}
//           onClick={() => {
//             viewpurchaserequisition(props.id);
//           }}
//         />
//       </Button>
//     </div>
//   );
// };

// const rows = [
//   {
//     id: 1,
//     requestpersonname: "Snow",
//     noofequipments: 35,
//     workorderid: 35,
//     status: 35,
//   },
//   {
//     id: 2,
//     requestpersonname: "Lannister",
//     noofequipments: "Cersei",
//     workorderid: 42,
//     status: 35,
//   },
//   {
//     id: 3,
//     requestpersonname: "Lannister",
//     noofequipments: "Jaime",
//     workorderid: 45,
//     status: 35,
//   },
//   {
//     id: 4,
//     requestpersonname: "Stark",
//     noofequipments: "Arya",
//     workorderid: 16,
//     status: 35,
//   },
//   {
//     id: 5,
//     requestpersonname: "Targaryen",
//     noofequipments: "Daenerys",
//     workorderid: null,
//     status: 35,
//   },
//   {
//     id: 6,
//     requestpersonname: "Melisandre",
//     noofequipments: null,
//     workorderid: 150,
//     status: 35,
//   },
//   {
//     id: 7,
//     requestpersonname: "Clifford",
//     noofequipments: "Ferrara",
//     workorderid: 44,
//     status: 35,
//   },
// ];

// export default function IssuanceRequisition() {
//   return (
//     <>
//       <Box sx={{ px: 2, height: 600, width: "auto" }}>
//         <CreateIssuanceRequisitionModal />

//         <DataGrid
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 8,
//               },
//             },
//           }}
//           pageSizeOptions={[8]}
//           checkboxSelection
//           disableRowSelectionOnClick
//         />
//       </Box>
//     </>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import CreateIssuanceRequisitionModal from "./CreateIssuanceRequisitionModal";
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
    field: "issuenceId",
    headerName: "Issuence ID",
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
    field: "issuenceDescp",
    headerName: "Description",
    width: 250,
    headerAlign: "center",
    align: "center",
    headerAlign: "center",
  },
];

async function deleteElement(issuenceAutoId) {
  try {
    const response = await fetch(
      `http://localhost:8007/api/Issuences/${issuenceAutoId}`,
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
            deleteElement(row.issuenceAutoId);
          }}
        />
      </Button>
    </div>
  );
};
export default function IssuanceRequisition() {
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
      const response = await fetch("http://localhost:8007/api/Issuences", {
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
        caption="Issuance Requisition"
      />
      <Box sx={{ px: 2, height: 600, width: "auto" }}>
        {isModalOpen && !rowDataForEdit && (
          <CreateIssuanceRequisitionModal
            isEdit={false}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
        {isModalOpen && rowDataForEdit && (
          <CreateIssuanceRequisitionModal
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
