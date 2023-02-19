import "./App.css"
import Header from "./container/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductListing from "./container/ProductListing"
import ProductDetail from "./container/ProductDetail"

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' exact element={<ProductListing />} />
					<Route
						path='/product/:productId'
						exact
						element={<ProductDetail />}
					/>
					<Route>404 Not found!</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
