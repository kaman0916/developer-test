import React from 'react'
import { Flex, Button, Icon, Input, Text } from '@chakra-ui/react'
import { useColor } from 'src/hooks/useColor'
import { MdFilterAlt } from 'react-icons/md'

interface SearchProps {
  keywords?: string
  handleOnChangeKeywords?: (e: any) => any
  onClickFilter?: () => void
  handleSearch?: () => void
}

export const Search: React.FC<SearchProps> = (props) => {
  const { keywords, handleOnChangeKeywords, onClickFilter, handleSearch } = props

  const { bg, color, placeholderColor, buttonBg, buttonHoverBg } = useColor()

  const handleKeydownSearch = (e: any) => {
    if (e.key === 'Enter' && handleSearch) {
      handleSearch()
    }
  }

  return (
    <Flex rounded={'md'} width={{ base: '100%', md: '85%', lg: '70%' }} padding={'0.2rem'} bg={bg}>
      <Button
        margin={'0 1rem 0 0'}
        color={color}
        _hover={{
          bgColor: buttonHoverBg,
        }}
        bgColor={buttonBg}
        onClick={onClickFilter}
        size={'sm'}
      >
        <Flex alignItems={'center'}>
          <Icon as={MdFilterAlt} margin={'0 0.1rem 0 0'} />
          <Text>Filters</Text>
        </Flex>
      </Button>
      <Input
        size={'sm'}
        placeholder="Search Knowledge"
        variant="unstyled"
        textAlign={'center'}
        value={keywords}
        onChange={handleOnChangeKeywords}
        onKeyDown={handleKeydownSearch}
        _placeholder={{ color: placeholderColor }}
      />
      <Button
        margin={'0 0 0 1rem'}
        color={color}
        bgColor={buttonBg}
        _hover={{
          bg: buttonHoverBg,
        }}
        onClick={handleSearch}
        size={'sm'}
      >
        /
      </Button>
    </Flex>
  )
}
