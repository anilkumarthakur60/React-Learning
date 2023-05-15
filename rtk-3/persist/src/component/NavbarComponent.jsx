import {MDBBadge, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarLink} from "mdb-react-ui-kit";
import {useDispatch, useSelector} from "react-redux";

export default function NavbarComponent() {
    const { totalCount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <div>
            <MDBNavbar expand="lg" dark bgColor="primary">
                <MDBContainer>
                    <MDBNavbarBrand
                        style={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        Redux-Toolkit Shopping Cart
                    </MDBNavbarBrand>

                    <MDBNavbarLink>
                        <a className="mx-3" href="#!">
                            <MDBIcon fas icon="shopping-cart" size="lg" color="white" />
                            <MDBBadge
                                pill
                                color="danger"
                                notification
                                style={{ fontSize: "12px" }}
                            >
                                {totalCount}
                            </MDBBadge>
                        </a>
                    </MDBNavbarLink>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}