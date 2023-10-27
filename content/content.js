class IframeManager {
	constructor() {
		this.mainBox = document.createElement('div');
		this.mainBox.className = 'unlock--iCenter';
		this.mainBox.style.width = 'max-content';

		let insertButton = this.createButton('Insert', 'unlock--iButton');
		insertButton.addEventListener('click', this.createIframe.bind(this));

		document.addEventListener('keydown', this.handleKeyDown.bind(this));

		chrome.runtime.onMessage.addListener(
			this.handleChromeMessages.bind(this)
		);
		console.log(this.mainBox);
		this.mainBox.appendChild(insertButton);
		document.body.appendChild(this.mainBox);
		window.removeEventListener('contextmenu', null, true);
		document.body.focus();
	}

	createButton(text, className) {
		const button = document.createElement('button');
		button.innerText = text;
		button.className = className;
		return button;
	}

	createIframe() {
		const iframeDiv = document.createElement('div');
		iframeDiv.className = 'unlock--iCenter unlock--iDiv';
		const customIframe = document.createElement('iframe');
		customIframe.className = 'unlock--iFrame';
		customIframe.src = 'https://www.google.com/search?igu=1';
		customIframe.width = '90%';
		customIframe.height = '300';
		customIframe.style.display = 'flex';
		customIframe.style.flexDirection = 'column';

		const iframeRemove = this.createButton(
			'Remove Iframe',
			'unlock--iButton'
		);
		iframeRemove.addEventListener('click', () => {
			iframeDiv.remove();
		});

		iframeDiv.appendChild(iframeRemove);
		iframeDiv.appendChild(customIframe);
		this.mainBox.appendChild(iframeDiv);
		document.body.focus();
	}

	handleKeyDown(event) {
		if (event.altKey) {
			switch (event.keyCode) {
				case 79:
					this.createIframe();
					break;
				case 76:
					this.removeDivs();
					break;
				case 66:
					this.buttonDisplay();
					break;
				case 81:
					if (event.ctrlKey && event.shiftKey) {
						mainBox.remove();
					}
					break;
			}
		}
	}

	handleChromeMessages(request) {
		switch (request.message) {
			case 'displayGoogle':
				this.createIframe();
				break;
			case 'modifyButtonDisplay':
				this.buttonDisplay();
				break;
			case 'emergencyDestroy':
				mainBox.remove();
				break;
			case 'restartExt':
				document.body.appendChild(mainBox);
				break;
		}
	}

	removeDivs() {
		const iframeDivs = document.getElementsByClassName('unlock--iDiv');
		for (let i = 0; i < iframeDivs.length; i++) {
			iframeDivs[i].remove();
		}
		document.body.focus();
	}

	buttonDisplay() {
		const buttons = document.querySelectorAll('.unlock--iButton');
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.toggle('hidden');
		}
		document.body.focus();
	}
}

/*
⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉
*/
document.onload = new IframeManager();
