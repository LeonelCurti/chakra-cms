import { Box, Flex, Tab, Tag } from '@chakra-ui/react'
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, MotionConfig, PanInfo } from 'framer-motion'

const randomImages = [
  'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 900 : -900,
      opacity: 0,
    }
  },
  center: {
    x: 0,
    //zIndex: 1,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 900 : -900,
      //zIndex: 0,
      opacity: 0,
    }
  },
}

//
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ProdDetailPhotosGallery = () => {
  const [curIndex, setCurIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const changePhotoIndex = (newVal: number) => {
    if (newVal > curIndex) {
      setDirection(1)
    } else {
      setDirection(-1)
    }
    setCurIndex(newVal)
  }

  const onSwipedLeft = () => {
    if (curIndex < randomImages.length - 1) {
      changePhotoIndex(curIndex + 1);
    }
  }
  const onSwipedRight = () => {
    if (curIndex > 0) {
      changePhotoIndex(curIndex - 1);
    }
  }


  return (
    <MotionConfig
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
    >
      {/* Main image */}
      <Flex flexDir={'column'}>
        <AnimatePresence initial={false} custom={direction}>
          <Box
            w={'full'}
            h={'auto'}
            overflow={'hidden'}
            position={'relative'}
          >
            <Box
              display={{ base: 'block', sm: 'none' }}
              position='absolute'
              top={'3'}
              left={'2'}
              zIndex={1}
            >
              <Tag  letterSpacing={'2px'} rounded={'xl'}>{`${curIndex + 1}/${randomImages.length}`}</Tag>
            </Box>
            <Box
              key={curIndex}
              as={motion.div}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}

              // @ts-ignore no problem in operation, although type error appears.
              onDragEnd={(e: any, info: PanInfo) => {
                const swipe = swipePower(info.offset.x, info.velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  onSwipedLeft()
                } else if (swipe > swipeConfidenceThreshold) {
                  onSwipedRight()
                }
              }}
            >
              <Image
                alt={'product image'}
                src={randomImages[curIndex]}
                layout="responsive"
                width="100%"
                height="100%"
                objectFit='cover'
                priority
              />
            </Box>
          </Box>
        </AnimatePresence>

        {/* Thumbs */}

        <Flex
          p={3}
          gap={2}
          display={{ base: 'none', sm: 'flex' }}
        >
          {
            randomImages.map((item, index) => (
              <Flex
                cursor={'pointer'}
                onMouseEnter={() => changePhotoIndex(index)}
                onClick={() => changePhotoIndex(index)}
                outline={curIndex === index ? '1px solid' : 'none'}
                flex={1}
                key={index}
              >
                <Box
                  w={'full'}
                  opacity={curIndex === index ? '1' : '0.8'}
                >
                  <Image
                    alt={'product image'}
                    src={item}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    objectFit='cover'
                  />
                </Box>
              </Flex>
            ))
          }
        </Flex>
      </Flex>
    </MotionConfig>
  )
}
