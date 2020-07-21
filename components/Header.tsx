/** @jsx jsx */
import { jsx } from "theme-ui";
import HeaderSidebar from "./HeaderSidebar";
import HeaderContent from "./HeaderContent";
import Branding from "./Branding";

const Header: React.FC = () => (
  <header
    sx={{
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      zIndex: 200,
    }}
  >
    <HeaderSidebar>
      <Branding />
    </HeaderSidebar>
    <HeaderContent />
  </header>
);

export default Header;
