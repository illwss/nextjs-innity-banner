import Layout from '../components/MyLayout.js'

export default () => (
  <Layout>
    <h1>Page D</h1>
    <p>
      This is the Mobile Grow page
    </p>
    <script dangerouslySetInnerHTML={{__html: ` innity_domain = 'http://network.innity.com/testscript/mobile/grow/';`}} />
    <script src='http://network.innity.com/testscript/mobile/grow/scripts/proxy_grow.js'></script>
  </Layout>
)
