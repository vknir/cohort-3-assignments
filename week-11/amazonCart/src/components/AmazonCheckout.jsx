import Header from './Header.jsx'
import Cart from './Cart.jsx'
import Summary from './Summary.jsx'

function AmazonCheckout()
{
    return <>
    <nav>
        <Header />
    </nav>

    <main>
        <Cart />
        <Summary />
    </main>
    </>
}

export default AmazonCheckout