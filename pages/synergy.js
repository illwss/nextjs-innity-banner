import Layout from '../components/SynergyLayout.js'
import React from 'react'

export default class SynergyIframePage extends React.Component {

  componentDidMount () {
    this._updateIframe()
  }

  _updateIframe () {
    const iframe = this.refs.iframe
    iframe.src = '/static/bannersynergy.html'
  }

  render () {
    return (
      <Layout>
        <p>
          Hello Synergy
        </p>
        <iframe ref='iframe' style={{height: '500px', width: '100%' }} />
      </Layout>
    )
  }
}
