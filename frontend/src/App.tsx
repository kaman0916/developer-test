import React from 'react'
import { Flex } from '@chakra-ui/react'
import { PersonalSetting, Nav, TopNav } from 'src/components'
import { ExplorePage } from 'src/pages'

const App: React.FC = () => {
  return (
    <Flex flexDirection={{ base: 'column', lg: 'row' }} flex={1} position={'relative'}>
      <PersonalSetting />
      <TopNav />
      <Flex display={{ base: 'none', lg: 'flex' }}>
        <Nav />
      </Flex>
      <ExplorePage />
    </Flex>
  )
}

export default App
