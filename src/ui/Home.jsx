
import CreateUser from "../features/user/CreateUser";
import {useSelector} from "react-redux"
import Button from "./Button";

function Home() {
  const username=useSelector(state=>state.user.userName);
  return (
    <div className="m-6 sm:m-10 text-center flex flex-col items-center pt-24">
      <h1 className="mb-8 text-xl text-center font-semibold sm:text-4xl">
       Are you ready to try Yummy Pizza??
        <br />
        <span className="text-yellow-500">
        Order our the most delicious pizza right now.
        

        </span>
      </h1>
      
      {!username?<CreateUser/>:<Button to="/menu" type="primary">Choose your pizza</Button>}
    </div>
  );
}

export default Home;
