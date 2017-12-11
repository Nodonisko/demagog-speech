// @flow
import * as React from 'react'
import type { Statement } from '../lib/types'

type StatementPopupProps = {
  statement: Statement,
  offset: number,
  onClose: () => void,
}

const StatementPopup = ({
  statement,
  onClose,
  offset,
}: StatementPopupProps) => (
  <div
    className={`context-window clearfix ${statement ? 'active' : ''}`}
    style={{ top: offset }}
  >
    <a onClick={onClose} className="dismiss-context-window float-right">
      <img src="/static/close.svg" alt="Zavrit" />
    </a>
    {statement && (
      <div>
        <h4 className="nepravda">{statement.assessment.veracity.name}</h4>
        <p
          dangerouslySetInnerHTML={{ __html: statement.assessment.explanation }}
        />
      </div>
    )}
  </div>
)

export default StatementPopup
