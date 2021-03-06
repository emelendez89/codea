/* eslint-disable react/no-danger */

import React from 'react'
import { renderToString } from 'react-dom/server'
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from './src/utils/getPageContext'

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // Get the context of the page to collected side effects.
  const pageContext = getPageContext()

  const bodyHTML = renderToString(
    <JssProvider
      registry={pageContext.sheetsRegistry}>{bodyComponent}</JssProvider>
  )

  replaceBodyHTMLString(bodyHTML)
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{
        __html: pageContext.sheetsRegistry.toString(),
      }}
    />,
  ])
}
