import styled from "styled-components";
import { categories } from "../Data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
 
  @media only screen and (max-width:380px){
padding:0px;
flex-direction:column;
  }
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;


