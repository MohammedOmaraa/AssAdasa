import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const navLinks = [
    { path: "/", name: "الرئيسية" },
    { path: "/blog", name: "المدونة" },
    { path: "/aboutus", name: "من نحن" },
  ];
  return (
    <>
      <nav className="sticky top-0 bg-gray-600 ">
        <div className="container px-10 mx-auto flex justify-between items-center ">
          <div className="logo flex items-center">
            <img
              src={logo}
              alt=""
              className="w-14 hover:scale-110 transition-transform"
            />
            <div className="logotext flex flex-col">
              <h1>عدسة</h1>
              <h5>عالم التصوير الفوتوغرافي</h5>
            </div>
          </div>
          <ul className="flex gap-3">
            {navLinks.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-gray-400 hover:text-white rounded-full p-2  ${isActive && "bg-orange-500 text-white"}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="btns">
            <button className="main-btn !rounded-full !px-4">
              ابدأ القراءة
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
