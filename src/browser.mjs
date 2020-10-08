import './webcrypto-shim.mjs'

const ctx = (typeof window === "undefined") ? self : window
export default ctx.crypto
