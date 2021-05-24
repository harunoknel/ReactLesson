import CategoryList from "./components/CategoryList";
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";
import { Container, Row,Col } from "reactstrap";

function App() {
  let productInfo={title:"Ürün Listesi"}
  let categoryInfo={title:"Kategoriler"}
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3"><CategoryList info={categoryInfo}></CategoryList></Col>
          <Col xs="9"><ProductList info={productInfo}></ProductList></Col>
          
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
