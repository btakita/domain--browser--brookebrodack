/// <reference lib="dom" />
import { blog_ctx__new } from '@rappstack/domain--any--blog'
import { type wide_ctx_T } from 'ctx-core/be'
export const browser_ctx =
	window.browser_ctx ??= blog_ctx__new()
declare global {
	interface Window {
		browser_ctx:wide_ctx_T<''>
	}
}
