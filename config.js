// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Kate',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'ec9d378452ddbf87cfbf295f952413e1', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '32.609857',
	defaultLongitude: '-85.4807825',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Canvas',
			icon: 'book-open-check',
			link: 'https://auburn.instructure.com/?login_success=1',
		},
		{
			id: '2',
			name: 'Outlook',
			icon: 'at-sign',
			link: 'https://outlook.office.com/mail/inbox/id/AAQkADNlOWM1MWEwLWE0MjctNDAzNC1hNjdkLWJjNzJiMTdjOWM0ZAAQAMsR%2Boj3ezdLg6R0nILenwY%3D',
		},
		{
			id: '3',
			name: 'Box',
			icon: 'package-open',
			link: 'https://auburn.app.box.com/collections',
		},
		{
			id: '4',
			name: 'AU Access',
			icon: 'graduation-cap',
			link: 'https://experience.elluciancloud.com/auburn/',
		},
		{
			id: '5',
			name: 'Calendar',
			icon: 'calendar-days',
			link: 'https://outlook.office.com/calendar/view/workweek',
		},
		{
			id: '6',
			name: 'Loop',
			icon: 'square-chart-gantt',
			link: 'https://outlook.office.com/host/4a6520d6-94a8-4730-9184-24997b9b3401/auth',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'school',
			id: '1',
			links: [
				{
					name: 'LinkedIn',
					link: 'https://www.linkedin.com/feed/',
				},
				{
					name: 'Google Drive',
					link: 'https://drive.google.com/drive/u/0/my-drive',
				},
				{
					name: 'Remote Computer',
					link: 'https://rdp.eng.auburn.edu/',
				},
				{
					name: 'Claude',
					link: 'https://claude.ai/new',
				},
			],
		},
		{
			icon: 'user',
			id: '2',
			links: [
				{
					name: 'Gmail',
					link: 'https://mail.google.com/mail/u/1/#inbox',
				},
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'ERA Online',
					link: 'https://eraonline.odoo.com/',
				},
				{
					name: '34 Portal',
					link: 'https://www.club34.net/portal/#/auth/login',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
