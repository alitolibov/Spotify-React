import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Main from "./components/Main";


function App() {



	return (
		
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index path="/" element={<Main/>}/>
				</Route>
			</Routes>
		</div>
	)
}

export default App;