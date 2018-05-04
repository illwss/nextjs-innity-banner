import Layout from '../components/MyLayout.js'

export default () => (
  <Layout>
    <h1>Page E</h1>
    <p>
      This is the Mobile Underlay page
    </p>
    <script dangerouslySetInnerHTML={{__html: `    innity_pcu = 'http://www.innity.com'; innity_domain = 'http://network.innity.com/testscript/mobile/underlayautonovideo/'; `}} />
    <script src='http://network.innity.com/testscript/mobile/underlayautonovideo/scripts/proxy_underlay_auto.js'></script>
  </Layout>
)
