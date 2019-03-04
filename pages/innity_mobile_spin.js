import Layout from '../components/InnityLayout.js'
import React from 'react'
import ContentPage from './content.js'
import {Helmet} from 'react-helmet'

export const title = (page) => `${page?'(Page '+page+')':""} Mobile Spin`

export default class InnityMobileSpinPage extends React.Component {
  render () {
    return (
      <div>
        <Helmet>
          <script src='http://network.innity.com/html5/mobile_spin/ad.js'></script>
        </Helmet>
        <Layout>
          <h1>{title()}</h1>
          <p>
            Mobile Cards_Spin / Standard Platform
          </p>
          <ContentPage />
        </Layout>
      </div>
    )
  }
}
