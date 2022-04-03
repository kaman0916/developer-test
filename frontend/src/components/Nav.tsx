import React, { useCallback } from 'react'
import { Flex, Icon, Switch, useColorMode } from '@chakra-ui/react'
import { MdExplore, MdBookmarks, MdWbSunny, MdGridView } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { NavButton } from './NavButton'
import { useColor } from 'src/hooks/useColor'

const pageList = [
  {
    label: 'Explore',
    icon: MdExplore,
    selected: true,
  },
  {
    label: 'Topics',
    icon: MdGridView,
  },
  {
    label: 'Digest',
    icon: MdWbSunny,
  },
  {
    label: 'Bookmarks',
    icon: MdBookmarks,
  },
]

const otherWebList = [
  {
    label: 'Blog',
  },
  {
    label: 'About',
  },
  {
    label: 'Join the Beta group',
  },
]

interface NavProps {
  setIsOpen?: (flag: any) => any
}

export const Nav: React.FC<NavProps> = (props) => {
  const { setIsOpen } = props
  const { bg, color, navBorderColor } = useColor()
  const { colorMode, toggleColorMode } = useColorMode()

  const renderPageList = useCallback(() => {
    return pageList.map((page) => (
      <NavButton setIsOpen={setIsOpen} key={`navBtn_${page.label}`} label={page.label} icon={page.icon} selected={page.selected} />
    ))
  }, [setIsOpen])

  const renderOtherWebList = useCallback(() => {
    return otherWebList.map((page) => <NavButton setIsOpen={setIsOpen} key={`navBtn_${page.label}`} label={page.label} />)
  }, [setIsOpen])

  return (
    <Flex
      flexDirection="column"
      height={'100vh'}
      position={{ base: 'sticky', lg: 'relative' }}
      top={'0'}
      left={'0'}
      width={{ base: '70%', md: '50%', lg: '280px' }}
      bg={bg}
      borderRight={'solid'}
      borderRightColor={navBorderColor}
      padding={'1rem'}
      zIndex={'1000'}
    >
      <Flex flex="auto" flexDirection="column">
        {renderPageList()}
      </Flex>
      <Flex flex="0" flexDirection="column">
        {renderOtherWebList()}
        <Flex margin={'0.5rem 0'} alignItems={'center'}>
          <Flex flex={'1'} fontWeight={800} fontSize={'2rem'} color={color} cursor={'pointer'}>
            Curated
          </Flex>
          <Flex flexDirection={'column'} justifyContent={'center'} margin={'0 1rem'}>
            <Flex justifyContent={'center'} margin={'0 0 0.5rem 0'} color={color}>
              {colorMode === 'light' ? 'Light' : 'Dark'}
            </Flex>
            <Switch margin={'0 1rem'} onChange={toggleColorMode} colorScheme={'Alphas'} isChecked={colorMode === 'dark'} />
          </Flex>
          <Flex color={'gray.300'} transition={'0.3s'} _hover={{ color: color }} cursor={'pointer'}>
            <Icon as={BsTwitter} boxSize={'1.2rem'} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
