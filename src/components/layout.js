import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {


  return (
    <>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} CSTTN - Blog
        {` `}
        <a href="https://github.com/csttn">Github</a>
      </footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
