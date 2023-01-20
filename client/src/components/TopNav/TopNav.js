import Search from "../Search/Search";
// import "./TopNav.css";

function TopNav() {
  return (
    <div
		className="
			items-center
			bg-dark
			flex
			flex-row
			flex-nowrap
			h-[6.4rem]
			justify-center
			w-screen"
	>
      <Search />
    </div>
  );
}

export default TopNav;
