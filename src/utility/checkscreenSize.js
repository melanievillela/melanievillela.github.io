const checkscreenSize = () => {
	let width = window.screen.width;
	let mobilerows = document.querySelectorAll(".mobile");

	if (width <= 450) {
		let rows = document.querySelectorAll("div.flexRow");

		rows.forEach(row => {
			row.classList.remove("flexRow");
			row.classList.add("flexCol");
		});
		mobilerows.forEach(mobilerow => {
			mobilerow.classList.remove("flexRowR");
			mobilerow.classList.add("flexRowL");
		});
	} else {
		let cols = document.querySelectorAll("div.flexCol");
		let summaries = document.querySelectorAll(".summaryStyles");

		mobilerows.forEach(mobilerow => {
			mobilerow.classList.add("flexRowR");
			mobilerow.classList.remove("flexRowL");
		});
		cols.forEach(col => {
			col.classList.add("flexRow");
			col.classList.remove("flexCol");
		});
		summaries.forEach(summary => {
			summary.classList.add("flexCol");
			summary.classList.remove("flexRow");
		});
	}
}
    
export default checkscreenSize;