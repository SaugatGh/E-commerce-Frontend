import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;

  @media only screen and (max-width: 380px) {
    display: none;
  }
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  /* When we create ul it has it's own margin and padding by default so  we just deleted them with 0,0. */
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  
  @media only screen and (max-width: 380px) {
    background-color: #fff8f8;
  }
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 20%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MARCI.</Logo>
        <Desc>
          There are many variations of passeges of Lorem Ipsum available, but
          the majority have suffered alteration in some form , by injected
          humor, or randomised words which don't look evens slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/" style={{ textDecoration: "none", color: "green" }}>
              {" "}
              Home
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/cart" style={{ textDecoration: "none", color: "green" }}>
              Cart
            </Link>
          </ListItem>

          <ListItem>
            {" "}
            <Link
              to="/products/Men"
              style={{ textDecoration: "none", color: "green" }}
            >
              Man 
            </Link>
          </ListItem>
        
            <ListItem>
            <Link
            to="/products/Women"
            style={{ textDecoration: "none", color: "green" }}
          >
              Women

          </Link>
               </ListItem>
       
            <ListItem>
            <Link
            to="/products/Kids"
            style={{ textDecoration: "none", color: "green" }}
          >
            {" "}
              Kids 
              
          </Link>
              </ListItem>
          <ListItem> Account</ListItem>
          <ListItem>Orders </ListItem>

          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Gangabu ,Kathmandu ,Nepal
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          01-6204668
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          aomine77daiki@gmail.com
        </ContactItem>
        <Payment src="https://omgnepal.com/wp-content/uploads/2020/10/Visa-Electron_Debitvisa-international.png" />
      </Right>
    </Container>
  );
};

export default Footer;
