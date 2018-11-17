import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'reactstrap'

import Layout from '../components/layout'
import Image from '../components/image'
import Introduction from '../components/Introduction/Introduction'

const IndexPage = () => (
  <Layout>
    <Container>
      <Introduction />
    </Container>
  </Layout>
)

export default IndexPage
