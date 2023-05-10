import {
  Box,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  useTheme,
  Chip,
  TableHead,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../components/Header";
import DoseService from "../services/doseService";
import { useEffect, useState } from "react";

const ListeDesDose = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "valeur",
      headerName: "valeur",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "seuil",
      headerName: "seuil",
      flex: 1,
    },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 1,
    // },
    // {
    //   field: "accessLevel",
    //   headerName: "Access Level",
    //   flex: 1,
    //   renderCell: ({ row: { access } }) => {
    //     return (
    //       <Box
    //         width="60%"
    //         m="0 auto"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         backgroundColor={
    //           access === "admin"
    //             ? colors.greenAccent[600]
    //             : access === "manager"
    //             ? colors.greenAccent[700]
    //             : colors.greenAccent[700]
    //         }
    //         borderRadius="4px"
    //       >
    //         {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
    //         {access === "manager" && <SecurityOutlinedIcon />}
    //         {access === "user" && <LockOpenOutlinedIcon />}
    //         <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
    //           {access}
    //         </Typography>
    //       </Box>
    //     );
    //   },
    // },
  ];
  const ds = new DoseService();
  const [doses, setDoses] = useState([]);
  useEffect(() => {
    AllDosesFromBack();
  }, []);
  const AllDosesFromBack = () => {
    ds.getAll().then((res) => {
      console.log("rs is", res.data);
      setDoses(res.data.data);
    });
  };
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Table>
          <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Valeur</TableCell>
            <TableCell>Seuil</TableCell>
            <TableCell>Action</TableCell>
          </TableHead>
>
          <TableBody>
            {doses.map((dose, index) => (
              <TableRow key={dose._id}>
                <TableCell>
                  {/* <Avatar
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                   src={"http://localhost:3000/storages/" + user.photo}
                ></Avatar> */}
                  {index + 1}
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "600",
                        }}
                      >
                        {dose.name}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {/* {user.email} */}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {dose.valeur}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {dose.seuil}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Chip
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      backgroundColor: "secondary.main",
                      color: "#fff",
                    }}
                    size="small"
                    label="Edit"
                    // onClick={(e) => { update(user._id) }}
                  ></Chip>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      backgroundColor: "success.main",
                      color: "#fff",
                    }}
                    size="small"
                    label="View Details"
                    // onClick={(e) => { ViewDetailsClient(user._id) }}
                  ></Chip>
                </TableCell>

               
                
                <TableCell>
                  <Chip
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      backgroundColor: "error.main",
                      color: "#fff",
                    }}
                    size="small"
                    label="Delete"
                    // onClick={(e) => { deleteClient(user._id) }}
                  ></Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default ListeDesDose;