import "./Search.css";

function Search() {
	return (
    	<div className="Search">
      		<form>
        		<input
					type="search"
					placeholder="Search"
					className="
						bg-[url('./components/Search/img/search.webp')]
						bg-left-top
						bg-no-repeat
						bg-transparent
						block
						border-[1px]
						border-[rgb(255,255,255,0.6)]
						caret-lightest
						focus:ring-none
						focus:border-azure
						hover:border-white
						hover:outline-none
						invalid:shadow-none
						outline-none
						placeholder:text-[rgb(255,255,255,0.6)]
						pt-4
						pr-4
						pb-4
						pl-16
						resize-none
						rounded-xl
						h-[3.6rem]
						selection:bg-azure
						selection:text-lightest
						text-lightest
						w-[50rem]"
				/>
      		</form>
    	</div>
  	);
}

export default Search;
