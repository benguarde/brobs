import React from 'react'
import PropTypes from 'prop-types'

import styles from './SectionTitle.module.scss'

const SectionTitle = props => {
  return (
    <div className={styles.SectionTitle}>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      <hr />
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default SectionTitle
