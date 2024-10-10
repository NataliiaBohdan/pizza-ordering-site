import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  return (
    <header className="bg-brown uppercase p-3 sm:p-6 border-b border-stone-400 space-y-2 sm:space-y-4 flex items-center justify-between">
      <Link className="tracking-widest"><img className="w-20 h-20" src="https://iili.io/dyCBXEl.webp"/></Link>
      {/* {location.pathname === '/'&&<><img src="https://iili.io/dysAub2.png" className="w-80 h-46 absolute right-20 top-[-4]
           z-3'"/>
      <img src="https://iili.io/dyshSFj.png" className="w-60 h-44 absolute left-52 botton-54
           z-20'"/></>} */}
      {location.pathname === '/' && <SearchOrder />}
      <UserName/>
    </header>
  );
}

export default Header;
