import React from 'react'

import Section from './section'

export default function SectionInverted({ children, ...rest }) {
  return (
    <Section inverted={true} {...rest}>
      {children}
    </Section>
  )
}
