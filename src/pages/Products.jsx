import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductModal from "../components/modals/ProductModal";
import useStockCall from "../hooks/useStockCall";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { DeleteForever } from "@mui/icons-material";
import { btnStyle } from "../styles/globalStyle";

const Products = () => {
  const { getStockData } = useStockCall();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    {
      field: "id",
      headerName: "#",
      minWidth: 40,
      maxWidth: 70,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "category",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
      flex: 3,
      minWidth: 150,
    },
    {
      field: "brand",
      headerName: "Brand",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "name",
      headerName: "Name",
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      flex: 2,
    },

    {
      field: "stock",
      headerName: "Stock",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      flex: 0.7,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 50,
      flex: 1,
      renderCell: (params) => (
        <GridActionsCellItem
          icon={<DeleteForever />}
          label="Delete"
          sx={btnStyle}
          onClick={() => deleteStockData("products", id)}
        />
      ),
    },
  ];

  useEffect(() => {
    getStockData("products");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        New Product
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Box sx={{ width: "100%" }}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Products;
