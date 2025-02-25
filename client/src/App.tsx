
import PageLayout from "./commonComponents/PageLayout"
import StoreHeader from "./containers/StoreHeader"
import Router from "./Router"

function App() {

  return (
    <PageLayout
      header={<StoreHeader />}
      footer={<></>}
    >
      <Router />
    </PageLayout>
  )
}

export default App
