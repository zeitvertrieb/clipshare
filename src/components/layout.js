/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'gatsby-plugin-intl'
import CustomNavbar from './block/navbar'
import Footer from './block/footer'
// import StickyBar from './element/stickyBar'

import 'modern-normalize/modern-normalize.css'
import '../scss/styles.scss'

const Layout = ({ children, intl }) => {
  return (
    <>
      <CustomNavbar siteTitle={intl.formatMessage({ id: "title" })} />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
