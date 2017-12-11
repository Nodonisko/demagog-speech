// @flow
import * as React from 'react'

type ArticleHeadingProps = {
  image: string,
  title: string,
  subtitle: string,
  speakerImage: string,
}

const ArticleHeading = ({
  image,
  title,
  subtitle,
  speakerImage,
}: ArticleHeadingProps) => (
  <div
    className="jumbotron text-center article-detail"
    style={{
      backgroundImage: `url('${image}')`,
    }}
  >
    <div className="container">
      {speakerImage && <img src={speakerImage} alt="" draggable="false" />}
      <h1 className="display-4">{title}</h1>
      <p>{subtitle.replace(/<\/?[^>]+(>|$)/g, '')}</p>
    </div>
  </div>
)

export default ArticleHeading
