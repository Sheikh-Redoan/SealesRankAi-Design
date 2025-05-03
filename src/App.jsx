import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import AiCoach from './components/AiCoach/AiCoach'
import Courses from './components/Courses/Courses'
import FAQ from './components/FAQ/FAQ'
import Review from './components/Review/Review'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar className={'absolute max-md:fixed top-0 w-full max-md:bg-white z-[9999]'}></Navbar>
    <Banner></Banner>
     <AiCoach></AiCoach>
     <Courses></Courses>
     <FAQ></FAQ>
     <Review></Review>
     <Footer></Footer>
    </>
  )
}

export default App
