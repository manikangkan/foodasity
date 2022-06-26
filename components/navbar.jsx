const Navbar = () => {
  return (
    <nav className="bg-amber-900 flex items-center justify-between px-64 py-4">
      <div>
        <p className="text-white font-medium">foodasity</p>
      </div>
      <div className="space-x-4">
        <button className="py-2 px-4 border border-transparent rounded-sm text-white text-sm font-medium">
          Login
        </button>
        <button className="py-2 px-4 border border-white rounded-sm text-white text-sm font-medium">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
