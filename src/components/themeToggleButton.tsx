import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ligthColor = 'teal'
const darkColor = 'yellow'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label={'Toggle theme'}
      colorScheme={useColorModeValue(ligthColor, darkColor)}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    ></IconButton>
  )
}

export default ThemeToggleButton
