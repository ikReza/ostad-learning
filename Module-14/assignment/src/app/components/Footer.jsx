const Footer = () => {
  return (
    <footer className="mt-auto bg-transparent text-center border-t border-gray-600 text-sm text-gray-300 py-4">
      <span>{new Date().getFullYear()}</span> © All Rights Reserved
    </footer>
  );
};

export default Footer;
