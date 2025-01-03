
import "./Header.css";

const Header = () => {
  return (
    <>
    <header className="header">
      <h1>My first React Website</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    </>
  );
};

export default Header;