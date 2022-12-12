import NavBar from "./NavBar";

function Header(props) {
  return (
    <NavBar
      navigationTitle={props.navigationTitle}
      user={props.user}
      resetTitle={props.resetTitle}
    />
  );
}

export default Header;
