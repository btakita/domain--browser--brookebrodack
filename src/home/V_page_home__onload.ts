/// <reference lib="dom" />
import { TimelineDefinition } from '@motionone/dom/types/timeline/types'
import { timeline } from 'motion'
export function V_page_home__onload(V_page_home:HTMLDivElement) {
	timeline([
		...h1__tldef_(),
		...h2__tldef_(),
		...cooler_in_space__tldef_(),
		...rock_paper_shoot__tldef_()
	])
	function h1__tldef_():TimelineDefinition {
		return [
			[
				V_page_home.querySelector('h1')!,
				{
					x: ['-100vw', 5, 0],
					y: ['-100vh', -90, -100],
					rotate: [-45, 10, 0],
					opacity: [.2, .5, 1]
				},
				// { duration: 0.5, easing: 'ease' }
				{
					duration: 0.65,
					// easing: [0.3, 0.66, 0.25, 1],
					easing: 'ease-in',
					rotate: {
						duration: .8,
						easing: [.3, .66, .25, 1,],
					}
				}
			]
		]
	}
	function h2__tldef_():TimelineDefinition {
		return [
			[
				V_page_home.querySelector('h2')!,
				{
					x: ['100vw', -5, 0],
					y: ['-100vh', -90, -100],
					rotate: [45, -10, 0],
					opacity: [.2, .5, 1]
				},
				// { duration: 0.5, easing: 'ease' }
				{
					duration: 0.65,
					// easing: [0.3, 0.66, 0.25, 1],
					easing: 'ease-in',
					rotate: {
						duration: .8,
						easing: [.3, .66, .25, 1,],
					}
				}
			]
		]
	}
	function cooler_in_space__tldef_():TimelineDefinition {
		return [
			[
				V_page_home.querySelector('.cooler-in-space')!,
				{
					x: ['-100vw', '-50vw', '25vw'],
					opacity: [0, .5, 1]
				},
				{
					duration: .4
				}
			],
			[
				V_page_home.querySelector('.cooler-in-space')!,
				{
					x: [0, '-100vw'],
				},
				{
					delay: 2,
					duration: .4
				}
			]
		]
	}
	function rock_paper_shoot__tldef_():TimelineDefinition {
		return [
			[
				V_page_home.querySelector('.rock-paper-shoot')!,
				{
					x: ['100vw', '50vw', 'calc(100vw - 100%)'],
					opacity: [0, .5, 1]
				},
				{
					duration: .4
				}
			]
		]
	}
}
