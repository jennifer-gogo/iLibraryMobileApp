{
	"_Name": "iLibrary",
	"Version": "/iLibrary/Globals/AppDefinition_Version.global",
	"MainPage": "/iLibrary/Pages/Main.page",
	"OnLaunch": [
		"/iLibrary/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/iLibrary/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/iLibrary/Actions/Service/InitializeOffline.action",
	"Styles": "/iLibrary/Styles/Styles.less",
	"Localization": "/iLibrary/i18n/i18n.properties"
}
