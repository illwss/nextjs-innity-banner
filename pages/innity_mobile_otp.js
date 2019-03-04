import Layout from '../components/InnityLayout.js'
import ContentPage from './content.js'
import Helmet from 'react-helmet'
export const title = (page) => `${page?'(Page '+page+')':""} Mobile OTP`

export default () => (
  <Layout>
    <Helmet>
      <script type="text/javascript">
        innity_pcu = 'http://www.innity.com'
        innity_domain="http://network.innity.com/testscript/mobile/overlay_cards/"
      </script>,
      <script src='http://network.innity.com/testscript/mobile/overlay_cards/scripts/proxy_standard_overlay.js'></script>
    </Helmet>
    <h1>{title()}</h1>
    <ContentPage />
  </Layout>
)
