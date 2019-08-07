const doThisFirst = () => {
	return new Promise((resolve) => {
		setTimeout(() => resolve("I am First\n"), 2000);
	});
};

const secondWaitingForFirst = async () => {
	const first = await doThisFirst();
	return first + "I am Second\n";
};

const finalCall = async () => {
	const second = await secondWaitingForFirst();
	return second + "I am Last";
};

finalCall().then((res) => {
	console.log(res);
});
