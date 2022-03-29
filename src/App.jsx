import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/navigation/Navigation'
import WelcomeContainer from './containers/welcome/WelcomeContainer'
import SignupContainer from './containers/auth/SignupContainer'
import LoginContainer from './containers/auth/LoginContainer'
import DashboardContainer from './containers/dashboard/DashboardContainer'

function App() {
	const location = useLocation()

	return (
		<div className='grid h-screen grid-cols-7 grid-rows-[3rem_1fr] gap-1 px-4 py-2 App bg-blue-dark xl:px-6 xl:py-4 xl:gap-2 overflow-hidden'>
			<Navigation />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path='/' exact element={<WelcomeContainer />} />
					<Route path='/sign-up' element={<SignupContainer />} />
					<Route path='/login' element={<LoginContainer />} />
					<Route
						path='/dashboard'
						exact
						element={<DashboardContainer />}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	)
}

export default App
