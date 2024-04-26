import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'

export default function Botonera (props) {
  const { agregar, editar, eliminar, ver, title } = props
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          m: 1
        }
      }}
    >
      <h2 className='text-xl font-semibold text-center  text-gray-800'> {title} </h2>
      <ButtonGroup className='justify-end' variant='outlined' aria-label='outlined button group'>
        {agregar}
        {editar}
        {eliminar}
        {ver}
      </ButtonGroup>
    </Box>
    </>
  )
}
