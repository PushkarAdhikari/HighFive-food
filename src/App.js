import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='mt-40 full-height'>
        <Body />
      </main>
      <Footer />
    </>
  );
}

export default App;
