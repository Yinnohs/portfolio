import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/Section'
import { ProjectGridItem } from '../components/grid'

import palette from '../../public/images/color-palette.png'

const projects = () => {
  return (
    <Container>
      <Heading as={'h3'} fontSize={24} mb={4}>
        Projects
      </Heading>
      <SimpleGrid column={[1, 1, 2]} gap={7}>
        <Section delay="0.1">
          <ProjectGridItem
            id={'oauth'}
            title={'Oauth Server'}
            thumbnail={palette}
          >
            An proper oauthy Server
          </ProjectGridItem>
          {/* TODO: add more projects inside */}
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default projects
