import React, { useState } from 'react'
import { Flex, Button, Icon, Slide } from '@chakra-ui/react'
import { Nav } from 'src/components'
import { useColor } from 'src/hooks/useColor'
import { MdMenu } from 'react-icons/md'

export const TopNav: React.FC = () => {
  const { bg, navBorderColor, color, buttonHoverBg } = useColor()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex
      display={{ base: 'flex', lg: 'none' }}
      bgColor={bg}
      borderBottom={'solid'}
      borderColor={navBorderColor}
      height={'60px'}
      width={'full'}
      position={'sticky'}
      top={'0'}
      zIndex={'600'}
    >
      <Slide in={isOpen} direction={'left'} unmountOnExit>
        <Nav setIsOpen={setIsOpen} />
      </Slide>
      <Flex width={'full'} height={'100%'} position={'absolute'} alignItems={'center'} flex={1}>
        <Flex zIndex={'-1'} padding={'1rem'} flex={'1'} fontWeight={800} fontSize={'2rem'} color={color} cursor={'pointer'}>
          Curated
        </Flex>
        <Button
          margin={'0 1rem 0 0'}
          color={color}
          onClick={() => setIsOpen(!isOpen)}
          _hover={{
            bgColor: buttonHoverBg,
          }}
        >
          <Icon as={MdMenu} />
        </Button>
      </Flex>
    </Flex>
  )
}
