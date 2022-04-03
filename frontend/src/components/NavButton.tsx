import React from 'react'
import { IconType } from 'react-icons'
import { Flex, Icon } from '@chakra-ui/react'
import { useColor } from 'src/hooks/useColor'

interface NavButtonProps {
  label?: string
  icon?: IconType
  selected?: boolean
  setIsOpen?: (flag: any) => any
}

export const NavButton: React.FC<NavButtonProps> = (props) => {
  const { label, icon, selected, setIsOpen } = props

  const { color, navButtonBg, navButtonHoverBg } = useColor()
  return (
    <Flex
      alignItems={'center'}
      color={color}
      padding={'0.5rem'}
      rounded={'md'}
      cursor={'pointer'}
      transition={'0.3s'}
      bg={selected ? navButtonBg : ''}
      _hover={{ bg: selected ? navButtonBg : navButtonHoverBg }}
      onClick={() => setIsOpen && setIsOpen(false)}
    >
      {icon && (
        <Flex padding={'0 1rem 0 0.5rem'}>
          <Icon as={icon} boxSize={'1.2rem'} />
        </Flex>
      )}

      <Flex fontWeight={'600'}>{label}</Flex>
    </Flex>
  )
}
