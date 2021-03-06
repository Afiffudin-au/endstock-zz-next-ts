import { useDisclosure } from '@chakra-ui/hooks'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import ReactPlayer from 'react-player'
import ModalDetailVideo from '../ModalDetailVideo'
import styles from './CardVideo.module.css'
export interface CardVideoOptions {
  id: string | number
  url: string
  thumbnail: string
  description: string
}
function CardVideo({
  id,
  url,
  thumbnail,
  description,
}: Partial<CardVideoOptions>) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleDetail = (open: boolean) => {
    onOpen()
  }
  return (
    <>
      <div className={styles.CardVideo}>
        <div className={styles.playerWrapper}>
          <ReactPlayer
            className={styles.reactPlayer}
            light={thumbnail}
            controls={true}
            width='100%'
            height='100%'
            url={url}
          />
        </div>
        <Box p={5} onClick={() => handleDetail(true)} cursor='pointer'>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated>
            {description}
          </Box>
        </Box>
      </div>
      {isOpen && <ModalDetailVideo id={id} isOpen={isOpen} onClose={onClose} />}
    </>
  )
}

export default CardVideo
