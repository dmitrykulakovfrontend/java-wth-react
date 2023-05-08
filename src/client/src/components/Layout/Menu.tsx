// import useLayout from "@/contexts/useLayout";

import ChartBarIcon from "@/assets/images/icons/chart-bar.svg";
import ChartBarSquareIcon from "@/assets/images/icons/chart-square-bar.svg";
import { NavLink } from "react-router-dom";

function Menu() {
  // const { setLayout, layout } = useLayout();

  const links = [
    {
      header: "Аналитика",
      submenu: [
        {
          href: "/",
          icon: <ChartBarIcon />,
          title: "Общий рейтинг",
        },
      ],
    },
    {
      header: "Тех-поддержка",
      submenu: [
        {
          href: "/contacts",
          icon: <ChartBarIcon />,
          title: "Контакты",
        },
        {
          href: "/about",
          icon: <ChartBarSquareIcon />,
          title: "О нас",
        },
      ],
    },
  ];

  // const isMenuOpen = `${layout.isMenuOpen ? "left-0" : "-left-full"}`;
  const LinkClassName = `flex items-center gap-2  hover:cursor-pointer  transition-all text-sm`;

  return (
    <div
      className={`transition-all duration-300 min-w-[250px] flex flex-col items-center p-4 ml-24`}
    >
      <nav className="w-full mt-4 text-lg">
        <ul>
          {links.map(({ header, submenu }, i) => (
            <li key={i}>
              <span className="tracking-[1px] uppercase text-gray-400 text-xs">
                {header}
              </span>
              <ul className="flex flex-col gap-4 mt-4">
                {submenu.map(({ href, title, icon }, i) => (
                  <li key={i}>
                    <NavLink
                      to={href}
                      className={({ isActive }) =>
                        isActive
                          ? `${LinkClassName} text-green-500`
                          : `${LinkClassName}`
                      }
                    >
                      {icon}
                      {title}
                    </NavLink>
                  </li>
                ))}
                <li></li>
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
