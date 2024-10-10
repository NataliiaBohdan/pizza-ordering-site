/* eslint-disable react/prop-types */
import Button from "../../ui/Button"
import { useDispatch } from "react-redux"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

function UpdateItemQuantity({pizzaId,currentQuantity}) {
    const dispatch=useDispatch();
    return (
        <div className="flex  items-center md:gap-4">
            <Button  type="square" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span className="text-sm font-medium">{currentQuantity}</span>
            <Button type="square" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
