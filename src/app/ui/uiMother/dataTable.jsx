import { DataGrid, esES } from '@mui/x-data-grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { useState, useEffect } from 'react'

export default function DataTable (props) {
  const { columns, rows, selectId } = props
  const [setLoading] = useState(true)

  const theme = createTheme({
    palette: {
      primary: { main: '#1976d2' }
    }
  }, esES)

  // Simular una carga asíncrona
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

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
