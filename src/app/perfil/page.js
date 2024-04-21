import Nav from '../../app/ui/perfil/nav'
import Dash from '../../app/ui/perfil/dash'
import { Stack } from '@mui/system'

export default function Page () {
  return (
    <>
      <div className='flex  items-start'>
        <Nav className='flex-1' />

        <Stack
          width='90%'
          marginLeft='15%'
          spacing={2}
        >
          <Dash className='flex-1' />
        </Stack>
      </div>

    </>
  )
}
