chrome.runtime.onInstalled.addListener((details) => {
	const reason = details.reason;
	switch (reason) {
		case 'update':
			//detect extension update
			break;
		case 'browser_update':
			//detect chrome update
			break;
	}
});
