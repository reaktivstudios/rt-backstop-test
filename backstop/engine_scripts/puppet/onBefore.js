module.exports = async (page, scenario) => {
	await require('./loadCookies')(page, scenario);
	await require('./interceptImages')(page);
};
