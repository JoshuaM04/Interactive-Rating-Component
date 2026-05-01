import Main from './components/Main.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div className="[ parent_container ] [ flex flex-col justify-center items-center ] [ p-5 ] [ bg-grey-950 ] [ box-sizing ][ min-h-dvh ]">
      <Main />
      <Footer />
    </div>
  )
}