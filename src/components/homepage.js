import React from 'react'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic-graphql'

const Homepage = (props) => {
  const data = props.pageContext.data

  return (
    <div id="homepage">
      <h1>{RichText.asText(data.title)}</h1>
    </div>
  )
}

export default withPreview(Homepage)