import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  /*  Absolute makes the position of top-bottom files same goes one position. */
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  /*  Transition make it littler slower which means ease that is done with 0.5s */

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    /*  Transform scale make the image 1 little bit bigger wehen we hover over there with the hover  */
  }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />

      <Image src={item.img} />
      <Info>
        {/* <Icon>
          <ShoppingCartOutlined />
        </Icon> */}
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        {/* <Icon>
          <FavoriteOutlinedIcon />
        </Icon> */}
      </Info>
    </Container>
  );
};

export default Product;
