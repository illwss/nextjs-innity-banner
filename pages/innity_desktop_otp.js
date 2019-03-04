import Layout from '../components/InnityLayout.js'
import ContentPage from './content.js'
import Helmet from 'react-helmet'

export const title = (page) => `${page?'(Page '+page+')':""} Desktop Over The Page (OTP)`

export default () => (
  <Layout>
    <Helmet>
      <script type="text/javascript">
        innity_domain = "http://network.innity.com/2015/products/olb/"
      </script>,
      <script src='https://network.innity.com/2015/products/olb/script/ad.js'></script>
    </Helmet>
    <h1>{title()}</h1>

    <ContentPage />
  </Layout>
)
