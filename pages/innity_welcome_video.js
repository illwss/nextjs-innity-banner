import Layout from '../components/InnityLayout.js'
import ContentPage from './content.js'
import Helmet from 'react-helmet'

export const title = (page) => `${page?'(Page '+page+')':""} Welcome Video`

export default () => (
  <Layout>
    <Helmet>
      <script type="text/javascript" src="https://network.innity.com/html5/welcome_video/ad.js"></script>
    </Helmet>
    <h1>{title()}</h1>

    <ContentPage />
  </Layout>
)
