import Dashboard from "./components/Public-Interface";
import SidebarNav from "./components/Sidebar";
  export default function Home() {
    return (
      <div>
        <main>
          <Dashboard/>
          <SidebarNav/>
        </main>
      </div>
    );
  }

