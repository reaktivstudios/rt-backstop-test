module.exports = async (page, scenario, data) => {
	if (data.isReference && scenario.referenceCustom) {
		scenario.clickSelector = scenario.referenceCustom.clickSelector;
	} else if (scenario.testCustom) {
		scenario.clickSelector = scenario.testCustom.clickSelector;
	}

	const clickSelector = scenario.clickSelectors || scenario.clickSelector;
	
	console.log('clickSelector', clickSelector);

	if (clickSelector) {
		await page.click(clickSelector);
	}
};
