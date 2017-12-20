// @flow
import * as React from 'react'
import type { Statement as StatementType, VeracityKey } from '../lib/types'

type StatementProps = {
  ...StatementType,
  children: string,
  onClick: (string, ?Object) => void,
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

const Statement = ({
  children,
  assessment,
  onClick,
  id,
  active,
}: StatementProps) => {
  let statementRef

  const handleOnClick = () => {
    onClick(id, statementRef)
  }

  const activeClassName = active ? 'active' : ''

  return (
    <a
      onClick={handleOnClick}
      className={`vyrok ${getClassForVeracity(
        assessment.veracity.key,
      )} ${activeClassName}`}
      ref={ref => {
        statementRef = ref
      }}
    >
      {children}
    </a>
  )
}

export default Statement
