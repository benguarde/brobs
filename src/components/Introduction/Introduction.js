import React from 'react'
import { Row, Col } from 'reactstrap'
import SectionTitle from '../SectionTitle'

import WorldIcon from './WorldIcon'
import CartIcon from './CartIcon'
import VideoIcon from './VideoIcon'
import ServerIcon from './ServerIcon'

import styles from './Introduction.module.scss'

const services = [
  {
    title: 'Web Design',
    Icon: WorldIcon
  },
  {
    title: 'Webstore',
    Icon: CartIcon
  },
  {
    title: 'Video Development',
    Icon: VideoIcon
  },
  {
    title: 'Hosting',
    Icon: ServerIcon
  }
]

const Introduction = () => {
  return (
    <section>
      <SectionTitle title="We Are Brobs" subtitle="We Take You Further." />
      <Row className={styles.rowWrapper}>
        <span className={styles.bgLine} />
        {services.map((service, key) => {
          const { title, Icon } = service
          return (
            <Col key={key}>
              <Icon className={styles.icon} />
              <span className={styles.numberWithDot} />
              <p className={styles.text}>{title}</p>
            </Col>
          )
        })}
      </Row>
    </section>
  )
}

export default Introduction
