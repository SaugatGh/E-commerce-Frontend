import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../redux/userRedux";
import { removeCart } from "../redux/cartRedux";

const Container = styled.div`
  height: 70px;

  @media only screen and (max-width: 380px) {
    height: 50px;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  /* top and bottom 10px  & left and right 20px */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*  justify-content for horizotal  display */

  @media only screen and (max-width: 380px) {
    padding: 10px 0px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  @media only screen and (max-width: 380px) {
    display: none;
  }
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  /*  align-items for vertical display */
  margin-left: 10px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;

  @media only screen and (max-width: 380px) {
    width: 50px;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  text-decoration: none;
  color: black;
  font-weight: bold;

  @media only screen and (max-width: 380px) {
    font-size: 24px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 380px) {
    flex: 2;
    justify-content: center;
  }
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  @media only screen and (max-width: 380px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Logout = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = () => {
    // Cookies.remove("userId", { path: "/", domain: "localhost" });
    localStorage.clear();
    dispatch(logout());
    dispatch(removeCart());
    navigate("/");
  };

  // --
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
            <Logo>MARCI.</Logo>
          </Link>
        </Center>
        <Right>
          {currentUser && `Hi, ${currentUser.username}`}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
          {!currentUser && (
            <>
              {" "}
              <Link
                to="/register"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                <MenuItem>SIGN IN</MenuItem>
              </Link>{" "}
            </>
          )}

          {currentUser && (
            <Logout>
              <LogoutIcon onClick={handleLogout} />
            </Logout>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
