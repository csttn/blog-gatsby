import React from 'react'



import Search from '../components/Search'


import Layout from "../components/Layout"
import SEO from "../components/seo"

const SearchPage = () => (
  <Layout>
    <SEO title="About" />
    <Search />
  </Layout>
)

export default SearchPage;