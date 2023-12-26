/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"edu/p1_sap_walkthrough/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
