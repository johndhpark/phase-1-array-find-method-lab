// code your solution here

function superbowlWin(records) {
	const latest = records.find((records) => records.result === "W");

	if (latest === undefined) return undefined;

	return latest.year;
}
