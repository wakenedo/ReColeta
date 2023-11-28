import { NavMenuData } from "./Data";

export const NavMenu = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {NavMenuData.map((item) => (
          <li className="nav-item" key={item.id}>
            <a className="nav-link active" aria-current="page" href={item.MenuItemLink}>
              <p className="nav-item-text">
                {item.MenuItemName}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}