import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "./Loading";

function AppLayout() {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";
 
  return (
    
    <div className="grid grid-rows-[auto_1fr_auto] ] h-screen">
      {isLoading && <Loading />}
      <Header />
      <main className="overflow-scroll bg-yellow ">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
