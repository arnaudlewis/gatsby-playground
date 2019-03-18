import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../prismic/linkResolver'
import { withPreview } from 'gatsby-source-prismic-graphql'

const BlogPost = (props) => {
  const data = props.pageContext.data

  return (
    <div id="blogpost">
      <h1>{RichText.asText(data.title)}</h1>
      {RichText.render(data.body, linkResolver)}
    </div>
  )
}

export default withPreview(BlogPost)