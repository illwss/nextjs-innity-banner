import Layout from '../components/InnityLayout.js'
import ContentPage from './content.js'
import {Helmet} from 'react-helmet'

export const title = (page) => `${page?'(Page '+page+')':""} Mobile First View (MFV)`

export default class InnityMobileFirstview extends React.Component {
  render () {
    return ( 
    <div>
      <Helmet>
        <script type="text/javascript">
          innity_domain = "http://network.innity.com/mobile/firstview/";
        </script>
        <script type="text/javascript" src="http://network.innity.com/mobile/firstview/ad.js"></script>
      </Helmet>
      <Layout>
        <h1>{title()}</h1>
        <ContentPage />
      </Layout>
    </div>)
  } 
}