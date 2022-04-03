import React, { useCallback, useEffect, useState } from 'react'
import { Flex, Text } from '@chakra-ui/react'

import { Search, PhotoCard, Pagination } from 'src/components'
import { getPhotos } from 'src/service/photo.service'
import { PhotoI } from 'src/interfaces/photo.interfaces'

export const ExplorePage: React.FC = () => {
  const [photoList, setPhotoList] = useState<PhotoI[]>([])
  const [page, setPage] = useState(1)
  const [keywords, setKeywords] = useState('')
  const [maxPage, setMaxPage] = useState(0)

  const handleGetPhotos = async () => {
    const response = await getPhotos({})
    setPhotoList(response.results)
  }
  const handleSearchPhotos = async (data: {}) => {
    const response = await getPhotos({ ...data })
    setPhotoList(response.results)
    if (response.total_pages) {
      setMaxPage(response.total_pages)
    } else {
      setMaxPage(0)
    }
  }

  const renderPhotoCard = useCallback(() => {
    if (photoList.length > 0) {
      return photoList.map((photoInfo) => <PhotoCard key={photoInfo.id} photoInfo={photoInfo} />)
    } else {
      return <Text>No Result! </Text>
    }
  }, [photoList])

  const handleOnChangeKeywords = (e: any) => {
    const value = e.target.value
    setKeywords(value)
  }

  const handleSearchKeywords = () => {
    handleSearchPhotos({ query: keywords, page: 1 })
    setPage(1)
  }

  const handleSearchPage = (tempPage: number) => {
    if (typeof tempPage !== 'number' || tempPage < 1) {
      tempPage = 1
      setPage(1)
    }
    handleSearchPhotos({ query: keywords, page: tempPage })
  }

  useEffect(() => {
    handleGetPhotos()
  }, [])

  useEffect(() => {
    if (isNaN(page)) {
      setPage(1)
    }
  }, [page])

  return (
    <Flex flex={1} padding={'1rem'} flexDirection={'column'} height={'100vh'} alignItems={'center'}>
      <Flex
        flex={1}
        height={'100%'}
        margin={'0.5rem'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        width="100%"
        maxWidth={'1000px'}
      >
        <Search keywords={keywords} handleOnChangeKeywords={handleOnChangeKeywords} handleSearch={handleSearchKeywords} />
        <Flex
          flex={1}
          justifyContent={'center'}
          margin={'1rem 0'}
          width={{ base: '100%', md: '85%', lg: '70%' }}
          overflowY={'auto'}
          overflowX={'hidden'}
        >
          <Flex flexWrap={'wrap'}>{renderPhotoCard()}</Flex>
        </Flex>
        <Pagination page={page} setPage={setPage} handleSearchPage={handleSearchPage} maxPage={maxPage} />
      </Flex>
    </Flex>
  )
}
