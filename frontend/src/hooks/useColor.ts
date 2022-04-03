import { useColorModeValue } from '@chakra-ui/react'

export const useColor = () => {
  const bg = useColorModeValue('gray.100', 'gray.700')
  const color = useColorModeValue('gray.500', 'white')
  const placeholderColor = useColorModeValue('gray.500', 'white')
  const buttonBg = useColorModeValue('white', 'gray.600')
  const buttonHoverBg = useColorModeValue('gray.50', 'gray.700')
  const navBorderColor = useColorModeValue('gray.200', 'gray.500')
  const navButtonBg = useColorModeValue('gray.300', 'gray.500')
  const navButtonHoverBg = useColorModeValue('gray.200', 'gray.600')
  return { bg, color, placeholderColor, buttonBg, buttonHoverBg, navBorderColor, navButtonBg, navButtonHoverBg }
}
