module.exports = async (page, scenario, a, b, c, data) => {
	console.log('SCENARIO > ' + scenario.label);  
	await require('./clickAndHoverHelper')(page, scenario, data);
	// add more ready handlers here...
};
