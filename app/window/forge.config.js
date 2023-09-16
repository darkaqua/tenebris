module.exports = {
	packagerConfig: {
		asar: true,
		icon: '/assets/icon', // no file extension required
		name: 'voidpixel',
		executableName: 'voidpixel',
		extraResource: ['./resources/services.js'],
	},
	rebuildConfig: {},
	plugins: [
		{
			name: '@electron-forge/plugin-auto-unpack-natives',
			config: {},
		},
		{
			name: '@electron-forge/plugin-webpack',
			config: {
				mainConfig: './webpack.main.config.js',
				renderer: {
					config: './webpack.renderer.config.js',
					entryPoints: [
						{
							html: './src/index.html',
							js: './src/renderer.js',
							name: 'main_window',
							preload: {
								js: './src/preload.ts',
							},
						},
					],
				},
			},
		},
	],
	makers: [
		{
			name: '@electron-forge/maker-dmg',
			config: {
				// background: '',
				format: 'UDZO',
			},
		},
		{
			name: '@electron-forge/maker-deb',
			config: {
				options: {
					maintainer: 'pagoru',
					homepage: 'https://voidpixel.net',
					icon: 'assets/icon.png',
				},
			},
		},
		{
			name: '@electron-forge/maker-squirrel',
			config: {
				// certificateFile: './cert.pfx',
				// certificatePassword: 'this-is-a-secret'
			},
		},
	],
	publishers: [
		{
			name: '@electron-forge/publisher-github',
			config: {
				repository: {
					owner: 'voidpixel',
					name: 'game',
				},
				prerelease: true,
			},
		},
	],
};
