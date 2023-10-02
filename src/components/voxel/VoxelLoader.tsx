import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const VoxelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

// eslint-disable-next-line react/display-name
export const VoxelContainer = forwardRef<any, any>(({ children }, ref) => {
  return (
    <Box
      ref={ref}
      className="voxel-model"
      m="auto"
      my={['-40px', '-50px', '-60px']}
      w={[280, 480, 480]}
      h={[280, 480, 480]}
      position="relative"
    >
      {children}
    </Box>
  )
})

const Loader = () => {
  return (
    <VoxelContainer>
      <VoxelSpinner />
    </VoxelContainer>
  )
}

export default Loader
