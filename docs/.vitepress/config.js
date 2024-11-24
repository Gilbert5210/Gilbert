export default {
	title: 'Gilbert',// 网站标题
	description: 'vue-cli/二次封装/vue3/axios/多入口打包', //网站描述
	ignoreDeadLinks: true,// 最好加上，构建时会忽略md中的外链
	markdown: {
		// theme: 'material-palenight',//md主题
		lineNumbers: true//md 加行号
	},
	lastUpdated: true,//显示最近更新时间
	appearance: true,//可以选择深浅主题
	
	// 主题配置
	themeConfig: {
		socialLinks: [//右上角图标和链接，icon 可用svg 配置
			{ icon: 'github', link: 'https://github.com/Yinzhuo19970516/vue-template' },
			// { icon: 'slack', link: 'https://juejin.cn/user/1011206428301774' }
		],
		lastUpdatedText: '更新时间',
		siteTitle: 'Gilbert',
		nav: [//右侧导航
			{ text: '首页', link: '/' },
			{ text: '技术沉淀', link: '/technical/index' }
		],
		// 侧边导航
		sidebar: [
			{
				text: '技术沉淀',
				items: [
					{ text: '微前端探索', link: '/technical/micro' },
				]
			}
		],
		outlineTitle: '目录'
	}
}
