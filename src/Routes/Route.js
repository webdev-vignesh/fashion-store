
import { Routes, Route } from 'react-router-dom';
import HomePage from '../container/Home';
import ShopPage from '../container/Shop';
import CartPage from '../container/Cart';
import ProfilePage from '../container/Profile';
import WishListPage from '../container/WishList';

export default function AllRoute() {
    return(
        <Routes>
            <Route path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/cart' component={CartPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/wish-list' component={WishListPage} />
        </Routes>
    )
}