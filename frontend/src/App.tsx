
import MainLayout from './components/MainLayout'
import './index.css'
import "./App.css"
import Article from './components/Article'

function App() {

  return (
    <>
      <div className='h-screen w-screen bg-slate-50 font-mukta' >
        <MainLayout>
         <Article />
        </MainLayout>
      
       </div>
    </>
  )
}

export default App
