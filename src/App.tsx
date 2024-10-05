import { useState } from "react";
import logo from "~/assets/captioned-logo-text.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
    </>
  );
}

function TopBar() {
  // Mock data
  const navItems = [
    {
      name: "Home",
      url: "/",
      visibility: "all"
    },
    {
      name: "Uploads",
      url: "/uploads",
      visibility: "all"
    },
    {
      name: "FAQ",
      url: "/faq",
      visibility: "all"
    }
  ]

  return (
    <div className="h-24 flex items-center px-16">
      <nav className="font-display text-lg flex justify-between w-full">
        <ul className="flex gap-8">
          <li>
            <a href="#">
              <img className="h-auto w-48" src={logo} alt="Captioned logo" />
            </a>
          </li>
          {navItems.map(item => 
            <li>
              <a href={item.url}>{item.name}</a>
            </li>
          )}
        </ul>
        <ul>
          <li>
            <button>Login</button>
            /
            <button>Register</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
