import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
import Footer from "../components/Footer/Footer";

import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { createCart } from "../redux/apiCalls";
import Contact from "../Contact/Contact";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  @media only screen and (max-width: 380px) {
    paddgin: 10px;
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  @media only screen and (max-width: 380px) {
    height: 40vh;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  @media only screen and (max-width: 380px) {
    padding: 10px;
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
`;
const Desc = styled.div`
  margin: 20px 0px;
`;
const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;

  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    width: 100%;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`
  margin-left: 25px;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 380px) {
    width: 100%;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const getProduct = async () => {
    try {
      const res = await publicRequest.get("/products/find/" + id);
      setProduct(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
    if (type === "inc") {
      quantity >= 10 && setQuantity(quantity);
    }
  };

  const handleClick = () => {
    // update cart
    const data = { ...product, quantity, color, size };
    if (currentUser) {
      createCart(dispatch, data, currentUser?._id);
      dispatch(addProduct({ productId: product, quantity, color, size }));
    } else {
      navigate("/login");
    }
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>

          <Desc>{product.desc}</Desc>
          <Desc>ID: {product._id}</Desc>
          <Price>Rs {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c, idx) => (
                <FilterColor
                  color={c}
                  key={c + idx}
                  onClick={() => setColor(c)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>

            <Button onClick={handleClick}>ADD TO CART </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* <NewsLetter /> */}
      <Contact/>
      <Footer />
    </Container>
  );
};

export default Product;
