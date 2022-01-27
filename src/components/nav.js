const NavBar = () => {
  return (
    <nav className="containerDivNav">
      <div className="navDiv">
        <div>
          <a href="/">
            <h2>Chibueze</h2>
          </a>
        </div>
        <div className="navInfo">
          <a
            href="https://github.com/ChibuezeSamObisike"
            target="_blank"
            rel="noreferrer"
          >
            Projects
          </a>
          <a href="https://chibueze.hashnode.dev/" target="__blank">
            Blog
          </a>
          <a href="#skills">My stack</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
