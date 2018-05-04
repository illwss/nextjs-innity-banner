import Layout from '../components/MyLayout.js'

export default () => (
  <Layout>
    <h1>Page F</h1>
    <p>
      This is the Mobile Cude page
    </p>
    <script dangerouslySetInnerHTML={{__html: ` innity_pcu = 'http://www.innity.com'; innity_domain = 'http://network.innity.com/testscript/mobile/cube/';`}} />
    <script src='http://network.innity.com/testscript/mobile/cube/scripts/proxy_standard_inline_auto.js'></script>
  </Layout>
)
