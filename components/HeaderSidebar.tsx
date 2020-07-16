/** @jsx jsx */
import { jsx } from "theme-ui";

const HeaderSidebar: React.FC = ({ children }) => (
  <section
    sx={{
      backgroundColor: "surface",
      borderColor: "#000",
      borderRight: ["none", "1px solid"],
      borderBottom: ["1px solid"],
      flexGrow: 1,
      flexBasis: "sidebar",
    }}
  >
    {children}
  </section>
);

export default HeaderSidebar;
