import "../App.css"
import Marketplace from "../Layout/Marketplace";
import Navbar from "../Layout/Navbar";
import { Theme, Flex } from "@radix-ui/themes";

function App() {
  return (
    <Theme appearance="dark" className="px-10 py-4">
      <Flex direction="column" gap="8">
        <Navbar />
        <Marketplace />
      </Flex>
    </Theme>
  );
}

export default App;
