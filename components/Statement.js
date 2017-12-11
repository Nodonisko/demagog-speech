// @flow
import * as React from 'react'
import type { Statement as StatementType, VeracityKey } from '../lib/types'

type StatementProps = {
  ...StatementType,
  children: string,
  onClick: (id: string) => void,
}

const getClassForVeracity = (key: VeracityKey): string => {
  switch (key) {
    case 'true':
      return 'pravda'
    case 'false':
      return 'nepravda'
    case 'unverifiable':
      return 'neoveritelne'
    case 'misleading':
      return 'zavadejici'
    default:
      ;(key: empty) // eslint-disable-line
      return null
  }
}

const Statement = ({ children, assessment, onClick }: StatementProps) => {
  let statementRef

  return (
    <a
      onClick={() => onClick(assessment.id, statementRef)}
      className={`vyrok ${getClassForVeracity(assessment.veracity.key)}`}
      ref={ref => {
        statementRef = ref
      }}
    >
      {children}
    </a>
  )
}

export default Statement
