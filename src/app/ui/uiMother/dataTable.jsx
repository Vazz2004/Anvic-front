import { DataGrid, esES } from '@mui/x-data-grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import useSelectId from '../../hooks/useSelectid' // Corregido: "useSelectId" con "I" mayúscula

export default function DataTable (props) {
  const { columns, rows, initialId } = props // Corregido: "initialId" añadido
  const { setSelectId } = useSelectId(initialId) // Corregido: Renombrado el destructuring de selectId para evitar colisión de nombres
  const theme = createTheme(
    {
      palette: {
        primary: { main: '#1976d2' }
      }
    },
    esES
  )

  const handleSeleccionChange = (newId) => {
    setSelectId(newId)
  }

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
            const idEnv = ids[0]
            handleSeleccionChange(idEnv) // Corregido: Llamada a handleSeleccionChange
          } else {
            console.log('Ningún ID seleccionado')
            setSelectId(null) // Corregido: Llamada a setSelectId con null para limpiar el ID seleccionado
          }
        }}
      />
    </ThemeProvider>
  )
}
