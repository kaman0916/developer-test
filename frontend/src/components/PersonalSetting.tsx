import React from 'react'
import { Flex, Avatar } from '@chakra-ui/react'

export const PersonalSetting: React.FC = () => {
  return (
    <Flex display={{ base: 'none', lg: 'flex' }} position={'absolute'} top={'1.5rem'} right={'1.5rem'} alignItems="center">
      <Avatar size="sm" name="Ka Man Lam" />
    </Flex>
  )
}
