import React from 'react'
import { Image, Box, Text, Icon, Flex } from '@chakra-ui/react'
import { useColor } from 'src/hooks/useColor'

import { MdPerson } from 'react-icons/md'
interface PhotoCardProps {
  photoInfo: {
    id: string
    urls: {
      regular: string
    }
    user: {
      username: string
      bio: string
    }
  }
}

export const PhotoCard: React.FC<PhotoCardProps> = (props) => {
  const { photoInfo } = props
  const { color } = useColor()
  return (
    <Box width={{ base: '100%', md: '50%', xl: '33%' }} padding={'0.5rem'} cursor={'pointer'}>
      <Image
        src={photoInfo.urls.regular}
        margin={'0 0 0.5rem 0'}
        boxSize={'100%'}
        height={'140px'}
        transition={'0.3s'}
        _hover={{ transform: 'scale(1.04)' }}
        objectFit="cover"
        borderRadius={'md'}
      />

      <Flex color={color} fontSize="sm" alignItems={'center'}>
        <Icon as={MdPerson} margin={'0 0.2rem 0 0'} />
        <Text>{photoInfo.user.username}</Text>
      </Flex>
    </Box>
  )
}
