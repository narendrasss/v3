import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'

import { Heading, Text } from '@elements/text'
import Link from '@elements/Link'
import Layout from '@components/Layout'
import ProjectCard from '@components/ProjectCard'
import useProjectsQuery from '@util/useProjectsQuery'

const IndexPage = () => {
  const projects = useProjectsQuery()
  return (
    <Layout>
      <Header>
        <Heading>I'm Narendra.</Heading>
        <Text mt={1} fontSize={[1, 2, 3]}>
          I’m an aspiring software developer and 4th year Business and Computer
          Science student @ UBC.
        </Text>
        <Links justifyContent="center" color="blue" mt={2}>
          <li>
            <Link
              href="https://github.com/narendrasss"
              external
              fontWeight="semi"
            >
              Github
            </Link>
          </li>
        </Links>
      </Header>
      <section>
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage

const Header = styled.header`
  text-align: center;
`

const Links = styled(Flex).attrs({ as: 'ul' })`
  list-style: none;
`
