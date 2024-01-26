// See https://github.com/gajus/youtube-player/blob/main/src/types.js
import { id_be_memo_pair_ } from 'ctx-core/rmemo'
export const [
	YT$_,
	YT_
] = id_be_memo_pair_<YT_T|undefined>(
	'YT',
	(ctx, YT$)=>{
		if (window.YT) return window.YT
		window.onYouTubeIframeAPIReady = ()=>{
			YT$._ = window.YT
		}
		// const script = script_<'browser'>({
		// 	src: 'https://www.youtube.com/iframe_api'
		// })
		const script = document.createElement('script')
		script.src = 'https://www.youtube.com/iframe_api'
		script.addEventListener('error', err=>{
			console.error('YT load error', err)
		})
		document.head.appendChild(script)
		// attach(document.head, script)
		return YT$.val
	})
declare global {
	interface Window {
		YT:YT_T
		onYouTubeIframeAPIReady?:()=>void
	}
}
// See https://developers.google.com/youtube/player_parameters
export type YT_T = {
	Player:typeof YT_Player
	PlayerState:{
		UNSTARTED:-1
		ENDED:0
		PLAYING:1
		PAUSED:2
		BUFFERING:3
		CUED:5
	}
	get(prop:string):unknown
	loaded:0|1
	loading:0|1
	ready(fn:()=>unknown):void
	scan():void
	setConfig(config:YT_Player_config_T):void
	subscribe(a:unknown, b:unknown, c:unknown):void
	unsubscribe(a:unknown, b:unknown, c:unknown):void
}
export type YT_Player_quality_T = 'small'|'medium'|'large'|'hd720'|'hd1080'|'hires'
export type YT_Player_config_T = {
	events?:{
		onReady?:(evt:{
			target:YT_Player
		})=>unknown
		onStateChange?:(evt:{
			data:YT_PlayerState_val_T
		})=>unknown
		onPlaybackQualityChange?:(evt:{
			data:YT_Player_quality_T
		})=>unknown
		onPlaybackRateChange?:(evt:{
			data:number
		})=>unknown
		onError?:(evt:{
			data:2|5|100|101|150
		})=>unknown
		onApiChange?:()=>unknown
		onAutoplayBlocked?:()=>unknown
	}
	height?:number|string
	playerVars?:{
		accelerometer?:0|1
		autoplay?:0|1
		cc_lang_pref?:string
		cc_load_policy?:0|1
		color?:'red'|'white'
		controls?:0|1
		disablekb?:0|1
		// enablejsapi?:0|1
		end?:number
		fs?:0|1
		hl?:string
		iv_load_policy?:0|1
		list?:'user_uploads'|'playlist'
		loop?:0|1
		origin:string
		playlist?:string
		playsinline?:0|1
		rel?:0|1
		start?:number
		widget_referrer?:string
	}
	videoId?:string
	width?:number|string
}
export type YT_PlayerState_val_T = -1|0|1|2|3|5
export declare class YT_Player {
	constructor(selector:string|Element, config:YT_Player_config_T)
	addEventListener:(event:string, listener:(val:unknown)=>unknown)=>void
	destroy:()=>void
	getAvailablePlaybackRates:()=>readonly number[]
	getAvailableQualityLevels:()=>readonly string[]
	getCurrentTime:()=>number
	getDuration:()=>number
	getIframe:()=>HTMLIFrameElement
	getOption:()=>unknown
	getOptions:()=>unknown
	setOption:()=>void
	setOptions:()=>void
	cuePlaylist:(params:{
		listType:string
		list?:string
		index?:number
		startSeconds?:number
		suggestedQuality?:string
	})=>void
	loadPlaylist:(params:{
		listType:string
		list?:string
		index?:number
		startSeconds?:number
		suggestedQuality?:string
	})=>void
	getPlaylist:()=>readonly string[]
	getPlaylistIndex:()=>number
	getPlaybackQuality:()=>string
	getPlaybackRate:()=>number
	getPlayerState:()=>YT_PlayerState_val_T
	getVideoEmbedCode:()=>string
	getVideoLoadedFraction:()=>number
	getVideoUrl:()=>string
	getVolume:()=>number
	cueVideoById:(params:{
		videoId:string
		startSeconds?:number
		endSeconds?:number
		suggestedQuality?:string
	})=>void
	cueVideoByUrl:(params:{
		mediaContentUrl:string
		startSeconds?:number
		endSeconds?:number
		suggestedQuality?:string
	})=>void
	loadVideoByUrl:(params:{
		mediaContentUrl:string
		startSeconds?:number
		endSeconds?:number
		suggestedQuality?:string
	})=>void
	loadVideoById:(params:{
		videoId:string
		startSeconds?:number
		endSeconds?:number
		suggestedQuality?:string
	})=>void
	isMuted:()=>boolean
	mute:()=>void
	playVideo:()=>void
	nextVideo:()=>void
	pauseVideo:()=>void
	playVideoAt:(index:number)=>void
	previousVideo:()=>void
	removeEventListener:(event:string, listener:(val:unknown)=>unknown)=>void
	seekTo:(seconds:number, allowSeekAhead:boolean)=>void
	setLoop:(loopPlaylists:boolean)=>void
	setPlaybackQuality:(suggestedQuality:string)=>void
	setPlaybackRate:(suggestedRate:number)=>void
	setShuffle:(shufflePlaylist:boolean)=>void
	setSize:(width:number, height:number)=>object
	setVolume:(volume:number)=>void
	stopVideo:()=>void
	unMute:()=>void
	getSphericalProperties:()=>{
		fov:number
		yaw:number
		pitch:number
		roll:number
		enableOrientationSensor:boolean
	}
	setSphericalProperties:(properties:{
		fov?:number
		yaw?:number
		pitch?:number
		roll?:number
		enableOrientationSensor?:boolean
	})=>void
}
