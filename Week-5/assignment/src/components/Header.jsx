const Header = ({ title }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-700 text-white text-center py-2 font-medium text-lg">
      {title}
    </header>
  );
};

export default Header;
