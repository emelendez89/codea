// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import getPageContext from './getPageContext'

function withRoot(Component: Node) {
  class WithRoot extends React.Component {
    pagePropsContext = null

    constructor(props: {}) {
      super(props)

      const { pageContext } = this.props

      this.pagePropsContext = pageContext || getPageContext()
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#server-side-jss')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <MuiThemeProvider
          theme={getPageContext().theme}
          sheetsManager={this.pagePropsContext.sheetsManager}>
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      )
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object,
    Component: PropTypes.node,
  }

  return WithRoot
}

export default withRoot