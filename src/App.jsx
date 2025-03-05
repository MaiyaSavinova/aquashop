import { Routes, Route, Link } from "react-router-dom";
import {
  About,
  AddProduct,
  Auth,
  Basket,
  Delivery,
  Home,
  Products,
  Profile,
  SingleProduct
} from "./pages";

function App() {
  return <>
    <ul className="menu">
      <li><Link to="/">Главная</Link></li>
      <li><Link to="/products">Каталог</Link>
        <ul>
          <li><Link to="/products/category/fish">Аквариумные рыбки</Link></li>
          <li><Link to="/products/category/equipment">Аквариумное борудование</Link></li>
          <li><Link to="/products/category/food">Корм для рыб</Link></li>
          <li><Link to="/products/favorites">Избранное</Link></li>
        </ul>
      </li>
      <li><Link to="/product/barbus">Барбус</Link></li>
      <li><Link to="/product/add">Добавить товар</Link></li>
      <li><Link to="/basket">Корзина</Link></li>
      <li><Link to="/profile">Личный кабинет</Link></li>
      <li><Link to="/auth">Войти</Link></li>
      <li><Link to="/delivery">Доставка</Link></li>
      <li><Link to="/about">О магазине</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/category/:name" element={<Products isCat={true} />} />
      <Route path="/products/favorites" element={<Products isFav={true} />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/product/add" element={<AddProduct />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/about" element={<About />} />
    </Routes>

  </>
}

export default App;
