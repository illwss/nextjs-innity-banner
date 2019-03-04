import Layout from '../components/FreshchatLayout.js'

export default () => (
  <Layout>
    <p>
      Hello. Fix Show Chatbox
    </p>
    <script dangerouslySetInnerHTML={{ __html: ` window.fcWidget.init({ token: "0eece0f7-ce3a-4f0a-9192-5888c7e277ef", host: "https://wchat.freshchat.com" });`}} />
  </Layout>
)
