import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ligthColor = '#202023'
const darkColor = '#f0e0cb'

const ThemeToggleButton = () => {
  return (
    <IconButton
      aria-label={'Toggle theme'}
      colorScheme={useColorModeValue(ligthColor, darkColor)}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      //   onClick={}
    ></IconButton>
  )
}

export default ThemeToggleButton
