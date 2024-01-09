// See https://github.com/gajus/youtube-player/blob/main/src/types.js
import { be_ } from 'ctx-core/be'
// import { } from 'youtube-player/dist/types.js'
export const youtube_iframe__script_ = be_(()=>{
	const tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	const script = document.getElementsByTagName('script')[0]
	script.parentNode!.insertBefore(tag, script)
}, { id: 'youtube_iframe__script' })
