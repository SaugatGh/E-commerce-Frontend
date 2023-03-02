import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
import Footer from "../components/Footer/Footer";

import { removeCart, deleteCart } from "../redux/cartRedux";

import { useDispatch, useSelector } from "react-redux";

// ---
import { Link, useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethod";
import StripeCheckout from "react-stripe-checkout";
import { clearCart, deleteCartById } from "../redux/apiCalls";
import Navbar from "../components/Navbar";
const KEY =
  "pk_test_51L3WVXHNgpYlMGlKP5VCQ3Z6OsvNCEeYfalXwrFwA2O32qCbqZH0f7bah1x4YRcBwvpnZu7d9ruQ1tXRbDJy9lWW00kPJIqsVa";

///----
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

  @media only screen and (max-width: 380px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "green" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  @media only screen and (max-width: 380px) {
    display: none;
  }
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const ProductDetail = styled.div`
  border: 0.5px solid gray;
  margin-right: 10px;
  margin-bottom: 10px;
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  @media only screen and (max-width: 380px) {
    margin: 5px 15px;
  }
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  @media only screen and (max-width: 380px) {
    margin-bottom: 20px;
  }
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 65vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  // ---
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });

        removeCart(dispatch);
        navigate("/success", { stripeData: res.data });
      } catch (err) {
        // console.log("Exception:", err);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken, cart.total]);

  // ---

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">PAYMENT DOWN HERE </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart?.products?.map(
              ({ productId: product, color, quantity, img, price, size }) => (
                <Product key={product._id}>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={color} />
                      <ProductAmountContainer>
                        <h4> Quantity :</h4>

                        <ProductAmount>{quantity}</ProductAmount>
                      </ProductAmountContainer>
                      <ProductPrice>Rs {product.price * quantity}</ProductPrice>
                      <ProductSize>
                        <b>Size:</b>
                        {size}
                      </ProductSize>
                      <div style={{ marginTop: "2px" }}>
                        <button onClick={() => deleteCartById(dispatch)}>
                          Remove Item
                        </button>
                      </div>
                    </Details>

                    <PriceDetail></PriceDetail>
                  </ProductDetail>
                </Product>
              )
            )}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs {cart.total} </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs {cart.total} </SummaryItemPrice>
            </SummaryItem>

            <StripeCheckout
              name="Marci Shop"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1I_hxj4XSlf1u4viUeZ9wJJ-XtlmtJrQbXpkvjVJgnueAB5tQ3Ii0AZLXmxLAYbfqfJQ&usqp=CAU"
              billingAddress
              shippingAddress
              description={`Your total is Rs${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
              allowRememberMe
            />
          </Summary>
        </Bottom>
        <Button onClick={() => clearCart(dispatch)}>CLEAR ITEMS</Button>
        <hr />
        {/* <Footer /> */}
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Cart;
