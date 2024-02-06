/// <reference lib="dom" />
import { blog_ctx__new } from '@rappstack/domain--any--blog'
import { type Ctx_wide_T } from 'ctx-core/be'
export const browser_ctx =
	window.browser_ctx ??= blog_ctx__new()
declare global {
	interface Window {
		browser_ctx:Ctx_wide_T<''>
	}
}
