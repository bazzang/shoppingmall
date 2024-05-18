import './css/menu.css';
import { SideMenu } from './container/sideMenu';
import { Header } from './container/header';
import { Main } from './container/main';
import { Footer } from './container/footer';
function App() {
  return (
    <div className="wrap">
      <Header />
      <SideMenu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
