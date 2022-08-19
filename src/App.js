import './_app.scss';
import { Header, Logo, Wigt3, Future, Possibilities, Blog, Register, Footer } from './layout'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Logo />
        <Wigt3 />
        <Future />
        <Possibilities />
        <Register />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
