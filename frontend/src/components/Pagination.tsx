import React from 'react'
import { Flex, Button, Icon, Input } from '@chakra-ui/react'
import { useColor } from 'src/hooks/useColor'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

interface PaginationProps {
  page: number
  maxPage: number
  setPage: (value: any) => any
  handleSearchPage: (tempPage: number) => any
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { page, maxPage, handleSearchPage, setPage } = props

  const { bg, color, placeholderColor, buttonBg, buttonHoverBg } = useColor()

  const handlePageSearch = (e: any) => {
    if (e.key === 'Enter' && handleSearchPage) {
      handleSearchPage(page)
    }
  }
  const handleOnChangePage = (e: any) => {
    const value = e.target.value
    if (value === '') {
      setPage(1)
    }
    setPage(parseInt(value))
  }

  const handleClickPageBtn = (action: any) => {
    let tempPage = page
    if (action === '+') {
      tempPage++
    } else {
      tempPage--
    }
    setPage(tempPage)
    handleSearchPage(tempPage)
  }

  return (
    <Flex rounded={'md'} width={{ base: '45%', md: '30%', lg: '15%' }} padding={'0.2rem'} bg={bg}>
      <Button
        margin={'0 1rem 0 0'}
        color={color}
        _hover={{
          bgColor: buttonHoverBg,
        }}
        bgColor={buttonBg}
        onClick={() => handleClickPageBtn('-')}
        size={'sm'}
        disabled={page <= 1}
      >
        <Icon as={MdKeyboardArrowLeft} />
      </Button>
      <Input
        size={'sm'}
        variant="unstyled"
        textAlign={'center'}
        value={page}
        placeholder={'Page'}
        onChange={handleOnChangePage}
        onKeyDown={handlePageSearch}
        _placeholder={{ color: placeholderColor }}
      />
      <Button
        margin={'0 0 0 1rem'}
        color={color}
        _hover={{
          bgColor: buttonHoverBg,
        }}
        bgColor={buttonBg}
        onClick={() => handleClickPageBtn('+')}
        size={'sm'}
        disabled={maxPage > 0 ? maxPage <= page : false}
      >
        <Icon as={MdKeyboardArrowRight} />
      </Button>
    </Flex>
  )
}
