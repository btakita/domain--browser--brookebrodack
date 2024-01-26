/// <reference lib="dom" />
import { blog__ctx__new } from '@btakita/domain--any--blog'
import { type Ctx_wide_T } from 'ctx-core/be'
export const browser_ctx =
	window.browser_ctx ??= blog__ctx__new()
declare global {
	interface Window {
		browser_ctx:Ctx_wide_T<''>
	}
}
