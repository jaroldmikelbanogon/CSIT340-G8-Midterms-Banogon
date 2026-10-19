
import SideBar from './components/Sidebar'
import Guide from './components/Guide'
import Docs from './components/Docs';
function App() {
  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <SideBar author="Jarold Mikel Banogson"/>
      <div className="flex items-end justify-between px-20 pt-10">
        <Docs />
      </div>
      <Guide />
    </div>
  );
}

export default App;