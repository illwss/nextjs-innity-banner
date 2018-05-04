import Layout from '../components/MyLayout.js'

export default () => (
  <Layout>
    <h1>Page B</h1>
    <p>
      This is the card page
    </p>
    <script dangerouslySetInnerHTML={{__html: `  innity_pcu = 'http://www.innity.com'; innity_domain = 'http://network.innity.com/testscript/mobile/overlay_cards/' `}} />
    <script src='http://network.innity.com/testscript/mobile/overlay_cards/scripts/proxy_standard_overlay.js'></script>
  </Layout>
)
