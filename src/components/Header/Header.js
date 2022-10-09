import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>

      {props.isLogged && (
        <button onClick={props.onLogOut} className="header__btn" type="button">
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
