import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weigth: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(-10deg);
  }
`
const Logo = () => {
  const kitsune = `/images/kitsune.png`
  return (
    <Link href={'/'}>
      <LogoBox>
        <Image src={kitsune} width={20} height={20} alt="yinnohs logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily={'M PLUS Rounded 1c'}
          fontWeight={'bold'}
          ml={3}
        >
          Jose Soto
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
