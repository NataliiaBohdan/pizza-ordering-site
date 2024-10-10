import { Link, useLocation } from 'react-router-dom';
import {useSelector} from "react-redux"
import { getTotalPrice, getTotalQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const itemQuantity=useSelector(getTotalQuantity);
  const itemPrice=useSelector(getTotalPrice);
  const location = useLocation();
  if(!itemQuantity) return;
  return (
    <div className="flex items-center justify-between bg-brown px-4 py-4 text-sm uppercase text-yellow sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-yellow sm:space-x-6">
        <span>{itemQuantity} pizzas</span>
        <span>{formatCurrency(itemPrice)}</span>
      </p>
      {location.pathname === '/cart'?null: <Link to="/cart">Open cart &rarr;</Link>}
    </div>
  );
}

export default CartOverview;
