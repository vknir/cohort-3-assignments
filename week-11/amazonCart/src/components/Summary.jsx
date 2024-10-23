import { useRecoilState , useRecoilValue} from "recoil";

import { cartTotalSelector } from "../store/cartTotalSelector";

function Summary()
{
    const result = useRecoilValue(cartTotalSelector)

    return <div className="summary">
        <h2>Order Summary</h2>
        <div className="summary__final">
            <p>Order Total {result.count}</p>
            <p> ₹{result.price}</p>
        </div>
        <button>Proceed to Buy</button>
    </div>
}

export default Summary;