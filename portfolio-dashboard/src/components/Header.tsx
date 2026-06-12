type HeaderProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

function Header({
  darkMode,
  toggleTheme,
}: HeaderProps) {
  return (
    <header className="header">
      <h1>My Portfolio</h1>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Header;