import { DataGrid, esES } from '@mui/x-data-grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'

export default function DataTable (props) {
  const { columns, rows, selectId } = props
  const theme = createTheme({
    palette: {
      primary: { main: '#1976d2' }
    }
  }, esES)

  return (
        <ThemeProvider theme={theme}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 }
                  }
                }}
                pageSizeOptions={[5, 10]}
                loading={!rows.length}
                onRowSelectionModelChange={(ids) => {
                  if (ids.length > 0) {
                    console.log('ID seleccionado:', ids[0])
                  } else {
                    console.log('Ningún ID seleccionado')
                    selectId()
                  }
                }}
            />
        </ThemeProvider>
  )
}
