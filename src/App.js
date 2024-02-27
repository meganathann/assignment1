import * as React from "react";
import PrimarySearchAppBar from "./Components/AppBar";
import PersistentDrawerLeft from "./Components/SideBar";
import OrderPage from "./Components/OrderPage"; // Make sure to provide the correct path

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleMenuIconClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <PrimarySearchAppBar onMenuIconClick={handleMenuIconClick} />
      <PersistentDrawerLeft open={isSidebarOpen} />
      {/* Your other components */}
      <OrderPage />
    </div>
  );
}
