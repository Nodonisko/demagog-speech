// @flow
import * as React from 'react'
import moment from 'moment'

moment.locale('cs')

type SidebarInfoProps = {
  publishedAt: string,
  moderatorName: string,
  medium: string,
  mediumUrl: string,
}

const SidebarInfo = ({
  publishedAt,
  moderatorName,
  medium,
  mediumUrl,
}: SidebarInfoProps) => (
  <div>
    <ul className="list-group">
      <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
        Publikováno
        <strong>{moment(publishedAt).format('D. MMMM YYYY')}</strong>
      </li>
      <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
        Moderátor
        <strong>{moderatorName}</strong>
      </li>
    </ul>
    <div className="list-group" style={{ marginTop: '1rem' }}>
      <a
        href={mediumUrl}
        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        Záznam
        <strong>{medium}</strong>
      </a>
    </div>
  </div>
)

export default SidebarInfo
