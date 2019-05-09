export const LOCALSTORAGE = (ls => {
	if (!ls) return;

	const isActive = "localStorage" in ls;

	const set = (key, value) => {
		try {
			const state = JSON.stringify(value);
			localStorage.setItem(key, state);
		} catch (err) {
			console.error("error: ", err);
		}
	};

	const get = key => {
		try {
			const state = localStorage.getItem(key);

			return state === null
				? undefined
				: JSON.parse(state);
		} catch (err) {
			console.error("error: ", err);
		}
	};
	const remove = key => {
		try {
			localStorage.removeItem(key);
		} catch (err) {
			console.error("error: ", err);
		}
	};

	const publicAPI = {
		isActive,
		get,
		set,
		remove
	};

	return publicAPI;
})(window);