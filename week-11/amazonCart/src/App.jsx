import {RecoilRoot} from 'recoil'
import AmazonCheckout from "./components/AmazonCheckout";

function App()
{
  return <>
    <RecoilRoot >
      <AmazonCheckout/>
    </RecoilRoot>
  </>
}

export default App;