import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Base from '../components/Base';
import TableComponent from '../components/Table';

function Historic() {
  const [rows, setRow] = useState([]);
  useEffect(() => {
    setRow(JSON.parse((localStorage.getItem('historic'))))
  }, [])

  const header = ["Data", "Descrição", "Total", ""];
  return (
    <Base title="-> Historico de Compras">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} mt={2}>
          <Grid item lg={12}>
            <TableComponent rows={rows} header={header} view={true} />
          </Grid>
        </Grid>
      </Box>
    </Base>
  )
}

export default Historic;

