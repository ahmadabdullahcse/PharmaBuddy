import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "../../redux/Slices/CartSlice";
import { toast } from "react-toastify";

const ItemCard = ({ _id, images, title, price, qty }) => {
  const dispatch = useDispatch();
  const notify = () => {
    toast.success(`${title} Removed!`, {
      icon: "👋",
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-4 mb-5 bg-accent border-secondary border-2 relative">
      <img src={images} alt="" className="w-[50px] h-[50px]" />

      <div className="flex flex-grow justify-between items-center">
        <div className="leading-5">
          <h2 className="font-bold text-xs text-black">{title}</h2>
          <span className="text-primary font-bold">₹{price}</span>
        </div>
        <div className="flex flex-col gap-3">
        <MdDelete
          onClick={() => {
            dispatch(removeFromCart({ _id, images, title, price, qty }));
            notify();
          }}
          className="text-primary cursor-pointer self-end"
        />

        <div className="flex items-center gap-2">
          <AiOutlineMinus
            onClick={() => qty > 1 && dispatch(decrementQty({ _id }))}
            className="text-primary hover:text-accent cursor-pointer"
          />
          <span>{qty}</span>
          <AiOutlinePlus
            onClick={() => dispatch(incrementQty({ _id }))}
            className="text-primary hover:text-accent cursor-pointer"
          />
        </div>
        </div>

      </div>
    </div>
  );
};

export default ItemCard;
