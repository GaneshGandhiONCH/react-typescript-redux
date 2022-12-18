import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { Props } from "./context/products-context";


// Root element, uses a non-null assertion at the end for guarding
const rootElement : HTMLElement = document.getElementById("root")!;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Props>
    <BrowserRouter basename="/react-typescript-redux">
      <App />
    </BrowserRouter>
  </Props>
);
