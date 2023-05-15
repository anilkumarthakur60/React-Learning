import  {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";
import {clearCart, getCartItems, getCartTotal,} from "../redux/cartSlice.js";
import {CartItem} from "./CartItem.jsx";

export function CartContainer() {
    const {totalAmount, data} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [data]);

    if (data.length === 0) {
        return (
            <>
                <h3 className="fs-bold" style={{marginTop: "20px"}}>
                    Your Shopping{" "}
                    <span>
            <MDBIcon fas icon="shopping-bag"/>
          </span>{" "}
                    is Empty
                </h3>
                <MDBBtn
                    className="mx-2"
                    style={{marginRight: "100px"}}
                    onClick={() => dispatch(getCartItems())}
                >
                    Get Items
                </MDBBtn>
            </>
        );
    }
    return (
        <div>
            <h2 className="lead-mb-0 mt-2">Your Shooping Cart</h2>
            {data.map((item) => {
                return <CartItem key={item.id} {...item} />;
            })}
            <footer>
                <hr/>
                <div>
                    <h4
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            marginRight: "60px",
                        }}
                    >
                        Total <span>${totalAmount}</span>
                    </h4>
                </div>

                <MDBBtn
                    color="danger"
                    onClick={() => dispatch(clearCart())}
                    style={{width: "140px", marginTop: "50px"}}
                >
                    Clear Cart
                </MDBBtn>
            </footer>
        </div>
    );
}