import { be_, type be_config_T, type Ctx, type Ctx_wide_T } from 'ctx-core/be'
// See https://github.com/gajus/sister/blob/master/src/sister.js
export function hub__new<D>() {
	const ref_a:WeakRef<(data:D)=>unknown>[] = []
	return {
		on(_:(data:D)=>unknown) {
			const ref = new WeakRef(_)
			ref_a.push(ref)
			const off = ()=>{
				const index = ref_a.indexOf(ref)
				if (!~index) {
					ref_a.splice(index, 1)
				}
			}
			off._ = _
			return off
		},
		send(data:D) {
			let i = 0
			for (const ref of ref_a) {
				const _ = ref.deref()
				if (_) {
					_(data)
					++i
				} else {
					ref_a.splice(i, 1)
				}
			}
		}
	} as hub_T<D>
}
export function be_hub_triple_<
	D,
	ns_T extends string = '',
	ctx_T extends Ctx = Ctx_wide_T<ns_T>
>(config?:be_config_T<ns_T>) {
	const hub_ = be_<hub_T<D>, ns_T, ctx_T>(
		()=>hub__new<D>(),
		config)
	return [
		hub_,
		// on
		(ctx:ctx_T, _:(ctx:ctx_T, data:D)=>unknown)=>
			hub_(ctx).on((data:D)=>_(ctx, data)),
		// send
		(ctx:ctx_T, data:D)=>
			hub_(ctx).send(data),
	]
}
export type hub_T<D> = {
	on(_:(data:D)=>unknown):()=>void
	send(data:D):void
}
