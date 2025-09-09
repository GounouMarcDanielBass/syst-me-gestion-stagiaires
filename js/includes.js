(function includeLoader() {
	function inject(selector, filePath, replaceOuter) {
		fetch(filePath)
			.then(function (response) { return response.text(); })
			.then(function (html) {
				var target = document.querySelector(selector);
				if (!target) { return; }
				if (replaceOuter) {
					target.outerHTML = html;
				} else {
					target.innerHTML = html;
				}
			})
			.catch(function () { /* no-op */ });
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function () {
			inject('header[data-include]', 'includes/header.html', true);
			inject('footer[data-include]', 'includes/footer.html', true);
		});
	} else {
		inject('header[data-include]', 'includes/header.html', true);
		inject('footer[data-include]', 'includes/footer.html', true);
	}
})();


