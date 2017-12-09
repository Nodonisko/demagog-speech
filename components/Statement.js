// @flow
import * as React from 'react'
import type { Statement as StatementType, VeracityKey } from '../lib/types'

type StatementProps = {
  ...StatementType,
  children: string,
}

const getColorForVeracity = (key: VeracityKey): string => {
  switch (key) {
    case 'true':
      return 'green'
    case 'false':
      return 'red'
    case 'unverifiable':
      return 'yellow'
    case 'misleading':
      return 'orange'
    default:
      ;(key: empty)
      return null
  }
}

const Statement = ({ children, assessment }: StatementProps) => (
  <b>
    {children}
    <style jsx>{`b {color: ${getColorForVeracity(
      assessment.veracity.key,
    )}}`}</style>
  </b>
)

export default Statement
