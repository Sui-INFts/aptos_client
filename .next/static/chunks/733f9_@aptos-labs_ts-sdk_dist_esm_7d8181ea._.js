(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IF4UU2MT.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>s)
});
var s = class extends Error {
    constructor(e, i){
        super(e), this.invalidReason = i;
    }
};
;
 //# sourceMappingURL=chunk-IF4UU2MT.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>u),
    "b": (()=>a),
    "c": (()=>l)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IF4UU2MT.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
;
;
var u = ((n)=>(n.TOO_SHORT = "too_short", n.INVALID_LENGTH = "invalid_length", n.INVALID_HEX_CHARS = "invalid_hex_chars", n))(u || {}), a = class e {
    constructor(t){
        this.data = t;
    }
    toUint8Array() {
        return this.data;
    }
    toStringWithoutPrefix() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data);
    }
    toString() {
        return `0x${this.toStringWithoutPrefix()}`;
    }
    static fromHexString(t) {
        let r = t;
        if (r.startsWith("0x") && (r = r.slice(2)), r.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Hex string is too short, must be at least 1 char long, excluding the optional leading 0x.", "too_short");
        if (r.length % 2 !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Hex string must be an even number of hex characters.", "invalid_length");
        try {
            return new e((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(r));
        } catch (n) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`Hex string contains invalid hex characters: ${n?.message}`, "invalid_hex_chars");
        }
    }
    static fromHexInput(t) {
        return t instanceof Uint8Array ? new e(t) : e.fromHexString(t);
    }
    static hexInputToUint8Array(t) {
        return t instanceof Uint8Array ? t : e.fromHexString(t).toUint8Array();
    }
    static hexInputToString(t) {
        return e.fromHexInput(t).toString();
    }
    static hexInputToStringWithoutPrefix(t) {
        return e.fromHexInput(t).toStringWithoutPrefix();
    }
    static isValid(t) {
        try {
            return e.fromHexString(t), {
                valid: !0
            };
        } catch (r) {
            return {
                valid: !1,
                invalidReason: r?.invalidReason,
                invalidReasonMessage: r?.message
            };
        }
    }
    equals(t) {
        return this.data.length !== t.data.length ? !1 : this.data.every((r, n)=>r === t.data[n]);
    }
}, l = (e)=>new TextDecoder().decode(a.fromHexInput(e).toUint8Array());
;
 //# sourceMappingURL=chunk-STY74NUA.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t),
    "b": (()=>n),
    "c": (()=>U),
    "d": (()=>_),
    "e": (()=>o),
    "f": (()=>i)
});
var t = 255, n = 65535, U = 4294967295, _ = 18446744073709551615n, o = 340282366920938463463374607431768211455n, i = 115792089237316195423570985008687907853269984665640564039457584007913129639935n;
;
 //# sourceMappingURL=chunk-56CNRT2K.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KDMSOCZY.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>j)
});
var h = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j = (g, b, d, c)=>{
    for(var a = c > 1 ? void 0 : c ? i(b, d) : b, e = g.length - 1, f; e >= 0; e--)(f = g[e]) && (a = (c ? f(b, d, a) : f(a)) || a);
    return c && a && h(b, d, a), a;
};
;
 //# sourceMappingURL=chunk-KDMSOCZY.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>B),
    "b": (()=>n),
    "c": (()=>p),
    "d": (()=>A),
    "e": (()=>z)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KDMSOCZY.mjs [app-client] (ecmascript)");
;
;
;
var B = class {
    bcsToBytes() {
        let e = new n;
        return this.serialize(e), e.toUint8Array();
    }
    bcsToHex() {
        let e = this.bcsToBytes();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
    }
    toStringWithoutPrefix() {
        return this.bcsToHex().toStringWithoutPrefix();
    }
    toString() {
        return `0x${this.toStringWithoutPrefix()}`;
    }
}, n = class {
    constructor(e = 64){
        if (e <= 0) throw new Error("Length needs to be greater than 0");
        this.buffer = new ArrayBuffer(e), this.offset = 0;
    }
    ensureBufferWillHandleSize(e) {
        for(; this.buffer.byteLength < this.offset + e;){
            let t = new ArrayBuffer(this.buffer.byteLength * 2);
            new Uint8Array(t).set(new Uint8Array(this.buffer)), this.buffer = t;
        }
    }
    appendToBuffer(e) {
        this.ensureBufferWillHandleSize(e.length), new Uint8Array(this.buffer, this.offset).set(e), this.offset += e.length;
    }
    serializeWithFunction(e, t, i) {
        this.ensureBufferWillHandleSize(t);
        let a = new DataView(this.buffer, this.offset);
        e.apply(a, [
            0,
            i,
            !0
        ]), this.offset += t;
    }
    serializeStr(e) {
        let t = new TextEncoder;
        this.serializeBytes(t.encode(e));
    }
    serializeBytes(e) {
        this.serializeU32AsUleb128(e.length), this.appendToBuffer(e);
    }
    serializeFixedBytes(e) {
        this.appendToBuffer(e);
    }
    serializeBool(e) {
        p(e);
        let t = e ? 1 : 0;
        this.appendToBuffer(new Uint8Array([
            t
        ]));
    }
    serializeU8(e) {
        this.appendToBuffer(new Uint8Array([
            e
        ]));
    }
    serializeU16(e) {
        this.serializeWithFunction(DataView.prototype.setUint16, 2, e);
    }
    serializeU32(e) {
        this.serializeWithFunction(DataView.prototype.setUint32, 4, e);
    }
    serializeU64(e) {
        let t = BigInt(e) & BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]), i = BigInt(e) >> BigInt(32);
        this.serializeU32(Number(t)), this.serializeU32(Number(i));
    }
    serializeU128(e) {
        let t = BigInt(e) & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"], i = BigInt(e) >> BigInt(64);
        this.serializeU64(t), this.serializeU64(i);
    }
    serializeU256(e) {
        let t = BigInt(e) & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"], i = BigInt(e) >> BigInt(128);
        this.serializeU128(t), this.serializeU128(i);
    }
    serializeU32AsUleb128(e) {
        let t = e, i = [];
        for(; t >>> 7;)i.push(t & 127 | 128), t >>>= 7;
        i.push(t), this.appendToBuffer(new Uint8Array(i));
    }
    toUint8Array() {
        return new Uint8Array(this.buffer).slice(0, this.offset);
    }
    serialize(e) {
        e.serialize(this);
    }
    serializeVector(e) {
        this.serializeU32AsUleb128(e.length), e.forEach((t)=>{
            t.serialize(this);
        });
    }
    serializeOption(e, t) {
        let i = e !== void 0;
        this.serializeBool(i), i && (typeof e == "string" ? this.serializeStr(e) : e instanceof Uint8Array ? t !== void 0 ? this.serializeFixedBytes(e) : this.serializeBytes(e) : e.serialize(this));
    }
    serializeOptionStr(e) {
        e === void 0 ? this.serializeU32AsUleb128(0) : (this.serializeU32AsUleb128(1), this.serializeStr(e));
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
], n.prototype, "serializeU8", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])
], n.prototype, "serializeU16", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])
], n.prototype, "serializeU32", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])
], n.prototype, "serializeU64", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])
], n.prototype, "serializeU128", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])
], n.prototype, "serializeU256", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])
], n.prototype, "serializeU32AsUleb128", 1);
function p(r) {
    if (typeof r != "boolean") throw new Error(`${r} is not a boolean value`);
}
var A = (r, e, t)=>`${r} is out of range: [${e}, ${t}]`;
function z(r, e, t) {
    let i = BigInt(r);
    if (i > BigInt(t) || i < BigInt(e)) throw new Error(A(r, e, t));
}
function o(r, e) {
    return (t, i, a)=>{
        let g = a.value;
        return a.value = function(u) {
            return z(u, r, e), g.apply(this, [
                u
            ]);
        }, a;
    };
}
;
 //# sourceMappingURL=chunk-EBMEXURY.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>u),
    "b": (()=>l)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IF4UU2MT.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
;
;
;
var u = ((s)=>(s.INCORRECT_NUMBER_OF_BYTES = "incorrect_number_of_bytes", s.INVALID_HEX_CHARS = "invalid_hex_chars", s.TOO_SHORT = "too_short", s.TOO_LONG = "too_long", s.LEADING_ZERO_X_REQUIRED = "leading_zero_x_required", s.LONG_FORM_REQUIRED_UNLESS_SPECIAL = "long_form_required_unless_special", s.INVALID_PADDING_ZEROES = "INVALID_PADDING_ZEROES", s.INVALID_PADDING_STRICTNESS = "INVALID_PADDING_STRICTNESS", s))(u || {}), e = class e extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t){
        if (super(), t.length !== e.LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("AccountAddress data should be exactly 32 bytes long", "incorrect_number_of_bytes");
        this.data = t;
    }
    isSpecial() {
        return this.data.slice(0, this.data.length - 1).every((t)=>t === 0) && this.data[this.data.length - 1] < 16;
    }
    toString() {
        return `0x${this.toStringWithoutPrefix()}`;
    }
    toStringWithoutPrefix() {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data);
        return this.isSpecial() && (t = t[t.length - 1]), t;
    }
    toStringLong() {
        return `0x${this.toStringLongWithoutPrefix()}`;
    }
    toStringLongWithoutPrefix() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data);
    }
    toStringShort() {
        return `0x${this.toStringShortWithoutPrefix()}`;
    }
    toStringShortWithoutPrefix() {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data).replace(/^0+/, "");
        return t === "" ? "0" : t;
    }
    toUint8Array() {
        return this.data;
    }
    serialize(t) {
        t.serializeFixedBytes(this.data);
    }
    serializeForEntryFunction(t) {
        let r = this.bcsToBytes();
        t.serializeBytes(r);
    }
    serializeForScriptFunction(t) {
        t.serializeU32AsUleb128(3), t.serialize(this);
    }
    static deserialize(t) {
        let r = t.deserializeFixedBytes(e.LENGTH);
        return new e(r);
    }
    static fromStringStrict(t) {
        if (!t.startsWith("0x")) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Hex string must start with a leading 0x.", "leading_zero_x_required");
        let r = e.fromString(t);
        if (t.length !== e.LONG_STRING_LENGTH + 2) if (r.isSpecial()) {
            if (t.length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`The given hex string ${t} is a special address not in LONG form, it must be 0x0 to 0xf without padding zeroes.`, "INVALID_PADDING_ZEROES");
        } else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`The given hex string ${t} is not a special address, it must be represented as 0x + 64 chars.`, "long_form_required_unless_special");
        return r;
    }
    static fromString(t, { maxMissingChars: r = 4 } = {}) {
        let n = t;
        if (t.startsWith("0x") && (n = t.slice(2)), n.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Hex string is too short, must be 1 to 64 chars long, excluding the leading 0x.", "too_short");
        if (n.length > 64) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Hex string is too long, must be 1 to 64 chars long, excluding the leading 0x.", "too_long");
        if (r > 63 || r < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`maxMissingChars must be between or equal to 0 and 63. Received ${r}`, "INVALID_PADDING_STRICTNESS");
        let o;
        try {
            o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(n.padStart(64, "0"));
        } catch (h) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`Hex characters are invalid: ${h?.message}`, "invalid_hex_chars");
        }
        let d = new e(o);
        if (n.length < 64 - r && !d.isSpecial()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`Hex string is too short, must be ${64 - r} to 64 chars long, excluding the leading 0x. You may need to fix 
the addresss by padding it with 0s before passing it to \`fromString\` (e.g. <addressString>.padStart(64, '0')). 
Received ${t}`, "too_short");
        return d;
    }
    static from(t, { maxMissingChars: r = 4 } = {}) {
        return typeof t == "string" ? e.fromString(t, {
            maxMissingChars: r
        }) : t instanceof Uint8Array ? new e(t) : t;
    }
    static fromStrict(t) {
        return typeof t == "string" ? e.fromStringStrict(t) : t instanceof Uint8Array ? new e(t) : t;
    }
    static isValid(t) {
        try {
            return t.strict ? e.fromStrict(t.input) : e.from(t.input), {
                valid: !0
            };
        } catch (r) {
            return {
                valid: !1,
                invalidReason: r?.invalidReason,
                invalidReasonMessage: r?.message
            };
        }
    }
    equals(t) {
        return this.data.length !== t.data.length ? !1 : this.data.every((r, n)=>r === t.data[n]);
    }
};
e.LENGTH = 32, e.LONG_STRING_LENGTH = 64, e.ZERO = e.from("0x0"), e.ONE = e.from("0x1"), e.TWO = e.from("0x2"), e.THREE = e.from("0x3"), e.FOUR = e.from("0x4"), e.A = e.from("0xA");
var l = e;
;
 //# sourceMappingURL=chunk-RGKRCZ36.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ORMOQWWH.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>U),
    "b": (()=>p),
    "c": (()=>b),
    "d": (()=>y),
    "e": (()=>m),
    "f": (()=>B),
    "g": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
;
;
var U = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(e), this.value = e;
    }
    serialize(e) {
        e.serializeBool(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(5), e.serialize(this);
    }
    deserialize(e) {
        return new a(e.deserializeU256());
    }
    static deserialize(e) {
        return new i(e.deserializeBool());
    }
}, p = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]), this.value = e;
    }
    serialize(e) {
        e.serializeU8(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(0), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU8());
    }
}, b = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), this.value = e;
    }
    serialize(e) {
        e.serializeU16(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(6), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU16());
    }
}, y = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]), this.value = e;
    }
    serialize(e) {
        e.serializeU32(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(7), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU32());
    }
}, m = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]), this.value = BigInt(e);
    }
    serialize(e) {
        e.serializeU64(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(1), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU64());
    }
}, B = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]), this.value = BigInt(e);
    }
    serialize(e) {
        e.serializeU128(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(2), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU128());
    }
}, a = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"]), this.value = BigInt(e);
    }
    serialize(e) {
        e.serializeU256(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(8), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU256());
    }
};
;
 //# sourceMappingURL=chunk-ORMOQWWH.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FLZPUYXQ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
;
;
var a = class d {
    constructor(e){
        this.buffer = new ArrayBuffer(e.length), new Uint8Array(this.buffer).set(e, 0), this.offset = 0;
    }
    static fromHex(e) {
        let i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToUint8Array(e);
        return new d(i);
    }
    read(e) {
        if (this.offset + e > this.buffer.byteLength) throw new Error("Reached to the end of buffer");
        let i = this.buffer.slice(this.offset, this.offset + e);
        return this.offset += e, i;
    }
    remaining() {
        return this.buffer.byteLength - this.offset;
    }
    assertFinished() {
        if (this.remaining() !== 0) throw new Error("Buffer has remaining bytes");
    }
    deserializeStr() {
        let e = this.deserializeBytes();
        return new TextDecoder().decode(e);
    }
    deserializeOptionStr() {
        return this.deserializeOption("string");
    }
    deserializeOption(e, i) {
        if (this.deserializeBool()) {
            if (e === "string") return this.deserializeStr();
            if (e === "bytes") return this.deserializeBytes();
            if (e === "fixedBytes") {
                if (i === void 0) throw new Error("Fixed bytes length not provided");
                return this.deserializeFixedBytes(i);
            }
            return this.deserialize(e);
        }
    }
    deserializeBytes() {
        let e = this.deserializeUleb128AsU32();
        return new Uint8Array(this.read(e));
    }
    deserializeFixedBytes(e) {
        return new Uint8Array(this.read(e));
    }
    deserializeBool() {
        let e = new Uint8Array(this.read(1))[0];
        if (e !== 1 && e !== 0) throw new Error("Invalid boolean value");
        return e === 1;
    }
    deserializeU8() {
        return new DataView(this.read(1)).getUint8(0);
    }
    deserializeU16() {
        return new DataView(this.read(2)).getUint16(0, !0);
    }
    deserializeU32() {
        return new DataView(this.read(4)).getUint32(0, !0);
    }
    deserializeU64() {
        let e = this.deserializeU32(), i = this.deserializeU32();
        return BigInt(BigInt(i) << BigInt(32) | BigInt(e));
    }
    deserializeU128() {
        let e = this.deserializeU64(), i = this.deserializeU64();
        return BigInt(i << BigInt(64) | e);
    }
    deserializeU256() {
        let e = this.deserializeU128(), i = this.deserializeU128();
        return BigInt(i << BigInt(128) | e);
    }
    deserializeUleb128AsU32() {
        let e = BigInt(0), i = 0;
        for(; e < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"];){
            let r = this.deserializeU8();
            if (e |= BigInt(r & 127) << BigInt(i), (r & 128) === 0) break;
            i += 7;
        }
        if (e > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]) throw new Error("Overflow while parsing uleb128-encoded uint32 value");
        return Number(e);
    }
    deserialize(e) {
        return e.deserialize(this);
    }
    deserializeVector(e) {
        let i = this.deserializeUleb128AsU32(), r = new Array;
        for(let n = 0; n < i; n += 1)r.push(this.deserialize(e));
        return r;
    }
};
;
 //# sourceMappingURL=chunk-FLZPUYXQ.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Q4W3WJ2U.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t),
    "b": (()=>p),
    "c": (()=>a),
    "d": (()=>A)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ORMOQWWH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FLZPUYXQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
;
;
var t = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.values = e;
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        if (this.values[0] !== void 0 && !(this.values[0] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])) {
            new p(this.bcsToBytes()).serializeForScriptFunction(e);
            return;
        }
        e.serializeU32AsUleb128(4), e.serialize(this);
    }
    static U8(e) {
        let r;
        if (Array.isArray(e) && e.length === 0) r = [];
        else if (Array.isArray(e) && typeof e[0] == "number") r = e;
        else if (typeof e == "string") {
            let n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
            r = Array.from(n.toUint8Array());
        } else if (e instanceof Uint8Array) r = Array.from(e);
        else throw new Error("Invalid input type, must be an number[], Uint8Array, or hex string");
        return new i(r.map((n)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](n)));
    }
    static U16(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r)));
    }
    static U32(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](r)));
    }
    static U64(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](r)));
    }
    static U128(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"](r)));
    }
    static U256(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"](r)));
    }
    static Bool(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](r)));
    }
    static MoveString(e) {
        return new i(e.map((r)=>new a(r)));
    }
    serialize(e) {
        e.serializeVector(this.values);
    }
    static deserialize(e, r) {
        let n = e.deserializeUleb128AsU32(), l = new Array;
        for(let w = 0; w < n; w += 1)l.push(r.deserialize(e));
        return new i(l);
    }
}, p = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e).toUint8Array();
    }
    serialize(e) {
        e.serializeBytes(this.value);
    }
    serializeForEntryFunction(e) {
        this.serialize(e);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(9), this.serialize(e);
    }
    static deserialize(e) {
        return new i(e.deserializeBytes());
    }
    toMoveVector(e) {
        let r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](this.bcsToBytes());
        r.deserializeUleb128AsU32();
        let n = r.deserializeVector(e);
        return new t(n);
    }
}, a = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.value = e;
    }
    serialize(e) {
        e.serializeStr(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        let n = new TextEncoder().encode(this.value);
        t.U8(n).serializeForScriptFunction(e);
    }
    static deserialize(e) {
        return new i(e.deserializeStr());
    }
}, A = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), typeof e < "u" && e !== null ? this.vec = new t([
            e
        ]) : this.vec = new t([]), [this.value] = this.vec.values;
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    unwrap() {
        if (this.isSome()) return this.vec.values[0];
        throw new Error("Called unwrap on a MoveOption with no value");
    }
    isSome() {
        return this.vec.values.length === 1;
    }
    serialize(e) {
        this.vec.serialize(e);
    }
    static U8(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](e) : void 0);
    }
    static U16(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](e) : void 0);
    }
    static U32(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](e) : void 0);
    }
    static U64(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](e) : void 0);
    }
    static U128(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"](e) : void 0);
    }
    static U256(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"](e) : void 0);
    }
    static Bool(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](e) : void 0);
    }
    static MoveString(e) {
        return new i(e != null ? new a(e) : void 0);
    }
    static deserialize(e, r) {
        let n = t.deserialize(e, r);
        return new i(n.values[0]);
    }
};
;
 //# sourceMappingURL=chunk-Q4W3WJ2U.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-2XQKGWHQ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>c)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Q4W3WJ2U.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ORMOQWWH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
;
;
;
;
var c = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        this.accountAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE;
        this.moduleName = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]("account");
        this.structName = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]("RotationProofChallenge");
        this.sequenceNumber = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](e.sequenceNumber), this.originator = e.originator, this.currentAuthKey = e.currentAuthKey, this.newPublicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(e.newPublicKey.toUint8Array());
    }
    serialize(e) {
        e.serialize(this.accountAddress), e.serialize(this.moduleName), e.serialize(this.structName), e.serialize(this.sequenceNumber), e.serialize(this.originator), e.serialize(this.currentAuthKey), e.serialize(this.newPublicKey);
    }
};
;
 //# sourceMappingURL=chunk-2XQKGWHQ.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XKUIMGKU.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>r)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
;
var r = class a extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.chainId = e;
    }
    serialize(e) {
        e.serializeU8(this.chainId);
    }
    static deserialize(e) {
        let s = e.deserializeU8();
        return new a(s);
    }
};
;
 //# sourceMappingURL=chunk-XKUIMGKU.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-N6YTF76Q.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>r)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
;
var r = class t extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(i){
        super(), this.identifier = i;
    }
    serialize(i) {
        i.serializeStr(this.identifier);
    }
    static deserialize(i) {
        let s = i.deserializeStr();
        return new t(s);
    }
};
;
 //# sourceMappingURL=chunk-N6YTF76Q.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-A5L76YP7.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>i),
    "b": (()=>n)
});
var i = class {
    constructor(){
        this.queue = [];
        this.pendingDequeue = [];
        this.cancelled = !1;
    }
    enqueue(e) {
        if (this.cancelled = !1, this.pendingDequeue.length > 0) {
            this.pendingDequeue.shift()?.resolve(e);
            return;
        }
        this.queue.push(e);
    }
    async dequeue() {
        return this.queue.length > 0 ? Promise.resolve(this.queue.shift()) : new Promise((e, u)=>{
            this.pendingDequeue.push({
                resolve: e,
                reject: u
            });
        });
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    cancel() {
        this.cancelled = !0, this.pendingDequeue.forEach(async ({ reject: e })=>{
            e(new n("Task cancelled"));
        }), this.pendingDequeue = [], this.queue.length = 0;
    }
    isCancelled() {
        return this.cancelled;
    }
    pendingDequeueLength() {
        return this.pendingDequeue.length;
    }
}, n = class extends Error {
};
;
 //# sourceMappingURL=chunk-A5L76YP7.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-2PASUPUO.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>s)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
var a = class a {
    static formatPrivateKey(e, n) {
        let i = a.AIP80_PREFIXES[n], t = e;
        return typeof t == "string" && t.startsWith(i) && (t = t.split("-")[2]), `${i}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toString()}`;
    }
    static parseHexInput(e, n, i) {
        let t, p = a.AIP80_PREFIXES[n];
        if (typeof e == "string") if (!i && !e.startsWith(p)) t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e), i !== !1 && console.warn("[Aptos SDK] It is recommended that private keys are AIP-80 compliant (https://github.com/aptos-foundation/AIPs/blob/main/aips/aip-80.md). You can fix the private key by formatting it with `PrivateKey.formatPrivateKey(privateKey: string, type: 'ed25519' | 'secp256k1'): string`.");
        else if (e.startsWith(p)) t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexString(e.split("-")[2]);
        else throw i ? new Error("Invalid HexString input while parsing private key. Must AIP-80 compliant string.") : new Error("Invalid HexString input while parsing private key.");
        else t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
        return t;
    }
};
a.AIP80_PREFIXES = {
    ed25519: "ed25519-priv-",
    secp256k1: "secp256k1-priv-",
    secp256r1: "secp256r1-priv-"
};
var s = a;
;
 //# sourceMappingURL=chunk-2PASUPUO.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WCMW2L3P.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>o)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
var o = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    toUint8Array() {
        return this.bcsToBytes();
    }
    toString() {
        let i = this.toUint8Array();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toString();
    }
};
;
 //# sourceMappingURL=chunk-WCMW2L3P.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WSR5EBJM.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>r),
    "b": (()=>n)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
var r = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    async verifySignatureAsync(t) {
        return this.verifySignature(t);
    }
    toUint8Array() {
        return this.bcsToBytes();
    }
    toString() {
        let t = this.toUint8Array();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toString();
    }
}, n = class extends r {
};
;
 //# sourceMappingURL=chunk-WSR5EBJM.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FGFLPH5K.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>s)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)");
;
;
;
;
var r = class r extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t){
        super();
        let { data: e } = t, i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
        if (i.toUint8Array().length !== r.LENGTH) throw new Error(`Authentication Key length should be ${r.LENGTH}`);
        this.data = i;
    }
    serialize(t) {
        t.serializeFixedBytes(this.data.toUint8Array());
    }
    static deserialize(t) {
        let e = t.deserializeFixedBytes(r.LENGTH);
        return new r({
            data: e
        });
    }
    toUint8Array() {
        return this.data.toUint8Array();
    }
    static fromSchemeAndBytes(t) {
        let { scheme: e, input: i } = t, u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toUint8Array(), h = new Uint8Array([
            ...u,
            e
        ]), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"].create();
        a.update(h);
        let y = a.digest();
        return new r({
            data: y
        });
    }
    static fromPublicKeyAndScheme(t) {
        let { publicKey: e } = t;
        return e.authKey();
    }
    static fromPublicKey(t) {
        let { publicKey: e } = t;
        return e.authKey();
    }
    derivedAddress() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](this.data.toUint8Array());
    }
};
r.LENGTH = 32;
var s = r;
;
 //# sourceMappingURL=chunk-FGFLPH5K.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-I7XT6L7S.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>g),
    "b": (()=>H),
    "c": (()=>S),
    "d": (()=>p)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-2PASUPUO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WCMW2L3P.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WSR5EBJM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FGFLPH5K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$nist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.9.0/node_modules/@noble/curves/esm/nist.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var s = class s extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        this.keyType = "secp256r1";
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e), i = r.toUint8Array().length;
        if (i !== s.LENGTH && i !== s.COMPRESSED_LENGTH) throw new Error(`PublicKey length should be ${s.LENGTH} or ${s.COMPRESSED_LENGTH}, received ${i}`);
        if (i === s.COMPRESSED_LENGTH) {
            let u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$nist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256"].ProjectivePoint.fromHex(r.toUint8Array());
            this.key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(u.toRawBytes(!1));
        } else this.key = r;
    }
    toUint8Array() {
        return this.key.toUint8Array();
    }
    toString() {
        return this.key.toString();
    }
    bcsToBytes() {
        let e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return this.serialize(e), e.toUint8Array();
    }
    verifySignature(e) {
        let { message: r, signature: i } = e, u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(r).toUint8Array(), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(u), U = i.toUint8Array();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$nist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256"].verify(U, f, this.toUint8Array());
    }
    async verifySignatureAsync(e) {
        return this.verifySignature({
            message: e.message,
            signature: e.signature
        });
    }
    serialize(e) {
        e.serializeBytes(this.key.toUint8Array());
    }
    static deserialize(e) {
        let r = e.deserializeBytes();
        return new s(r);
    }
    static load(e) {
        let r = e.deserializeBytes();
        return new s(r);
    }
    static isInstance(e) {
        return "key" in e && e.key?.data?.length === s.LENGTH && "keyType" in e && e.keyType === "secp256r1";
    }
    authKey() {
        let e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return e.serializeU32AsUleb128(2), e.serializeFixedBytes(this.bcsToBytes()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 2,
            input: e.toUint8Array()
        });
    }
};
s.LENGTH = 65, s.COMPRESSED_LENGTH = 33;
var g = s, a = class a extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t, e){
        super();
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].parseHexInput(t, "secp256r1", e), i = r.toUint8Array().length;
        if (i !== a.LENGTH) throw new Error(`PrivateKey length should be ${a.LENGTH}, received ${i}`);
        this.key = r;
    }
    toUint8Array() {
        return this.key.toUint8Array();
    }
    toString() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].formatPrivateKey(this.key.toString(), "secp256r1");
    }
    toHexString() {
        return this.key.toString();
    }
    sign(t) {
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(e.toUint8Array()), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$nist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256"].sign(r, this.key.toUint8Array());
        return new p(i.toCompactRawBytes());
    }
    serialize(t) {
        t.serializeBytes(this.toUint8Array());
    }
    static deserialize(t) {
        let e = t.deserializeBytes();
        return new a(e);
    }
    static generate() {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$nist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256"].utils.randomPrivateKey();
        return new a(t);
    }
    publicKey() {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$nist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256"].getPublicKey(this.key.toUint8Array(), !1);
        return new g(t);
    }
};
a.LENGTH = 32;
var H = a, S = class d extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t, e, r){
        super(), this.signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t), this.authenticatorData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e), this.clientDataJSON = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(r);
    }
    toUint8Array() {
        return this.signature.toUint8Array();
    }
    serialize(t) {
        t.serializeU32AsUleb128(0), t.serializeBytes(this.signature.toUint8Array()), t.serializeBytes(this.authenticatorData.toUint8Array()), t.serializeBytes(this.clientDataJSON.toUint8Array());
    }
    bcsToBytes() {
        let t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return this.serialize(t), t.toUint8Array();
    }
    bcsToHex() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(this.bcsToBytes());
    }
    toStringWithoutPrefix() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(this.bcsToBytes()).toString();
    }
    static deserialize(t) {
        let e = t.deserializeUleb128AsU32();
        if (e !== 0) throw new Error(`Invalid id for WebAuthnSignature: ${e}`);
        let r = t.deserializeBytes(), i = t.deserializeBytes(), u = t.deserializeBytes();
        return new d(r, i, u);
    }
}, o = class o extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t){
        super();
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t), r = e.toUint8Array().length;
        if (r !== o.LENGTH) throw new Error(`Signature length should be ${o.LENGTH}, received ${r}`);
        let i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$nist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p256"].Signature.fromCompact(e.toUint8Array()).normalizeS().toCompactRawBytes();
        this.data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i);
    }
    toUint8Array() {
        return this.data.toUint8Array();
    }
    toString() {
        return this.data.toString();
    }
    serialize(t) {
        t.serializeBytes(this.data.toUint8Array());
    }
    static deserialize(t) {
        let e = t.deserializeBytes();
        return new o(e);
    }
};
o.LENGTH = 64;
var p = o;
;
 //# sourceMappingURL=chunk-I7XT6L7S.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>m),
    "b": (()=>o)
});
var n = new Map;
function m(r, e, t) {
    return async (...s)=>{
        if (n.has(e)) {
            let { value: i, timestamp: u } = n.get(e);
            if (t === void 0 || Date.now() - u <= t) return i;
        }
        let a = await r(...s);
        return n.set(e, {
            value: a,
            timestamp: Date.now()
        }), a;
    };
}
function o(r, e, t) {
    return (...s)=>{
        if (n.has(e)) {
            let { value: i, timestamp: u } = n.get(e);
            if (t === void 0 || Date.now() - u <= t) return i;
        }
        let a = r(...s);
        return n.set(e, {
            value: a,
            timestamp: Date.now()
        }), a;
    };
}
;
 //# sourceMappingURL=chunk-YOZBVVKL.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HNBVYE3N.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>d),
    "b": (()=>f),
    "c": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)");
;
;
var d = (e, r)=>{
    let t = e.bcsToBytes(), s = typeof r == "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(r, "utf8") : r, o = new Uint8Array([
        ...t,
        ...s,
        254
    ]);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(o));
}, f = (e, r)=>{
    let t = e.bcsToBytes(), s = typeof r == "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(r, "utf8") : r, o = new Uint8Array([
        ...t,
        ...s,
        255
    ]);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(o));
}, a = (e, r, t)=>{
    let s = `${r}::${t}`;
    return d(e, s);
};
;
 //# sourceMappingURL=chunk-HNBVYE3N.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7DQDJ2SA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>f),
    "b": (()=>A),
    "c": (()=>_),
    "d": (()=>x),
    "e": (()=>S),
    "f": (()=>h),
    "g": (()=>T),
    "h": (()=>b),
    "i": (()=>M),
    "j": (()=>y),
    "k": (()=>v),
    "l": (()=>w),
    "m": (()=>E),
    "n": (()=>$)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HNBVYE3N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HNBVYE3N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$base64$40$3$2e$7$2e$8$2f$node_modules$2f$js$2d$base64$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-base64@3.7.8/node_modules/js-base64/base64.mjs [app-client] (ecmascript)");
;
;
;
async function f(n) {
    return new Promise((e)=>{
        setTimeout(e, n);
    });
}
function A(n) {
    return n instanceof Error ? n.message : String(n);
}
var _ = ()=>Math.floor(Date.now() / 1e3);
function x(n) {
    let e = new Date(n * 1e3);
    return e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), Math.floor(e.getTime() / 1e3);
}
function S(n) {
    let e = n.replace(/-/g, "+").replace(/_/g, "/"), t = e + "==".substring(0, (3 - e.length % 3) % 3);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$base64$40$3$2e$7$2e$8$2f$node_modules$2f$js$2d$base64$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(t);
}
function h(n) {
    let e = n.replace(/-/g, "+").replace(/_/g, "/");
    for(; e.length % 4 !== 0;)e += "=";
    return new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(e, "base64"));
}
var T = (n, e)=>n * 10 ** e, b = (n, e)=>n / 10 ** e, a = (n)=>{
    let e = "";
    for(let t = 2; t < n.length; t += 2)e += String.fromCharCode(parseInt(n.substring(t, t + 2), 16));
    return e;
}, M = (n)=>{
    let { account_address: e, module_name: t, struct_name: o } = n, s = a(t), c = a(o);
    return `${e}::${s}::${c}`;
}, y = (n)=>typeof n == "object" && !Array.isArray(n) && n !== null && "account_address" in n && "module_name" in n && "struct_name" in n && typeof n.account_address == "string" && typeof n.module_name == "string" && typeof n.struct_name == "string";
function v(n) {
    let e = n.split("::");
    if (e.length !== 3) throw new Error(`Invalid function ${n}`);
    let t = e[0], o = e[1], s = e[2];
    return {
        moduleAddress: t,
        moduleName: o,
        functionName: s
    };
}
function w(n) {
    let e = n.split("::");
    return e.length === 3 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].isValid({
        input: e[0]
    }).valid;
}
function E(n, e = 6, t = 5) {
    return `${n.slice(0, e)}...${n.slice(-t)}`;
}
var d = "0x1::aptos_coin::AptosCoin", I = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A.toStringLong();
function m(n) {
    let e = /0x[0-9a-fA-F]+/g;
    return n.replace(e, (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t, {
            maxMissingChars: 63
        }).toStringShort());
}
function $(n) {
    let e = m(n);
    return e === d ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HNBVYE3N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A, e);
}
;
 //# sourceMappingURL=chunk-7DQDJ2SA.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6WDVDEQZ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>l),
    "b": (()=>O),
    "c": (()=>u),
    "d": (()=>N),
    "e": (()=>T)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7DQDJ2SA.mjs [app-client] (ecmascript)");
;
var l = ((t)=>(t[t.API_ERROR = 0] = "API_ERROR", t[t.EXTERNAL_API_ERROR = 1] = "EXTERNAL_API_ERROR", t[t.SESSION_EXPIRED = 2] = "SESSION_EXPIRED", t[t.INVALID_STATE = 3] = "INVALID_STATE", t[t.INVALID_SIGNATURE = 4] = "INVALID_SIGNATURE", t[t.UNKNOWN = 5] = "UNKNOWN", t))(l || {}), O = ((s)=>(s.REAUTHENTICATE = "Re-authentiate to continue using your keyless account", s.REAUTHENTICATE_UNSURE = "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support", s.UPDATE_REQUEST_PARAMS = "Update the invalid request parameters and reauthenticate.", s.RATE_LIMIT_EXCEEDED = "Cache the keyless account and reuse it to avoid making too many requests.  Keyless accounts are valid until either the EphemeralKeyPair expires, when the JWK is rotated, or when the proof verifying key is changed, whichever comes soonest.", s.SERVER_ERROR = "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx", s.CALL_PRECHECK = "Call `await account.checkKeylessAccountValidity()` to wait for asyncronous changes and check for account validity before signing or serializing.", s.REINSTANTIATE = "Try instantiating the account again.  Avoid manipulating the account object directly", s.JOIN_SUPPORT_GROUP = "For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx", s.UNKNOWN = "Error unknown. For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx", s))(O || {}), u = ((e)=>(e[e.EPHEMERAL_KEY_PAIR_EXPIRED = 0] = "EPHEMERAL_KEY_PAIR_EXPIRED", e[e.PROOF_NOT_FOUND = 1] = "PROOF_NOT_FOUND", e[e.ASYNC_PROOF_FETCH_FAILED = 2] = "ASYNC_PROOF_FETCH_FAILED", e[e.INVALID_PROOF_VERIFICATION_FAILED = 3] = "INVALID_PROOF_VERIFICATION_FAILED", e[e.INVALID_PROOF_VERIFICATION_KEY_NOT_FOUND = 4] = "INVALID_PROOF_VERIFICATION_KEY_NOT_FOUND", e[e.INVALID_JWT_SIG = 5] = "INVALID_JWT_SIG", e[e.INVALID_JWT_JWK_NOT_FOUND = 6] = "INVALID_JWT_JWK_NOT_FOUND", e[e.INVALID_JWT_ISS_NOT_RECOGNIZED = 7] = "INVALID_JWT_ISS_NOT_RECOGNIZED", e[e.INVALID_JWT_FEDERATED_ISS_NOT_SUPPORTED = 8] = "INVALID_JWT_FEDERATED_ISS_NOT_SUPPORTED", e[e.INVALID_TW_SIG_VERIFICATION_FAILED = 9] = "INVALID_TW_SIG_VERIFICATION_FAILED", e[e.INVALID_TW_SIG_PUBLIC_KEY_NOT_FOUND = 10] = "INVALID_TW_SIG_PUBLIC_KEY_NOT_FOUND", e[e.INVALID_EXPIRY_HORIZON = 11] = "INVALID_EXPIRY_HORIZON", e[e.JWT_PARSING_ERROR = 12] = "JWT_PARSING_ERROR", e[e.JWK_FETCH_FAILED = 13] = "JWK_FETCH_FAILED", e[e.JWK_FETCH_FAILED_FEDERATED = 14] = "JWK_FETCH_FAILED_FEDERATED", e[e.RATE_LIMIT_EXCEEDED = 15] = "RATE_LIMIT_EXCEEDED", e[e.PEPPER_SERVICE_INTERNAL_ERROR = 16] = "PEPPER_SERVICE_INTERNAL_ERROR", e[e.PEPPER_SERVICE_BAD_REQUEST = 17] = "PEPPER_SERVICE_BAD_REQUEST", e[e.PEPPER_SERVICE_OTHER = 18] = "PEPPER_SERVICE_OTHER", e[e.PROVER_SERVICE_INTERNAL_ERROR = 19] = "PROVER_SERVICE_INTERNAL_ERROR", e[e.PROVER_SERVICE_BAD_REQUEST = 20] = "PROVER_SERVICE_BAD_REQUEST", e[e.PROVER_SERVICE_OTHER = 21] = "PROVER_SERVICE_OTHER", e[e.FULL_NODE_CONFIG_LOOKUP_ERROR = 22] = "FULL_NODE_CONFIG_LOOKUP_ERROR", e[e.FULL_NODE_VERIFICATION_KEY_LOOKUP_ERROR = 23] = "FULL_NODE_VERIFICATION_KEY_LOOKUP_ERROR", e[e.FULL_NODE_JWKS_LOOKUP_ERROR = 24] = "FULL_NODE_JWKS_LOOKUP_ERROR", e[e.FULL_NODE_OTHER = 25] = "FULL_NODE_OTHER", e[e.SIGNATURE_TYPE_INVALID = 26] = "SIGNATURE_TYPE_INVALID", e[e.SIGNATURE_EXPIRED = 27] = "SIGNATURE_EXPIRED", e[e.MAX_EXPIRY_HORIZON_EXCEEDED = 28] = "MAX_EXPIRY_HORIZON_EXCEEDED", e[e.EPHEMERAL_SIGNATURE_VERIFICATION_FAILED = 29] = "EPHEMERAL_SIGNATURE_VERIFICATION_FAILED", e[e.TRAINING_WHEELS_SIGNATURE_MISSING = 30] = "TRAINING_WHEELS_SIGNATURE_MISSING", e[e.TRAINING_WHEELS_SIGNATURE_VERIFICATION_FAILED = 31] = "TRAINING_WHEELS_SIGNATURE_VERIFICATION_FAILED", e[e.PROOF_VERIFICATION_FAILED = 32] = "PROOF_VERIFICATION_FAILED", e[e.UNKNOWN = 33] = "UNKNOWN", e))(u || {}), A = {
    0: [
        "The ephemeral keypair has expired.",
        2,
        "Re-authentiate to continue using your keyless account"
    ],
    1: [
        "The required proof could not be found.",
        3,
        "Call `await account.checkKeylessAccountValidity()` to wait for asyncronous changes and check for account validity before signing or serializing."
    ],
    2: [
        "The required proof failed to fetch.",
        3,
        "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support"
    ],
    3: [
        "The provided proof is invalid.",
        3,
        "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support"
    ],
    4: [
        "The verification key used to authenticate was updated.",
        2,
        "Re-authentiate to continue using your keyless account"
    ],
    5: [
        "The JWK was found, but JWT failed verification",
        3,
        "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support"
    ],
    6: [
        "The JWK required to verify the JWT could not be found. The JWK may have been rotated out.",
        2,
        "Re-authentiate to continue using your keyless account"
    ],
    7: [
        "The JWT issuer is not recognized.",
        3,
        "Update the invalid request parameters and reauthenticate."
    ],
    8: [
        "The JWT issuer is not supported by the Federated Keyless ",
        0,
        "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support"
    ],
    9: [
        "The training wheels signature is invalid.",
        3,
        "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support"
    ],
    10: [
        "The public key used to verify the training wheels signature was not found.",
        2,
        "Re-authentiate to continue using your keyless account"
    ],
    11: [
        "The expiry horizon is invalid.",
        2,
        "Re-authentiate to continue using your keyless account"
    ],
    13: [
        "Failed to fetch JWKS.",
        1,
        "For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    14: [
        "Failed to fetch JWKS for Federated Keyless provider.",
        1,
        "For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    15: [
        "Rate limit exceeded. Too many requests in a short period.",
        0,
        "Cache the keyless account and reuse it to avoid making too many requests.  Keyless accounts are valid until either the EphemeralKeyPair expires, when the JWK is rotated, or when the proof verifying key is changed, whichever comes soonest."
    ],
    16: [
        "Internal error from Pepper service.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    17: [
        "Bad request sent to Pepper service.",
        0,
        "Update the invalid request parameters and reauthenticate."
    ],
    18: [
        "Unknown error from Pepper service.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    19: [
        "Internal error from Prover service.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    20: [
        "Bad request sent to Prover service.",
        0,
        "Update the invalid request parameters and reauthenticate."
    ],
    21: [
        "Unknown error from Prover service.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    12: [
        "Error when parsing JWT. This should never happen. Join https://t.me/+h5CN-W35yUFiYzkx for support",
        3,
        "Try instantiating the account again.  Avoid manipulating the account object directly"
    ],
    22: [
        "Error when looking up on-chain keyless configuration.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    23: [
        "Error when looking up on-chain verification key.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    24: [
        "Error when looking up on-chain JWKS.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    25: [
        "Unknown error from full node.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    26: [
        "The signature is not a valid Keyless signature.",
        4,
        "For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    27: [
        "The ephemeral key pair used to sign the message has expired.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    28: [
        "The expiry horizon on the signature exceeds the maximum allowed value.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    29: [
        "Failed to verify the ephemeral signature with the ephemeral public key.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    30: [
        "The training wheels signature is missing but is required by the Keyless configuration.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    31: [
        "Failed to verify the training wheels signature with the training wheels public key.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    32: [
        "The proof verification failed.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    33: [
        "An unknown error has occurred.",
        5,
        "Error unknown. For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ]
}, N = class _ extends Error {
    constructor(o){
        let { innerError: r, category: E, resolutionTip: i, type: R, message: t = A[R][0], details: I } = o;
        super(t), this.name = "KeylessError", this.innerError = r, this.category = E, this.resolutionTip = i, this.type = R, this.details = I, this.message = _.constructMessage(t, i, r, I);
    }
    static constructMessage(o, r, E, i) {
        let R = `
Message: ${o}`;
        return i && (R += `
Details: ${i}`), E instanceof T ? R += `
AptosApiError: ${E.message}` : E !== void 0 && (R += `
Error: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(E)}`), R += `
KeylessErrorResolutionTip: ${r}`, R;
    }
    static fromErrorType(o) {
        let { error: r, type: E, details: i } = o, [R, t, I] = A[E];
        return new _({
            message: R,
            details: i,
            innerError: r,
            category: t,
            resolutionTip: I,
            type: E
        });
    }
}, T = class extends Error {
    constructor({ apiType: o, aptosRequest: r, aptosResponse: E }){
        super(S({
            apiType: o,
            aptosRequest: r,
            aptosResponse: E
        })), this.name = "AptosApiError", this.url = E.url, this.status = E.status, this.statusText = E.statusText, this.data = E.data, this.request = r;
    }
};
function S({ apiType: _, aptosRequest: o, aptosResponse: r }) {
    let E = r.headers?.traceparent?.split("-")[1], i = E ? `(trace_id:${E}) ` : "", R = `Request to [${_}]: ${o.method} ${r.url ?? o.url} ${i}failed with`;
    return _ === "Indexer" && r.data?.errors?.[0]?.message != null ? `${R}: ${r.data.errors[0].message}` : r.data?.message != null && r.data?.error_code != null ? `${R}: ${JSON.stringify(r.data)}` : `${R} status: ${r.statusText}(code:${r.status}) and response body: ${P(r.data)}`;
}
var n = 400;
function P(_) {
    let o = JSON.stringify(_);
    return o.length <= n ? o : `truncated(original_size:${o.length}): ${o.slice(0, n / 2)}...${o.slice(-n / 2)}`;
}
;
 //# sourceMappingURL=chunk-6WDVDEQZ.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-CIJA7ONS.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>o)
});
var o = "5.1.0";
;
 //# sourceMappingURL=chunk-CIJA7ONS.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-QP2BY4PK.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>A),
    "b": (()=>P)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6WDVDEQZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$CIJA7ONS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-CIJA7ONS.mjs [app-client] (ecmascript)");
;
;
async function A(s, u) {
    let { url: t, method: n, body: i, contentType: a, params: o, overrides: e, originMethod: R } = s, p = {
        ...e?.HEADERS,
        "x-aptos-client": `aptos-typescript-sdk/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$CIJA7ONS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]}`,
        "content-type": a ?? "application/json",
        "x-aptos-typescript-sdk-origin-method": R
    };
    return e?.AUTH_TOKEN && (p.Authorization = `Bearer ${e?.AUTH_TOKEN}`), e?.API_KEY && (p.Authorization = `Bearer ${e?.API_KEY}`), u.provider({
        url: t,
        method: n,
        body: i,
        params: o,
        headers: p,
        overrides: e
    });
}
async function P(s, u, t) {
    let { url: n, path: i } = s, a = i ? `${n}/${i}` : n, o = await A({
        ...s,
        url: a
    }, u.client), e = {
        status: o.status,
        statusText: o.statusText ?? "No status text provided",
        data: o.data,
        headers: o.headers,
        config: o.config,
        request: o.request,
        url: a
    };
    if (e.status === 401) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]({
        apiType: t,
        aptosRequest: s,
        aptosResponse: e
    });
    if (t === "Indexer") {
        let R = e.data;
        if (R.errors) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]({
            apiType: t,
            aptosRequest: s,
            aptosResponse: e
        });
        e.data = R.data;
    } else if ((t === "Pepper" || t === "Prover") && e.status >= 400) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]({
        apiType: t,
        aptosRequest: s,
        aptosResponse: e
    });
    if (e.status >= 200 && e.status < 300) return e;
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]({
        apiType: t,
        aptosRequest: s,
        aptosResponse: e
    });
}
;
 //# sourceMappingURL=chunk-QP2BY4PK.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7EER7GWV.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>i),
    "b": (()=>y),
    "c": (()=>l),
    "d": (()=>q),
    "e": (()=>A),
    "f": (()=>m)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QP2BY4PK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-QP2BY4PK.mjs [app-client] (ecmascript)");
;
async function i(e) {
    let { aptosConfig: t, overrides: s, params: r, contentType: n, acceptType: a, path: p, originMethod: o, type: R } = e, d = t.getRequestUrl(R);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QP2BY4PK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        url: d,
        method: "GET",
        originMethod: o,
        path: p,
        contentType: n,
        acceptType: a,
        params: r,
        overrides: {
            ...t.clientConfig,
            ...s
        }
    }, t, e.type);
}
async function y(e) {
    let { aptosConfig: t } = e;
    return i({
        ...e,
        type: "Fullnode",
        overrides: {
            ...t.clientConfig,
            ...t.fullnodeConfig,
            ...e.overrides,
            HEADERS: {
                ...t.clientConfig?.HEADERS,
                ...t.fullnodeConfig?.HEADERS
            }
        }
    });
}
async function l(e) {
    return i({
        ...e,
        type: "Pepper"
    });
}
async function q(e) {
    let t = new Array(0), s, r = e.params;
    do {
        let n = await i({
            type: "Fullnode",
            aptosConfig: e.aptosConfig,
            originMethod: e.originMethod,
            path: e.path,
            params: r,
            overrides: e.overrides
        });
        s = n.headers["x-aptos-cursor"], delete n.headers, t.push(...n.data), r.start = s;
    }while (s != null)
    return t;
}
async function A(e) {
    let t = new Array(0), s, r = e.params, n = r.limit;
    do {
        let { response: a, cursor: p } = await m({
            ...e
        });
        if (s = p, t.push(...a.data), e?.params && (e.params.start = s), n !== void 0) {
            let o = n - t.length;
            if (o <= 0) break;
            r.limit = o;
        }
    }while (s != null)
    return t;
}
async function m(e) {
    let t, s = {};
    typeof e.params?.cursor == "string" && (s.start = e.params.cursor), typeof e.params?.limit == "number" && (s.limit = e.params.limit);
    let r = await i({
        type: "Fullnode",
        aptosConfig: e.aptosConfig,
        originMethod: e.originMethod,
        path: e.path,
        params: s,
        overrides: e.overrides
    });
    return t = r.headers["x-aptos-cursor"], {
        response: r,
        cursor: t
    };
}
;
 //# sourceMappingURL=chunk-7EER7GWV.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JABP65XD.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>g),
    "b": (()=>f)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7EER7GWV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript)");
;
;
;
async function g(o) {
    let { aptosConfig: e, accountAddress: t } = o, { data: n } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        originMethod: "getInfo",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}`
    });
    return n;
}
async function f(o) {
    return o.options?.ledgerVersion !== void 0 ? c(o) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(async ()=>c(o), `module-${o.accountAddress}-${o.moduleName}`, 1e3 * 60 * 5)();
}
async function c(o) {
    let { aptosConfig: e, accountAddress: t, moduleName: n, options: i } = o, { data: u } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        originMethod: "getModule",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/module/${n}`,
        params: {
            ledger_version: i?.ledgerVersion
        }
    });
    return u;
}
;
 //# sourceMappingURL=chunk-JABP65XD.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GOXRBEIJ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>C),
    "b": (()=>_),
    "c": (()=>N),
    "d": (()=>W),
    "e": (()=>M)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/poseidon-lite@0.2.1/node_modules/poseidon-lite/index.js [app-client] (ecmascript)");
;
var i = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon1"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon2"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon3"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon4"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon5"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon6"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon7"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon8"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon9"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon10"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon11"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon12"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon13"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon14"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon15"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$poseidon$2d$lite$40$0$2e$2$2e$1$2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon16"]
], g = 31, m = 16, s = (m - 1) * g;
function C(n, t) {
    let o = new TextEncoder().encode(n);
    return $(o, t);
}
function $(n, t) {
    if (n.length > t) throw new Error(`Inputted bytes of length ${n} is longer than ${t}`);
    let r = _(n, t);
    return M(r);
}
function T(n, t) {
    if (n.length > t) throw new Error(`Input bytes of length ${n} is longer than ${t}`);
    let r = k(n, t);
    return P(r);
}
function _(n, t) {
    if (n.length > t) throw new Error(`Input bytes of length ${n} is longer than ${t}`);
    return T(n, t).concat([
        BigInt(n.length)
    ]);
}
function P(n) {
    if (n.length > s) throw new Error(`Can't pack more than ${s}.  Was given ${n.length} bytes`);
    return L(n, g).map((t)=>N(t));
}
function L(n, t) {
    let r = [];
    for(let o = 0; o < n.length; o += t)r.push(n.subarray(o, o + t));
    return r;
}
function N(n) {
    let t = BigInt(0);
    for(let r = n.length - 1; r >= 0; r -= 1)t = t << BigInt(8) | BigInt(n[r]);
    return t;
}
function W(n, t) {
    let r = BigInt(n), o = new Uint8Array(t);
    for(let e = 0; e < t; e += 1)o[e] = Number(r & BigInt(255)), r >>= BigInt(8);
    return o;
}
function k(n, t) {
    if (t < n.length) throw new Error("Padded size must be greater than or equal to the input array size.");
    let r = new Uint8Array(t);
    r.set(n);
    for(let o = n.length; o < t; o += 1)r[o] = 0;
    return r;
}
function M(n) {
    if (n.length > i.length) throw new Error(`Unable to hash input of length ${n.length}.  Max input length is ${i.length}`);
    return i[n.length - 1](n);
}
;
 //# sourceMappingURL=chunk-GOXRBEIJ.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XJJVJOX5.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>e)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
;
var e = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
};
;
 //# sourceMappingURL=chunk-XJJVJOX5.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EF4FA5I6.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>n),
    "b": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WCMW2L3P.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WSR5EBJM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FGFLPH5K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
;
;
var n = class e extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(r){
        super(), this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(r).toUint8Array();
    }
    serialize(r) {
        r.serializeBytes(this.value);
    }
    static deserialize(r) {
        return new e(r.deserializeBytes());
    }
}, a = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(r){
        super(), this.accountAddress = r;
    }
    authKey() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]({
            data: this.accountAddress.toUint8Array()
        });
    }
    verifySignature(r) {
        throw new Error("This function is not implemented for AbstractPublicKey.");
    }
    async verifySignatureAsync(r) {
        throw new Error("This function is not implemented for AbstractPublicKey.");
    }
    serialize(r) {
        throw new Error("This function is not implemented for AbstractPublicKey.");
    }
};
;
 //# sourceMappingURL=chunk-EF4FA5I6.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C3Q23D22.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>d),
    "b": (()=>m),
    "c": (()=>y),
    "d": (()=>u),
    "e": (()=>D),
    "f": (()=>E),
    "g": (()=>A),
    "h": (()=>f),
    "i": (()=>U),
    "j": (()=>h)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/hmac.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha512$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha512.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$bip39$40$1$2e$6$2e$0$2f$node_modules$2f40$scure$2f$bip39$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scure+bip39@1.6.0/node_modules/@scure/bip39/esm/index.js [app-client] (ecmascript)");
;
;
;
var d = /^m\/44'\/637'\/[0-9]+'\/[0-9]+'\/[0-9]+'?$/, m = /^m\/44'\/637'\/[0-9]+'\/[0-9]+\/[0-9]+$/, y = ((t)=>(t.ED25519 = "ed25519 seed", t))(y || {}), u = 2147483648;
function D(e) {
    return m.test(e);
}
function E(e) {
    return d.test(e);
}
var A = (e, t)=>{
    let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hmac"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha512$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha512"], e).update(t).digest();
    return {
        key: r.slice(0, 32),
        chainCode: r.slice(32)
    };
}, f = ({ key: e, chainCode: t }, r)=>{
    let n = new ArrayBuffer(4);
    new DataView(n).setUint32(0, r);
    let o = new Uint8Array(n), s = new Uint8Array([
        0
    ]), a = new Uint8Array([
        ...s,
        ...e,
        ...o
    ]);
    return A(t, a);
}, x = (e)=>e.replace(/'/g, ""), U = (e)=>e.split("/").slice(1).map(x), h = (e)=>{
    let t = e.trim().split(/\s+/).map((r)=>r.toLowerCase()).join(" ");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$bip39$40$1$2e$6$2e$0$2f$node_modules$2f40$scure$2f$bip39$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mnemonicToSeedSync"])(t);
};
;
 //# sourceMappingURL=chunk-C3Q23D22.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-QREVMGQZ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>i),
    "b": (()=>o)
});
function i(a, t) {
    if (!(a.getTransactionSubmitter() !== void 0 || t.transactionSubmitter !== void 0) && t.transaction.feePayerAddress && !t.feePayerAuthenticator) throw new Error("You are submitting a Fee Payer transaction but missing the feePayerAuthenticator");
}
function o(a, t, n) {
    let e = n.value;
    return n.value = async function(...r) {
        return e.apply(this, r);
    }, n;
}
;
 //# sourceMappingURL=chunk-QREVMGQZ.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UL777LTI.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>F),
    "B": (()=>D),
    "C": (()=>O),
    "D": (()=>P),
    "a": (()=>i),
    "b": (()=>a),
    "c": (()=>n),
    "d": (()=>_),
    "e": (()=>u),
    "f": (()=>c),
    "g": (()=>d),
    "h": (()=>y),
    "i": (()=>l),
    "j": (()=>p),
    "k": (()=>m),
    "l": (()=>g),
    "m": (()=>b),
    "n": (()=>T),
    "o": (()=>k),
    "p": (()=>$),
    "q": (()=>h),
    "r": (()=>f),
    "s": (()=>A),
    "t": (()=>G),
    "u": (()=>w),
    "v": (()=>q),
    "w": (()=>v),
    "x": (()=>C),
    "y": (()=>Q),
    "z": (()=>x)
});
var i = `
    fragment TokenActivitiesFields on token_activities_v2 {
  after_value
  before_value
  entry_function_id_str
  event_account_address
  event_index
  from_address
  is_fungible_v2
  property_version_v1
  to_address
  token_amount
  token_data_id
  token_standard
  transaction_timestamp
  transaction_version
  type
}
    `, a = `
    fragment AnsTokenFragment on current_aptos_names {
  domain
  expiration_timestamp
  registered_address
  subdomain
  token_standard
  is_primary
  owner_address
  subdomain_expiration_policy
  domain_expiration_timestamp
}
    `, n = `
    fragment CurrentTokenOwnershipFields on current_token_ownerships_v2 {
  token_standard
  token_properties_mutated_v1
  token_data_id
  table_type_v1
  storage_id
  property_version_v1
  owner_address
  last_transaction_version
  last_transaction_timestamp
  is_soulbound_v2
  is_fungible_v2
  amount
  current_token_data {
    collection_id
    description
    is_fungible_v2
    largest_property_version_v1
    last_transaction_timestamp
    last_transaction_version
    maximum
    supply
    token_data_id
    token_name
    token_properties
    token_standard
    token_uri
    decimals
    current_collection {
      collection_id
      collection_name
      creator_address
      current_supply
      description
      last_transaction_timestamp
      last_transaction_version
      max_supply
      mutable_description
      mutable_uri
      table_handle_v1
      token_standard
      total_minted_v2
      uri
    }
  }
}
    `, _ = `
    query getAccountAddressesForAuthKey($where_condition: auth_key_account_addresses_bool_exp, $order_by: [auth_key_account_addresses_order_by!]) {
  auth_key_account_addresses(where: $where_condition, order_by: $order_by) {
    auth_key
    account_address
    last_transaction_version
    is_auth_key_used
  }
}
    `, u = `
    query getAccountCoinsCount($address: String) {
  current_fungible_asset_balances_aggregate(
    where: {owner_address: {_eq: $address}}
  ) {
    aggregate {
      count
    }
  }
}
    `, c = `
    query getAccountCoinsData($where_condition: current_fungible_asset_balances_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_fungible_asset_balances_order_by!]) {
  current_fungible_asset_balances(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    amount
    asset_type
    is_frozen
    is_primary
    last_transaction_timestamp
    last_transaction_version
    owner_address
    storage_id
    token_standard
    metadata {
      token_standard
      symbol
      supply_aggregator_table_key_v1
      supply_aggregator_table_handle_v1
      project_uri
      name
      last_transaction_version
      last_transaction_timestamp
      icon_uri
      decimals
      creator_address
      asset_type
    }
  }
}
    `, d = `
    query getAccountCollectionsWithOwnedTokens($where_condition: current_collection_ownership_v2_view_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_collection_ownership_v2_view_order_by!]) {
  current_collection_ownership_v2_view(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    current_collection {
      collection_id
      collection_name
      creator_address
      current_supply
      description
      last_transaction_timestamp
      last_transaction_version
      mutable_description
      max_supply
      mutable_uri
      table_handle_v1
      token_standard
      total_minted_v2
      uri
    }
    collection_id
    collection_name
    collection_uri
    creator_address
    distinct_tokens
    last_transaction_version
    owner_address
    single_token_uri
  }
}
    `, y = `
    query getAccountOwnedTokens($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${n}`, l = `
    query getAccountOwnedTokensByTokenData($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${n}`, p = `
    query getAccountOwnedTokensFromCollection($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${n}`, m = `
    query getAccountTokensCount($where_condition: current_token_ownerships_v2_bool_exp, $offset: Int, $limit: Int) {
  current_token_ownerships_v2_aggregate(
    where: $where_condition
    offset: $offset
    limit: $limit
  ) {
    aggregate {
      count
    }
  }
}
    `, g = `
    query getAccountTransactionsCount($address: String) {
  account_transactions_aggregate(where: {account_address: {_eq: $address}}) {
    aggregate {
      count
    }
  }
}
    `, b = `
    query getAuthKeysForPublicKey($where_condition: public_key_auth_keys_bool_exp, $order_by: [public_key_auth_keys_order_by!]) {
  public_key_auth_keys(where: $where_condition, order_by: $order_by) {
    public_key
    public_key_type
    auth_key
    account_public_key
    last_transaction_version
    is_public_key_used
    signature_type
  }
}
    `, T = `
    query getChainTopUserTransactions($limit: Int) {
  user_transactions(limit: $limit, order_by: {version: desc}) {
    version
  }
}
    `, k = `
    query getCollectionData($where_condition: current_collections_v2_bool_exp!) {
  current_collections_v2(where: $where_condition) {
    uri
    total_minted_v2
    token_standard
    table_handle_v1
    mutable_uri
    mutable_description
    max_supply
    collection_id
    collection_name
    creator_address
    current_supply
    description
    last_transaction_timestamp
    last_transaction_version
    cdn_asset_uris {
      cdn_image_uri
      asset_uri
      animation_optimizer_retry_count
      cdn_animation_uri
      cdn_json_uri
      image_optimizer_retry_count
      json_parser_retry_count
      raw_animation_uri
      raw_image_uri
    }
  }
}
    `, $ = `
    query getCurrentFungibleAssetBalances($where_condition: current_fungible_asset_balances_bool_exp, $offset: Int, $limit: Int) {
  current_fungible_asset_balances(
    where: $where_condition
    offset: $offset
    limit: $limit
  ) {
    amount
    asset_type
    is_frozen
    is_primary
    last_transaction_timestamp
    last_transaction_version
    owner_address
    storage_id
    token_standard
  }
}
    `, h = `
    query getDelegatedStakingActivities($delegatorAddress: String, $poolAddress: String) {
  delegated_staking_activities(
    where: {delegator_address: {_eq: $delegatorAddress}, pool_address: {_eq: $poolAddress}}
  ) {
    amount
    delegator_address
    event_index
    event_type
    pool_address
    transaction_version
  }
}
    `, f = `
    query getEvents($where_condition: events_bool_exp, $offset: Int, $limit: Int, $order_by: [events_order_by!]) {
  events(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    account_address
    creation_number
    data
    event_index
    sequence_number
    transaction_block_height
    transaction_version
    type
    indexed_type
  }
}
    `, A = `
    query getFungibleAssetActivities($where_condition: fungible_asset_activities_bool_exp, $offset: Int, $limit: Int) {
  fungible_asset_activities(
    where: $where_condition
    offset: $offset
    limit: $limit
  ) {
    amount
    asset_type
    block_height
    entry_function_id_str
    event_index
    gas_fee_payer_address
    is_frozen
    is_gas_fee
    is_transaction_success
    owner_address
    storage_id
    storage_refund_amount
    token_standard
    transaction_timestamp
    transaction_version
    type
  }
}
    `, G = `
    query getFungibleAssetMetadata($where_condition: fungible_asset_metadata_bool_exp, $offset: Int, $limit: Int) {
  fungible_asset_metadata(where: $where_condition, offset: $offset, limit: $limit) {
    icon_uri
    project_uri
    supply_aggregator_table_handle_v1
    supply_aggregator_table_key_v1
    creator_address
    asset_type
    decimals
    last_transaction_timestamp
    last_transaction_version
    name
    symbol
    token_standard
    supply_v2
    maximum_v2
  }
}
    `, w = `
    query getNames($offset: Int, $limit: Int, $where_condition: current_aptos_names_bool_exp, $order_by: [current_aptos_names_order_by!]) {
  current_aptos_names(
    limit: $limit
    where: $where_condition
    order_by: $order_by
    offset: $offset
  ) {
    ...AnsTokenFragment
  }
}
    ${a}`, q = `
    query getNumberOfDelegators($where_condition: num_active_delegator_per_pool_bool_exp, $order_by: [num_active_delegator_per_pool_order_by!]) {
  num_active_delegator_per_pool(where: $where_condition, order_by: $order_by) {
    num_active_delegator
    pool_address
  }
}
    `, v = `
    query getObjectData($where_condition: current_objects_bool_exp, $offset: Int, $limit: Int, $order_by: [current_objects_order_by!]) {
  current_objects(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    allow_ungated_transfer
    state_key_hash
    owner_address
    object_address
    last_transaction_version
    last_guid_creation_num
    is_deleted
  }
}
    `, C = `
    query getProcessorStatus($where_condition: processor_status_bool_exp) {
  processor_status(where: $where_condition) {
    last_success_version
    processor
    last_updated
  }
}
    `, Q = `
    query getTableItemsData($where_condition: table_items_bool_exp!, $offset: Int, $limit: Int, $order_by: [table_items_order_by!]) {
  table_items(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    decoded_key
    decoded_value
    key
    table_handle
    transaction_version
    write_set_change_index
  }
}
    `, x = `
    query getTableItemsMetadata($where_condition: table_metadatas_bool_exp!, $offset: Int, $limit: Int, $order_by: [table_metadatas_order_by!]) {
  table_metadatas(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    handle
    key_type
    value_type
  }
}
    `, F = `
    query getTokenActivity($where_condition: token_activities_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [token_activities_v2_order_by!]) {
  token_activities_v2(
    where: $where_condition
    order_by: $order_by
    offset: $offset
    limit: $limit
  ) {
    ...TokenActivitiesFields
  }
}
    ${i}`, D = `
    query getCurrentTokenOwnership($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${n}`, O = `
    query getTokenData($where_condition: current_token_datas_v2_bool_exp, $offset: Int, $limit: Int, $order_by: [current_token_datas_v2_order_by!]) {
  current_token_datas_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    collection_id
    description
    is_fungible_v2
    largest_property_version_v1
    last_transaction_timestamp
    last_transaction_version
    maximum
    supply
    token_data_id
    token_name
    token_properties
    token_standard
    token_uri
    decimals
    current_collection {
      collection_id
      collection_name
      creator_address
      current_supply
      description
      last_transaction_timestamp
      last_transaction_version
      max_supply
      mutable_description
      mutable_uri
      table_handle_v1
      token_standard
      total_minted_v2
      uri
    }
  }
}
    `, I = (s, o, e, t)=>s();
function P(s, o = I) {
    return {
        getAccountAddressesForAuthKey (e, t) {
            return o((r)=>s.request(_, e, {
                    ...t,
                    ...r
                }), "getAccountAddressesForAuthKey", "query", e);
        },
        getAccountCoinsCount (e, t) {
            return o((r)=>s.request(u, e, {
                    ...t,
                    ...r
                }), "getAccountCoinsCount", "query", e);
        },
        getAccountCoinsData (e, t) {
            return o((r)=>s.request(c, e, {
                    ...t,
                    ...r
                }), "getAccountCoinsData", "query", e);
        },
        getAccountCollectionsWithOwnedTokens (e, t) {
            return o((r)=>s.request(d, e, {
                    ...t,
                    ...r
                }), "getAccountCollectionsWithOwnedTokens", "query", e);
        },
        getAccountOwnedTokens (e, t) {
            return o((r)=>s.request(y, e, {
                    ...t,
                    ...r
                }), "getAccountOwnedTokens", "query", e);
        },
        getAccountOwnedTokensByTokenData (e, t) {
            return o((r)=>s.request(l, e, {
                    ...t,
                    ...r
                }), "getAccountOwnedTokensByTokenData", "query", e);
        },
        getAccountOwnedTokensFromCollection (e, t) {
            return o((r)=>s.request(p, e, {
                    ...t,
                    ...r
                }), "getAccountOwnedTokensFromCollection", "query", e);
        },
        getAccountTokensCount (e, t) {
            return o((r)=>s.request(m, e, {
                    ...t,
                    ...r
                }), "getAccountTokensCount", "query", e);
        },
        getAccountTransactionsCount (e, t) {
            return o((r)=>s.request(g, e, {
                    ...t,
                    ...r
                }), "getAccountTransactionsCount", "query", e);
        },
        getAuthKeysForPublicKey (e, t) {
            return o((r)=>s.request(b, e, {
                    ...t,
                    ...r
                }), "getAuthKeysForPublicKey", "query", e);
        },
        getChainTopUserTransactions (e, t) {
            return o((r)=>s.request(T, e, {
                    ...t,
                    ...r
                }), "getChainTopUserTransactions", "query", e);
        },
        getCollectionData (e, t) {
            return o((r)=>s.request(k, e, {
                    ...t,
                    ...r
                }), "getCollectionData", "query", e);
        },
        getCurrentFungibleAssetBalances (e, t) {
            return o((r)=>s.request($, e, {
                    ...t,
                    ...r
                }), "getCurrentFungibleAssetBalances", "query", e);
        },
        getDelegatedStakingActivities (e, t) {
            return o((r)=>s.request(h, e, {
                    ...t,
                    ...r
                }), "getDelegatedStakingActivities", "query", e);
        },
        getEvents (e, t) {
            return o((r)=>s.request(f, e, {
                    ...t,
                    ...r
                }), "getEvents", "query", e);
        },
        getFungibleAssetActivities (e, t) {
            return o((r)=>s.request(A, e, {
                    ...t,
                    ...r
                }), "getFungibleAssetActivities", "query", e);
        },
        getFungibleAssetMetadata (e, t) {
            return o((r)=>s.request(G, e, {
                    ...t,
                    ...r
                }), "getFungibleAssetMetadata", "query", e);
        },
        getNames (e, t) {
            return o((r)=>s.request(w, e, {
                    ...t,
                    ...r
                }), "getNames", "query", e);
        },
        getNumberOfDelegators (e, t) {
            return o((r)=>s.request(q, e, {
                    ...t,
                    ...r
                }), "getNumberOfDelegators", "query", e);
        },
        getObjectData (e, t) {
            return o((r)=>s.request(v, e, {
                    ...t,
                    ...r
                }), "getObjectData", "query", e);
        },
        getProcessorStatus (e, t) {
            return o((r)=>s.request(C, e, {
                    ...t,
                    ...r
                }), "getProcessorStatus", "query", e);
        },
        getTableItemsData (e, t) {
            return o((r)=>s.request(Q, e, {
                    ...t,
                    ...r
                }), "getTableItemsData", "query", e);
        },
        getTableItemsMetadata (e, t) {
            return o((r)=>s.request(x, e, {
                    ...t,
                    ...r
                }), "getTableItemsMetadata", "query", e);
        },
        getTokenActivity (e, t) {
            return o((r)=>s.request(F, e, {
                    ...t,
                    ...r
                }), "getTokenActivity", "query", e);
        },
        getCurrentTokenOwnership (e, t) {
            return o((r)=>s.request(D, e, {
                    ...t,
                    ...r
                }), "getCurrentTokenOwnership", "query", e);
        },
        getTokenData (e, t) {
            return o((r)=>s.request(O, e, {
                    ...t,
                    ...r
                }), "getTokenData", "query", e);
        }
    };
}
;
 //# sourceMappingURL=chunk-UL777LTI.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4AI7KQQ7.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>o),
    "b": (()=>q),
    "c": (()=>C),
    "d": (()=>E),
    "e": (()=>a),
    "f": (()=>m)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QP2BY4PK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-QP2BY4PK.mjs [app-client] (ecmascript)");
;
async function o(e) {
    let { type: t, originMethod: s, path: i, body: r, acceptType: R, contentType: f, params: c, aptosConfig: n, overrides: A } = e, d = n.getRequestUrl(t);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QP2BY4PK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        url: d,
        method: "POST",
        originMethod: s,
        path: i,
        body: r,
        contentType: f,
        acceptType: R,
        params: c,
        overrides: A
    }, n, e.type);
}
async function q(e) {
    let { aptosConfig: t } = e;
    return o({
        ...e,
        type: "Fullnode",
        overrides: {
            ...t.clientConfig,
            ...t.fullnodeConfig,
            ...e.overrides,
            HEADERS: {
                ...t.clientConfig?.HEADERS,
                ...t.fullnodeConfig?.HEADERS
            }
        }
    });
}
async function C(e) {
    let { aptosConfig: t } = e;
    return o({
        ...e,
        type: "Indexer",
        overrides: {
            ...t.clientConfig,
            ...t.indexerConfig,
            ...e.overrides,
            HEADERS: {
                ...t.clientConfig?.HEADERS,
                ...t.indexerConfig?.HEADERS
            }
        }
    });
}
async function E(e) {
    let { aptosConfig: t } = e, s = {
        ...t,
        clientConfig: {
            ...t.clientConfig
        }
    };
    return delete s?.clientConfig?.API_KEY, o({
        ...e,
        type: "Faucet",
        overrides: {
            ...s.clientConfig,
            ...s.faucetConfig,
            ...e.overrides,
            HEADERS: {
                ...s.clientConfig?.HEADERS,
                ...s.faucetConfig?.HEADERS
            }
        }
    });
}
async function a(e) {
    return o({
        ...e,
        type: "Pepper"
    });
}
async function m(e) {
    return o({
        ...e,
        type: "Prover"
    });
}
;
 //# sourceMappingURL=chunk-4AI7KQQ7.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SJDCGNWU.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>d),
    "b": (()=>C),
    "c": (()=>a),
    "d": (()=>u),
    "e": (()=>h),
    "f": (()=>T)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UL777LTI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4AI7KQQ7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7EER7GWV.mjs [app-client] (ecmascript)");
;
;
;
async function d(o) {
    let { aptosConfig: s } = o, { data: e } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: s,
        originMethod: "getLedgerInfo",
        path: ""
    });
    return e;
}
async function C(o) {
    let { aptosConfig: s, limit: e } = o;
    return (await a({
        aptosConfig: s,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
            variables: {
                limit: e
            }
        },
        originMethod: "getChainTopUserTransactions"
    })).user_transactions;
}
async function a(o) {
    let { aptosConfig: s, query: e, originMethod: t } = o, { data: r } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: s,
        originMethod: t ?? "queryIndexer",
        path: "",
        body: e,
        overrides: {
            WITH_CREDENTIALS: !1
        }
    });
    return r;
}
async function u(o) {
    let { aptosConfig: s } = o;
    return (await a({
        aptosConfig: s,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"]
        },
        originMethod: "getProcessorStatuses"
    })).processor_status;
}
async function h(o) {
    let s = await u({
        aptosConfig: o.aptosConfig
    });
    return BigInt(s[0].last_success_version);
}
async function T(o) {
    let { aptosConfig: s, processorType: e } = o;
    return (await a({
        aptosConfig: s,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"],
            variables: {
                where_condition: {
                    processor: {
                        _eq: e
                    }
                }
            }
        },
        originMethod: "getProcessorStatus"
    })).processor_status[0];
}
;
 //# sourceMappingURL=chunk-SJDCGNWU.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-M3AO73ZL.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>b),
    "b": (()=>f),
    "c": (()=>T)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SJDCGNWU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UL777LTI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4AI7KQQ7.mjs [app-client] (ecmascript)");
;
;
;
async function b(t) {
    let { aptosConfig: a, handle: e, data: o, options: r } = t;
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: a,
        originMethod: "getTableItem",
        path: `tables/${e}/item`,
        params: {
            ledger_version: r?.ledgerVersion
        },
        body: o
    })).data;
}
async function f(t) {
    let { aptosConfig: a, options: e } = t, o = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"],
        variables: {
            where_condition: e?.where,
            offset: e?.offset,
            limit: e?.limit,
            order_by: e?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: a,
        query: o,
        originMethod: "getTableItemsData"
    })).table_items;
}
async function T(t) {
    let { aptosConfig: a, options: e } = t, o = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"],
        variables: {
            where_condition: e?.where,
            offset: e?.offset,
            limit: e?.limit,
            order_by: e?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: a,
        query: o,
        originMethod: "getTableItemsMetadata"
    })).table_metadatas;
}
;
 //# sourceMappingURL=chunk-M3AO73ZL.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OLILO7VD.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t),
    "b": (()=>A),
    "c": (()=>o),
    "d": (()=>E),
    "e": (()=>R),
    "f": (()=>n),
    "g": (()=>T),
    "h": (()=>N),
    "i": (()=>C),
    "j": (()=>O),
    "k": (()=>a)
});
var t = ((S)=>(S.FULLNODE = "Fullnode", S.INDEXER = "Indexer", S.FAUCET = "Faucet", S.PEPPER = "Pepper", S.PROVER = "Prover", S))(t || {}), A = 2e5, o = 20, E = 20, R = "0x1::aptos_coin::AptosCoin", n = "0x000000000000000000000000000000000000000000000000000000000000000a", T = "APTOS::RawTransaction", N = "APTOS::RawTransactionWithData", C = "APTOS::AASigningData", O = ((_)=>(_.ACCOUNT_RESTORATION_PROCESSOR = "account_restoration_processor", _.ACCOUNT_TRANSACTION_PROCESSOR = "account_transactions_processor", _.DEFAULT = "default_processor", _.EVENTS_PROCESSOR = "events_processor", _.FUNGIBLE_ASSET_PROCESSOR = "fungible_asset_processor", _.STAKE_PROCESSOR = "stake_processor", _.TOKEN_V2_PROCESSOR = "token_v2_processor", _.USER_TRANSACTION_PROCESSOR = "user_transaction_processor", _.OBJECT_PROCESSOR = "objects_processor", _))(O || {}), a = /^https:\/\/securetoken\.google\.com\/[a-zA-Z0-9-_]+$/;
;
 //# sourceMappingURL=chunk-OLILO7VD.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-AMXZQPUQ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>H),
    "b": (()=>W),
    "c": (()=>O),
    "d": (()=>y),
    "e": (()=>q),
    "f": (()=>R),
    "g": (()=>z),
    "h": (()=>U),
    "i": (()=>m),
    "j": (()=>T),
    "k": (()=>X),
    "l": (()=>j)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SJDCGNWU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7EER7GWV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6WDVDEQZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OLILO7VD.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7DQDJ2SA.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
async function H(o) {
    let { aptosConfig: n, options: t } = o;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        aptosConfig: n,
        originMethod: "getTransactions",
        path: "transactions",
        params: {
            start: t?.offset,
            limit: t?.limit
        }
    });
}
async function W(o) {
    let { aptosConfig: n } = o;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(async ()=>{
        let { data: t } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: n,
            originMethod: "getGasPriceEstimation",
            path: "estimate_gas_price"
        });
        return t;
    }, `gas-price-${n.network}`, 1e3 * 60 * 5)();
}
async function O(o) {
    let { aptosConfig: n, ledgerVersion: t } = o, { data: s } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: n,
        originMethod: "getTransactionByVersion",
        path: `transactions/by_version/${t}`
    });
    return s;
}
async function y(o) {
    let { aptosConfig: n, transactionHash: t } = o, { data: s } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: n,
        path: `transactions/by_hash/${t}`,
        originMethod: "getTransactionByHash"
    });
    return s;
}
async function q(o) {
    let { aptosConfig: n, transactionHash: t } = o;
    try {
        return (await y({
            aptosConfig: n,
            transactionHash: t
        })).type === "pending_transaction";
    } catch (s) {
        if (s?.status === 404) return !0;
        throw s;
    }
}
async function R(o) {
    let { aptosConfig: n, transactionHash: t } = o, { data: s } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: n,
        path: `transactions/wait_by_hash/${t}`,
        originMethod: "longWaitForTransaction"
    });
    return s;
}
async function z(o) {
    let { aptosConfig: n, transactionHash: t, options: s } = o, r = s?.timeoutSecs ?? 20, u = s?.checkSuccess ?? !0, e = !0, p = 0, i, g, l = 200, h = 1.5;
    function c(a) {
        if (!(a instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]) || (g = a, a.status !== 404 && a.status >= 400 && a.status < 500)) throw a;
    }
    try {
        i = await y({
            aptosConfig: n,
            transactionHash: t
        }), e = i.type === "pending_transaction";
    } catch (a) {
        c(a);
    }
    if (e) {
        let a = Date.now();
        try {
            i = await R({
                aptosConfig: n,
                transactionHash: t
            }), e = i.type === "pending_transaction";
        } catch (w) {
            c(w);
        }
        p = (Date.now() - a) / 1e3;
    }
    for(; e && !(p >= r);){
        try {
            if (i = await y({
                aptosConfig: n,
                transactionHash: t
            }), e = i.type === "pending_transaction", !e) break;
        } catch (a) {
            c(a);
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(l), p += l / 1e3, l *= h;
    }
    if (i === void 0) throw g || new m(`Fetching transaction ${t} failed and timed out after ${r} seconds`, i);
    if (i.type === "pending_transaction") throw new m(`Transaction ${t} timed out in pending state after ${r} seconds`, i);
    if (!u) return i;
    if (!i.success) throw new T(`Transaction ${t} failed with an error: ${i.vm_status}`, i);
    return i;
}
async function U(o) {
    let { aptosConfig: n, processorType: t } = o, s = BigInt(o.minimumLedgerVersion), r = 3e3, u = new Date().getTime(), e = BigInt(-1);
    for(; e < s;){
        if (new Date().getTime() - u > r) throw new Error("waitForLastSuccessIndexerVersionSync timeout");
        if (t === void 0 ? e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
            aptosConfig: n
        }) : e = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
            aptosConfig: n,
            processorType: t
        })).last_success_version, e >= s) break;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(200);
    }
}
var m = class extends Error {
    constructor(n, t){
        super(n), this.lastSubmittedTransaction = t;
    }
}, T = class extends Error {
    constructor(n, t){
        super(n), this.transaction = t;
    }
};
async function X(o) {
    let { aptosConfig: n, ledgerVersion: t, options: s } = o, { data: r } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: n,
        originMethod: "getBlockByVersion",
        path: `blocks/by_version/${t}`,
        params: {
            with_transactions: s?.withTransactions
        }
    });
    return P({
        block: r,
        ...o
    });
}
async function j(o) {
    let { aptosConfig: n, blockHeight: t, options: s } = o, { data: r } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: n,
        originMethod: "getBlockByHeight",
        path: `blocks/by_height/${t}`,
        params: {
            with_transactions: s?.withTransactions
        }
    });
    return P({
        block: r,
        ...o
    });
}
async function P(o) {
    let { aptosConfig: n, block: t, options: s } = o;
    if (s?.withTransactions) {
        t.transactions = t.transactions ?? [];
        let r = t.transactions[t.transactions.length - 1], u = BigInt(t.first_version), e = BigInt(t.last_version), p = r?.version, i;
        if (p === void 0 ? i = u - 1n : i = BigInt(p), i === e) return t;
        let g = [], l = 100n;
        for(let c = i + 1n; c < e; c += BigInt(100))g.push(H({
            aptosConfig: n,
            options: {
                offset: c,
                limit: Math.min(Number(l), Number(e - c + 1n))
            }
        }));
        let h = await Promise.all(g);
        for (let c of h)t.transactions.push(...c);
    }
    return t;
}
;
 //# sourceMappingURL=chunk-AMXZQPUQ.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6OWBKU7N.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>i)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-AMXZQPUQ.mjs [app-client] (ecmascript)");
;
async function i(o) {
    o.minimumLedgerVersion !== void 0 && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])({
        aptosConfig: o.config,
        minimumLedgerVersion: o.minimumLedgerVersion,
        processorType: o.processorType
    });
}
;
 //# sourceMappingURL=chunk-6OWBKU7N.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WHSTLR3F.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$M3AO73ZL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-M3AO73ZL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6OWBKU7N.mjs [app-client] (ecmascript)");
;
;
var a = class {
    constructor(e){
        this.config = e;
    }
    async getTableItem(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$M3AO73ZL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getTableItemsData(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "default_processor"
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$M3AO73ZL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getTableItemsMetadata(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "default_processor"
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$M3AO73ZL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
            aptosConfig: this.config,
            ...e
        });
    }
};
;
 //# sourceMappingURL=chunk-WHSTLR3F.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-CW35YAMN.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FLZPUYXQ.mjs [app-client] (ecmascript)");
;
function t(i, r) {
    let l = r.bcsToBytes(), a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](l);
    return i.deserialize(a);
}
;
 //# sourceMappingURL=chunk-CW35YAMN.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>s),
    "b": (()=>o),
    "c": (()=>p),
    "d": (()=>a),
    "e": (()=>n),
    "f": (()=>e),
    "g": (()=>r),
    "h": (()=>l)
});
var s = {
    mainnet: "https://api.mainnet.aptoslabs.com/v1/graphql",
    testnet: "https://api.testnet.aptoslabs.com/v1/graphql",
    devnet: "https://api.devnet.aptoslabs.com/v1/graphql",
    local: "http://127.0.0.1:8090/v1/graphql"
}, o = {
    mainnet: "https://api.mainnet.aptoslabs.com/v1",
    testnet: "https://api.testnet.aptoslabs.com/v1",
    devnet: "https://api.devnet.aptoslabs.com/v1",
    local: "http://127.0.0.1:8080/v1"
}, p = {
    devnet: "https://faucet.devnet.aptoslabs.com",
    local: "http://127.0.0.1:8081"
}, a = {
    mainnet: "https://api.mainnet.aptoslabs.com/keyless/pepper/v0",
    testnet: "https://api.testnet.aptoslabs.com/keyless/pepper/v0",
    devnet: "https://api.devnet.aptoslabs.com/keyless/pepper/v0",
    local: "https://api.devnet.aptoslabs.com/keyless/pepper/v0"
}, n = {
    mainnet: "https://api.mainnet.aptoslabs.com/keyless/prover/v0",
    testnet: "https://api.testnet.aptoslabs.com/keyless/prover/v0",
    devnet: "https://api.devnet.aptoslabs.com/keyless/prover/v0",
    local: "https://api.devnet.aptoslabs.com/keyless/prover/v0"
}, e = ((t)=>(t.MAINNET = "mainnet", t.TESTNET = "testnet", t.DEVNET = "devnet", t.LOCAL = "local", t.CUSTOM = "custom", t))(e || {}), r = {
    mainnet: 1,
    testnet: 2,
    local: 4
}, l = {
    mainnet: "mainnet",
    testnet: "testnet",
    devnet: "devnet",
    local: "local",
    custom: "custom"
};
;
 //# sourceMappingURL=chunk-4RXKALLC.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RCSJFTST.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OLILO7VD.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$aptos$2d$client$40$2$2e$0$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$aptos$2d$client$2f$dist$2f$browser$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+aptos-client@2.0.0_got@11.8.6/node_modules/@aptos-labs/aptos-client/dist/browser/index.browser.mjs [app-client] (ecmascript)");
;
;
;
var a = class {
    constructor(e){
        if (e?.fullnode || e?.indexer || e?.faucet || e?.pepper || e?.prover) {
            if (e?.network === "custom") console.info("Note: using CUSTOM network will require queries to lookup ChainId");
            else if (!e?.network) throw new Error("Custom endpoints require a network to be specified");
        }
        this.network = e?.network ?? "devnet", this.fullnode = e?.fullnode, this.faucet = e?.faucet, this.pepper = e?.pepper, this.prover = e?.prover, this.indexer = e?.indexer, this.client = e?.client ?? {
            provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$aptos$2d$client$40$2$2e$0$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$aptos$2d$client$2f$dist$2f$browser$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }, this.clientConfig = e?.clientConfig ?? {}, this.fullnodeConfig = e?.fullnodeConfig ?? {}, this.indexerConfig = e?.indexerConfig ?? {}, this.faucetConfig = e?.faucetConfig ?? {}, this.transactionGenerationConfig = e?.transactionGenerationConfig ?? {}, this.pluginConfig = e?.pluginSettings ? {
            ...e.pluginSettings,
            IGNORE_TRANSACTION_SUBMITTER: !1
        } : void 0;
    }
    getRequestUrl(e) {
        switch(e){
            case "Fullnode":
                if (this.fullnode !== void 0) return this.fullnode;
                if (this.network === "custom") throw new Error("Please provide a custom full node url");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"][this.network];
            case "Faucet":
                if (this.faucet !== void 0) return this.faucet;
                if (this.network === "testnet") throw new Error("There is no way to programmatically mint testnet APT, you must use the minting site at https://aptos.dev/network/faucet");
                if (this.network === "mainnet") throw new Error("There is no mainnet faucet");
                if (this.network === "custom") throw new Error("Please provide a custom faucet url");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"][this.network];
            case "Indexer":
                if (this.indexer !== void 0) return this.indexer;
                if (this.network === "custom") throw new Error("Please provide a custom indexer url");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"][this.network];
            case "Pepper":
                if (this.pepper !== void 0) return this.pepper;
                if (this.network === "custom") throw new Error("Please provide a custom pepper service url");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"][this.network];
            case "Prover":
                if (this.prover !== void 0) return this.prover;
                if (this.network === "custom") throw new Error("Please provide a custom prover service url");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"][this.network];
            default:
                throw Error(`apiType ${e} is not supported`);
        }
    }
    isPepperServiceRequest(e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"][this.network] === e;
    }
    isProverServiceRequest(e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"][this.network] === e;
    }
    getDefaultMaxGasAmount() {
        return this.transactionGenerationConfig?.defaultMaxGasAmount ?? 2e5;
    }
    getDefaultTxnExpirySecFromNow() {
        return this.transactionGenerationConfig?.defaultTxnExpirySecFromNow ?? 20;
    }
    setIgnoreTransactionSubmitter(e) {
        this.pluginConfig && (this.pluginConfig.IGNORE_TRANSACTION_SUBMITTER = e);
    }
    getTransactionSubmitter() {
        if (this.pluginConfig !== void 0 && this.pluginConfig.IGNORE_TRANSACTION_SUBMITTER !== !0) return this.pluginConfig.TRANSACTION_SUBMITTER;
    }
};
;
 //# sourceMappingURL=chunk-RCSJFTST.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MT2RJ7H3.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
var t = class a extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e).toUint8Array();
    }
    serialize(e) {
        e.serializeFixedBytes(this.value);
    }
    serializeForEntryFunction(e) {
        e.serialize(this);
    }
    serializeForScriptFunction(e) {
        e.serialize(this);
    }
    static deserialize(e, s) {
        let o = e.deserializeFixedBytes(s);
        return new a(o);
    }
};
;
 //# sourceMappingURL=chunk-MT2RJ7H3.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TOBQ5UE6.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MT2RJ7H3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
;
;
var t = class l extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](e);
    }
    serialize(e) {
        e.serialize(this.value);
    }
    serializeForEntryFunction(e) {
        e.serializeU32AsUleb128(this.value.value.length), e.serialize(this);
    }
    static deserialize(e, s) {
        let a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e, s);
        return new l(a.value);
    }
};
;
 //# sourceMappingURL=chunk-TOBQ5UE6.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MCFQE4GC.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>H),
    "B": (()=>j),
    "C": (()=>K),
    "D": (()=>L),
    "E": (()=>$),
    "F": (()=>z),
    "G": (()=>E),
    "H": (()=>U),
    "I": (()=>W),
    "J": (()=>I),
    "K": (()=>F),
    "L": (()=>A),
    "a": (()=>u),
    "b": (()=>y),
    "c": (()=>d),
    "d": (()=>c),
    "e": (()=>l),
    "f": (()=>_),
    "g": (()=>x),
    "h": (()=>h),
    "i": (()=>m),
    "j": (()=>v),
    "k": (()=>S),
    "l": (()=>R),
    "m": (()=>B),
    "n": (()=>b),
    "o": (()=>M),
    "p": (()=>k),
    "q": (()=>f),
    "r": (()=>C),
    "s": (()=>T),
    "t": (()=>G),
    "u": (()=>O),
    "v": (()=>N),
    "w": (()=>P),
    "x": (()=>D),
    "y": (()=>q),
    "z": (()=>w)
});
var u = ((e)=>(e.JSON = "application/json", e.BCS = "application/x-bcs", e.BCS_SIGNED_TRANSACTION = "application/x.aptos.signed_transaction+bcs", e.BCS_VIEW_FUNCTION = "application/x.aptos.view_function+bcs", e))(u || {}), y = ((r)=>(r[r.Bool = 0] = "Bool", r[r.U8 = 1] = "U8", r[r.U64 = 2] = "U64", r[r.U128 = 3] = "U128", r[r.Address = 4] = "Address", r[r.Signer = 5] = "Signer", r[r.Vector = 6] = "Vector", r[r.Struct = 7] = "Struct", r[r.U16 = 8] = "U16", r[r.U32 = 9] = "U32", r[r.U256 = 10] = "U256", r[r.Reference = 254] = "Reference", r[r.Generic = 255] = "Generic", r))(y || {}), d = ((s)=>(s[s.U8 = 0] = "U8", s[s.U64 = 1] = "U64", s[s.U128 = 2] = "U128", s[s.Address = 3] = "Address", s[s.U8Vector = 4] = "U8Vector", s[s.Bool = 5] = "Bool", s[s.U16 = 6] = "U16", s[s.U32 = 7] = "U32", s[s.U256 = 8] = "U256", s[s.Serialized = 9] = "Serialized", s))(d || {}), c = ((e)=>(e[e.Script = 0] = "Script", e[e.EntryFunction = 2] = "EntryFunction", e[e.Multisig = 3] = "Multisig", e[e.Payload = 4] = "Payload", e))(c || {}), l = ((o)=>(o[o.V1 = 0] = "V1", o))(l || {}), _ = ((i)=>(i[i.Script = 0] = "Script", i[i.EntryFunction = 1] = "EntryFunction", i[i.Empty = 2] = "Empty", i))(_ || {}), x = ((o)=>(o[o.V1 = 0] = "V1", o))(x || {}), h = ((p)=>(p[p.MultiAgentTransaction = 0] = "MultiAgentTransaction", p[p.FeePayerTransaction = 1] = "FeePayerTransaction", p))(h || {}), m = ((t)=>(t[t.Ed25519 = 0] = "Ed25519", t[t.MultiEd25519 = 1] = "MultiEd25519", t[t.MultiAgent = 2] = "MultiAgent", t[t.FeePayer = 3] = "FeePayer", t[t.SingleSender = 4] = "SingleSender", t))(m || {}), v = ((a)=>(a[a.Ed25519 = 0] = "Ed25519", a[a.MultiEd25519 = 1] = "MultiEd25519", a[a.SingleKey = 2] = "SingleKey", a[a.MultiKey = 3] = "MultiKey", a[a.NoAccountAuthenticator = 4] = "NoAccountAuthenticator", a[a.Abstraction = 5] = "Abstraction", a))(v || {}), S = ((i)=>(i.Ed25519 = "ed25519", i.Secp256k1 = "secp256k1", i.Secp256r1 = "secp256r1", i))(S || {}), R = ((t)=>(t[t.Ed25519 = 0] = "Ed25519", t[t.Secp256k1 = 1] = "Secp256k1", t[t.Secp256r1 = 2] = "Secp256r1", t[t.Keyless = 3] = "Keyless", t[t.FederatedKeyless = 4] = "FederatedKeyless", t))(R || {});
function B(n) {
    switch(n){
        case 0:
            return "ed25519";
        case 1:
            return "secp256k1";
        case 2:
            return "secp256r1";
        case 3:
            return "keyless";
        case 4:
            return "federated_keyless";
        default:
            throw new Error("Unknown public key variant");
    }
}
var b = ((e)=>(e[e.Ed25519 = 0] = "Ed25519", e[e.Secp256k1 = 1] = "Secp256k1", e[e.WebAuthn = 2] = "WebAuthn", e[e.Keyless = 3] = "Keyless", e))(b || {}), M = ((o)=>(o[o.Ed25519 = 0] = "Ed25519", o))(M || {}), k = ((o)=>(o[o.Ed25519 = 0] = "Ed25519", o))(k || {}), f = ((o)=>(o[o.ZkProof = 0] = "ZkProof", o))(f || {}), C = ((o)=>(o[o.Groth16 = 0] = "Groth16", o))(C || {}), T = ((g)=>(g.Pending = "pending_transaction", g.User = "user_transaction", g.Genesis = "genesis_transaction", g.BlockMetadata = "block_metadata_transaction", g.StateCheckpoint = "state_checkpoint_transaction", g.Validator = "validator_transaction", g.BlockEpilogue = "block_epilogue_transaction", g))(T || {});
function G(n) {
    return n.type === "pending_transaction";
}
function O(n) {
    return n.type === "user_transaction";
}
function N(n) {
    return n.type === "genesis_transaction";
}
function P(n) {
    return n.type === "block_metadata_transaction";
}
function D(n) {
    return n.type === "state_checkpoint_transaction";
}
function q(n) {
    return n.type === "validator_transaction";
}
function w(n) {
    return n.type === "block_epilogue_transaction";
}
function H(n) {
    return "signature" in n && n.type === "ed25519_signature";
}
function j(n) {
    return "signature" in n && n.signature === "secp256k1_ecdsa_signature";
}
function K(n) {
    return n.type === "multi_agent_signature";
}
function L(n) {
    return n.type === "fee_payer_signature";
}
function $(n) {
    return n.type === "multi_ed25519_signature";
}
function z(n) {
    return n.type === "single_sender";
}
var E = ((i)=>(i.PRIVATE = "private", i.PUBLIC = "public", i.FRIEND = "friend", i))(E || {}), U = ((e)=>(e.STORE = "store", e.DROP = "drop", e.KEY = "key", e.COPY = "copy", e))(U || {}), W = ((p)=>(p.VALIDATOR = "validator", p.FULL_NODE = "full_node", p))(W || {}), I = ((e)=>(e[e.Ed25519 = 0] = "Ed25519", e[e.MultiEd25519 = 1] = "MultiEd25519", e[e.SingleKey = 2] = "SingleKey", e[e.MultiKey = 3] = "MultiKey", e))(I || {}), F = ((p)=>(p[p.Ed25519 = 0] = "Ed25519", p[p.Secp256k1Ecdsa = 2] = "Secp256k1Ecdsa", p))(F || {}), A = ((t)=>(t[t.DeriveAuid = 251] = "DeriveAuid", t[t.DeriveObjectAddressFromObject = 252] = "DeriveObjectAddressFromObject", t[t.DeriveObjectAddressFromGuid = 253] = "DeriveObjectAddressFromGuid", t[t.DeriveObjectAddressFromSeed = 254] = "DeriveObjectAddressFromSeed", t[t.DeriveResourceAccountAddress = 255] = "DeriveResourceAccountAddress", t))(A || {});
;
 //# sourceMappingURL=chunk-MCFQE4GC.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "$": (()=>yt),
    "$a": (()=>dl),
    "$b": (()=>Qa),
    "$c": (()=>Ss),
    "$d": (()=>la),
    "A": (()=>Qc),
    "Aa": (()=>Je),
    "Ab": (()=>Vo),
    "Ac": (()=>is),
    "Ad": (()=>qs),
    "B": (()=>G),
    "Ba": (()=>qt),
    "Bb": (()=>Hr),
    "Bc": (()=>os),
    "Bd": (()=>js),
    "C": (()=>Ke),
    "Ca": (()=>pn),
    "Cb": (()=>sr),
    "Cc": (()=>ss),
    "Cd": (()=>Qs),
    "D": (()=>He),
    "Da": (()=>ln),
    "Db": (()=>Lr),
    "Dc": (()=>as),
    "Dd": (()=>Kn),
    "E": (()=>Le),
    "Ea": (()=>Qn),
    "Eb": (()=>Ma),
    "Ec": (()=>cs),
    "Ed": (()=>xn),
    "F": (()=>x),
    "Fa": (()=>ft),
    "Fb": (()=>$r),
    "Fc": (()=>gA),
    "Fd": (()=>Js),
    "G": (()=>D),
    "Ga": (()=>Wt),
    "Gb": (()=>qr),
    "Gc": (()=>ci),
    "Gd": (()=>Zs),
    "H": (()=>xe),
    "Ha": (()=>gn),
    "Hb": (()=>Wr),
    "Hc": (()=>us),
    "Hd": (()=>pt),
    "I": (()=>B),
    "Ia": (()=>jt),
    "Ib": (()=>jr),
    "Ic": (()=>ds),
    "Id": (()=>Ic),
    "J": (()=>Ae),
    "Ja": (()=>yn),
    "Jb": (()=>Qr),
    "Jc": (()=>ui),
    "Jd": (()=>Ys),
    "K": (()=>Z),
    "Ka": (()=>Jn),
    "Kb": (()=>Jr),
    "Kc": (()=>ps),
    "Kd": (()=>Tb),
    "L": (()=>Ie),
    "La": (()=>At),
    "Lb": (()=>Ho),
    "Lc": (()=>yA),
    "Ld": (()=>Ec),
    "M": (()=>Bt),
    "Ma": (()=>he),
    "Mb": (()=>_),
    "Mc": (()=>gs),
    "Md": (()=>Xs),
    "N": (()=>ii),
    "Na": (()=>Zn),
    "Nb": (()=>Lo),
    "Nc": (()=>ys),
    "Nd": (()=>ea),
    "O": (()=>es),
    "Oa": (()=>ht),
    "Ob": (()=>ar),
    "Oc": (()=>yr),
    "Od": (()=>li),
    "P": (()=>Jc),
    "Pa": (()=>bt),
    "Pb": (()=>Va),
    "Pc": (()=>di),
    "Pd": (()=>ta),
    "Q": (()=>b),
    "Qa": (()=>Ze),
    "Qb": (()=>Yr),
    "Qc": (()=>ae),
    "Qd": (()=>na),
    "R": (()=>L),
    "Ra": (()=>wt),
    "Rb": (()=>hm),
    "Rc": (()=>ms),
    "Rd": (()=>ra),
    "S": (()=>C),
    "Sa": (()=>Qt),
    "Sb": (()=>$o),
    "Sc": (()=>fs),
    "Sd": (()=>ia),
    "T": (()=>ed),
    "Ta": (()=>Tt),
    "Tb": (()=>qo),
    "Tc": (()=>As),
    "Td": (()=>oa),
    "U": (()=>td),
    "Ua": (()=>St),
    "Ub": (()=>Xr),
    "Uc": (()=>hs),
    "Ud": (()=>sa),
    "V": (()=>q),
    "Va": (()=>ct),
    "Vb": (()=>Kt),
    "Vc": (()=>xt),
    "Vd": (()=>aa),
    "W": (()=>Ee),
    "Wa": (()=>Ye),
    "Wb": (()=>ur),
    "Wc": (()=>bn),
    "Wd": (()=>ca),
    "X": (()=>$e),
    "Xa": (()=>Yn),
    "Xb": (()=>$a),
    "Xc": (()=>bs),
    "Xd": (()=>ua),
    "Y": (()=>ie),
    "Ya": (()=>Xn),
    "Yb": (()=>Wo),
    "Yc": (()=>Tn),
    "Yd": (()=>da),
    "Z": (()=>De),
    "Za": (()=>er),
    "Zb": (()=>qa),
    "Zc": (()=>ws),
    "Zd": (()=>En),
    "_": (()=>Vt),
    "_a": (()=>Oe),
    "_b": (()=>ja),
    "_c": (()=>Ts),
    "_d": (()=>pa),
    "a": (()=>ut),
    "aa": (()=>Wn),
    "ab": (()=>Ce),
    "ac": (()=>ei),
    "ad": (()=>Ps),
    "ae": (()=>ga),
    "b": (()=>Ne),
    "ba": (()=>dn),
    "bb": (()=>Y),
    "bc": (()=>jo),
    "bd": (()=>Ks),
    "be": (()=>Cn),
    "c": (()=>Oc),
    "ca": (()=>O),
    "cb": (()=>Mr),
    "cc": (()=>en),
    "cd": (()=>rn),
    "ce": (()=>Ar),
    "d": (()=>mi),
    "da": (()=>V),
    "db": (()=>se),
    "dc": (()=>ti),
    "dd": (()=>xs),
    "de": (()=>on),
    "e": (()=>Nc),
    "ea": (()=>oe),
    "eb": (()=>Xe),
    "ec": (()=>Qo),
    "ed": (()=>Is),
    "ee": (()=>hr),
    "f": (()=>Gc),
    "fa": (()=>qe),
    "fb": (()=>Pt),
    "fc": (()=>$m),
    "fd": (()=>Es),
    "fe": (()=>br),
    "g": (()=>Mc),
    "ga": (()=>We),
    "gb": (()=>nr),
    "gc": (()=>A),
    "gd": (()=>Cs),
    "ge": (()=>ya),
    "h": (()=>Bc),
    "ha": (()=>W),
    "hb": (()=>me),
    "hc": (()=>Ya),
    "hd": (()=>vs),
    "he": (()=>ma),
    "i": (()=>Vc),
    "ia": (()=>je),
    "ib": (()=>tr),
    "ic": (()=>Xa),
    "id": (()=>_s),
    "ie": (()=>wr),
    "j": (()=>Hc),
    "ja": (()=>Qe),
    "jb": (()=>be),
    "jc": (()=>Zo),
    "jd": (()=>Us),
    "je": (()=>Tr),
    "k": (()=>E),
    "ka": (()=>R),
    "kb": (()=>ve),
    "kc": (()=>dr),
    "kd": (()=>ks),
    "ke": (()=>vn),
    "l": (()=>Ti),
    "la": (()=>mt),
    "lb": (()=>tt),
    "lc": (()=>pr),
    "ld": (()=>Fs),
    "le": (()=>Sr),
    "m": (()=>Pr),
    "ma": (()=>jn),
    "mb": (()=>mn),
    "mc": (()=>ni),
    "md": (()=>zs),
    "me": (()=>yi),
    "n": (()=>Br),
    "na": (()=>N),
    "nb": (()=>ko),
    "nc": (()=>hn),
    "nd": (()=>Ds),
    "ne": (()=>fa),
    "o": (()=>re),
    "oa": (()=>v),
    "ob": (()=>Do),
    "oc": (()=>lr),
    "od": (()=>Rs),
    "oe": (()=>Aa),
    "p": (()=>Yt),
    "pa": (()=>f),
    "pb": (()=>rr),
    "pc": (()=>Yo),
    "pd": (()=>Os),
    "pe": (()=>_n),
    "q": (()=>lt),
    "qa": (()=>Re),
    "qb": (()=>Oo),
    "qc": (()=>Xo),
    "qd": (()=>Ns),
    "qe": (()=>Fc),
    "r": (()=>Ai),
    "ra": (()=>Qd),
    "rb": (()=>Na),
    "rc": (()=>tn),
    "rd": (()=>Gs),
    "re": (()=>ha),
    "s": (()=>sn),
    "sa": (()=>I),
    "sb": (()=>$),
    "sc": (()=>ts),
    "sd": (()=>Ms),
    "se": (()=>Un),
    "t": (()=>ye),
    "ta": (()=>Jd),
    "tb": (()=>_e),
    "tc": (()=>ns),
    "td": (()=>Bs),
    "te": (()=>J),
    "u": (()=>hi),
    "ua": (()=>ge),
    "ub": (()=>Mo),
    "uc": (()=>cr),
    "ud": (()=>Vs),
    "v": (()=>bi),
    "va": (()=>Ka),
    "vb": (()=>nt),
    "vc": (()=>oi),
    "vd": (()=>Sn),
    "w": (()=>Xt),
    "wa": (()=>at),
    "wb": (()=>Ga),
    "wc": (()=>si),
    "wd": (()=>Ls),
    "x": (()=>et),
    "xa": (()=>Ht),
    "xb": (()=>ir),
    "xc": (()=>rs),
    "xd": (()=>Pn),
    "y": (()=>Wc),
    "ya": (()=>Lt),
    "yb": (()=>or),
    "yc": (()=>ai),
    "yd": (()=>mr),
    "z": (()=>wi),
    "za": (()=>$t),
    "zb": (()=>Bo),
    "zc": (()=>nn),
    "zd": (()=>$s)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2XQKGWHQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-2XQKGWHQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XKUIMGKU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XKUIMGKU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-N6YTF76Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-A5L76YP7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$I7XT6L7S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-I7XT6L7S.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JABP65XD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JABP65XD.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GOXRBEIJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-2PASUPUO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XJJVJOX5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XJJVJOX5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EF4FA5I6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EF4FA5I6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WCMW2L3P.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WSR5EBJM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C3Q23D22.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QREVMGQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-QREVMGQZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FGFLPH5K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WHSTLR3F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WHSTLR3F.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$M3AO73ZL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-M3AO73ZL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6OWBKU7N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-AMXZQPUQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SJDCGNWU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UL777LTI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4AI7KQQ7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7EER7GWV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$CW35YAMN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-CW35YAMN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6WDVDEQZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RCSJFTST$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RCSJFTST.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OLILO7VD.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7DQDJ2SA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HNBVYE3N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HNBVYE3N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Q4W3WJ2U.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TOBQ5UE6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TOBQ5UE6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MT2RJ7H3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ORMOQWWH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MCFQE4GC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MCFQE4GC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FLZPUYXQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KDMSOCZY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.9.0/node_modules/@noble/curves/esm/ed25519.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jwt-decode@4.0.0/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.9.0/node_modules/@noble/curves/esm/bn254.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.9.0/node_modules/@noble/curves/esm/abstract/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$base64$40$3$2e$7$2e$8$2f$node_modules$2f$js$2d$base64$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-base64@3.7.8/node_modules/js-base64/base64.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+curves@1.9.0/node_modules/@noble/curves/esm/secp256k1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$bip32$40$1$2e$7$2e$0$2f$node_modules$2f40$scure$2f$bip32$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@scure+bip32@1.7.0/node_modules/@scure/bip32/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Pe = class Pe extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t){
        super();
        this.keyType = "secp256k1";
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t), { length: i } = r.toUint8Array();
        if (i === Pe.LENGTH) this.key = r;
        else if (i === Pe.COMPRESSED_LENGTH) {
            let o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].ProjectivePoint.fromHex(r.toUint8Array());
            this.key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(o.toRawBytes(!1));
        } else throw new Error(`PublicKey length should be ${Pe.LENGTH} or ${Pe.COMPRESSED_LENGTH}, received ${i}`);
    }
    verifySignature(t) {
        let { message: r, signature: i } = t, o = Bt(r), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(o).toUint8Array(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(s), c = i.toUint8Array();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].verify(c, a, this.key.toUint8Array(), {
            lowS: !0
        });
    }
    async verifySignatureAsync(t) {
        return this.verifySignature(t);
    }
    toUint8Array() {
        return this.key.toUint8Array();
    }
    serialize(t) {
        t.serializeBytes(this.key.toUint8Array());
    }
    deserialize(t) {
        let r = t.deserializeBytes();
        return new Le(r);
    }
    static deserialize(t) {
        let r = t.deserializeBytes();
        return new Pe(r);
    }
    static isPublicKey(t) {
        return t instanceof Pe;
    }
    static isInstance(t) {
        return "key" in t && t.key?.data?.length === Pe.LENGTH && "keyType" in t && t.keyType === "secp256k1";
    }
};
Pe.LENGTH = 65, Pe.COMPRESSED_LENGTH = 33;
var Ke = Pe, ze = class ze extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super();
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].parseHexInput(e, "secp256k1", t);
        if (r.toUint8Array().length !== ze.LENGTH) throw new Error(`PrivateKey length should be ${ze.LENGTH}`);
        this.key = r;
    }
    static generate() {
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].utils.randomPrivateKey();
        return new ze(e, !1);
    }
    static fromDerivationPath(e, t) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e)) throw new Error(`Invalid derivation path ${e}`);
        return ze.fromDerivationPathInner(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(t));
    }
    static fromDerivationPathInner(e, t) {
        let { privateKey: r } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$scure$2b$bip32$40$1$2e$7$2e$0$2f$node_modules$2f40$scure$2f$bip32$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDKey"].fromMasterSeed(t).derive(e);
        if (r === null) throw new Error("Invalid key");
        return new ze(r, !1);
    }
    sign(e) {
        let t = Bt(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(r.toUint8Array()), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].sign(i, this.key.toUint8Array(), {
            lowS: !0
        });
        return new Le(o.toCompactRawBytes());
    }
    publicKey() {
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].getPublicKey(this.key.toUint8Array(), !1);
        return new Ke(e);
    }
    toUint8Array() {
        return this.key.toUint8Array();
    }
    toString() {
        return this.toAIP80String();
    }
    toHexString() {
        return this.key.toString();
    }
    toAIP80String() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].formatPrivateKey(this.key.toString(), "secp256k1");
    }
    serialize(e) {
        e.serializeBytes(this.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new ze(t, !1);
    }
    static isPrivateKey(e) {
        return e instanceof ze;
    }
};
ze.LENGTH = 32;
var He = ze, Mt = class Mt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
        if (t.toUint8Array().length !== Mt.LENGTH) throw new Error(`Signature length should be ${Mt.LENGTH}, received ${t.toUint8Array().length}`);
        this.data = t;
    }
    toUint8Array() {
        return this.data.toUint8Array();
    }
    serialize(e) {
        e.serializeBytes(this.data.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new Mt(t);
    }
};
Mt.LENGTH = 64;
var Le = Mt;
var x = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(e){
        if (super(), this.publicKey = e, e instanceof b) this.variant = 0;
        else if (e instanceof Ke) this.variant = 1;
        else if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$I7XT6L7S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]) this.variant = 2;
        else if (e instanceof E) this.variant = 3;
        else if (e instanceof G) this.variant = 4;
        else throw new Error("Unsupported public key type");
    }
    verifySignature(e) {
        let { message: t, signature: r } = e;
        if (this.publicKey instanceof E) throw new Error("Use verifySignatureAsync to verify Keyless signatures");
        return this.publicKey.verifySignature({
            message: t,
            signature: r.signature
        });
    }
    async verifySignatureAsync(e) {
        if (!(e.signature instanceof D)) {
            if (e.options?.throwErrorWithReason) throw new Error("Signature must be an instance of AnySignature");
            return !1;
        }
        return await this.publicKey.verifySignatureAsync({
            ...e,
            signature: e.signature.signature
        });
    }
    authKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 2,
            input: this.toUint8Array()
        });
    }
    toUint8Array() {
        return this.bcsToBytes();
    }
    serialize(e) {
        e.serializeU32AsUleb128(this.variant), this.publicKey.serialize(e);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32(), r;
        switch(t){
            case 0:
                r = b.deserialize(e);
                break;
            case 1:
                r = Ke.deserialize(e);
                break;
            case 2:
                r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$I7XT6L7S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e);
                break;
            case 3:
                r = E.deserialize(e);
                break;
            case 4:
                r = G.deserialize(e);
                break;
            default:
                throw new Error(`Unknown variant index for AnyPublicKey: ${t}`);
        }
        return new n(r);
    }
    static isPublicKey(e) {
        return e instanceof n;
    }
    isEd25519() {
        return this.publicKey instanceof b;
    }
    isSecp256k1PublicKey() {
        return this.publicKey instanceof Ke;
    }
    static isInstance(e) {
        return "publicKey" in e && "variant" in e;
    }
}, D = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        if (super(), this.signature = e, e instanceof C) this.variant = 0;
        else if (e instanceof Le) this.variant = 1;
        else if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$I7XT6L7S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]) this.variant = 2;
        else if (e instanceof re) this.variant = 3;
        else throw new Error("Unsupported signature type");
    }
    toUint8Array() {
        return console.warn("[Aptos SDK] Calls to AnySignature.toUint8Array() will soon return the underlying signature bytes. Use AnySignature.bcsToBytes() instead."), this.bcsToBytes();
    }
    serialize(e) {
        e.serializeU32AsUleb128(this.variant), this.signature.serialize(e);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32(), r;
        switch(t){
            case 0:
                r = C.deserialize(e);
                break;
            case 1:
                r = Le.deserialize(e);
                break;
            case 2:
                r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$I7XT6L7S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].deserialize(e);
                break;
            case 3:
                r = re.deserialize(e);
                break;
            default:
                throw new Error(`Unknown variant index for AnySignature: ${t}`);
        }
        return new n(r);
    }
    static isInstance(e) {
        return "signature" in e && typeof e.signature == "object" && e.signature !== null && "toUint8Array" in e.signature;
    }
};
function Pa(n) {
    let e = n;
    return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >> 24;
}
var $n = 3, xe = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(e){
        super(), this.publicKeys = e.publicKeys;
    }
    createBitmap(e) {
        let { bits: t } = e, r = 128, i = new Uint8Array([
            0,
            0,
            0,
            0
        ]), o = new Set;
        return t.forEach((s, a)=>{
            if (a + 1 > this.publicKeys.length) throw new Error(`Signature index ${a + 1} is out of public keys range, ${this.publicKeys.length}.`);
            if (o.has(s)) throw new Error(`Duplicate bit ${s} detected.`);
            o.add(s);
            let c = Math.floor(s / 8), d = i[c];
            d |= r >> s % 8, i[c] = d;
        }), i;
    }
    getIndex(e) {
        let t = this.publicKeys.findIndex((r)=>r.toString() === e.toString());
        if (t !== -1) return t;
        throw new Error(`Public key ${e} not found in multi key set ${this.publicKeys}`);
    }
}, B = class n extends xe {
    constructor(e){
        let { publicKeys: t, signaturesRequired: r } = e;
        if (super({
            publicKeys: t
        }), r < 1) throw new Error("The number of required signatures needs to be greater than 0");
        if (t.length < r) throw new Error(`Provided ${t.length} public keys is smaller than the ${r} required signatures`);
        if (this.publicKeys = t.map((i)=>i instanceof x ? i : new x(i)), r > $n && this.publicKeys.filter((o)=>o.variant === 3 || o.variant === 4).length > $n) throw new Error(`Construction of MultiKey with more than ${$n} keyless public keys is not allowed when signaturesRequired 
          is greater than ${$n}. This is because a maximum of 3 keyless signatures are supported for a 
          K-of-N MultiKey transaction.`);
        this.signaturesRequired = r;
    }
    getSignaturesRequired() {
        return this.signaturesRequired;
    }
    verifySignature(e) {
        let { message: t, signature: r } = e;
        if (r.signatures.length !== this.signaturesRequired) throw new Error("The number of signatures does not match the number of required signatures");
        let i = r.bitMapToSignerIndices();
        for(let o = 0; o < r.signatures.length; o += 1){
            let s = r.signatures[o];
            if (!this.publicKeys[i[o]].verifySignature({
                message: t,
                signature: s
            })) return !1;
        }
        return !0;
    }
    async verifySignatureAsync(e) {
        let { signature: t } = e;
        try {
            if (!(t instanceof Ae)) throw new Error("Signature is not a MultiKeySignature");
            if (t.signatures.length !== this.signaturesRequired) throw new Error("The number of signatures does not match the number of required signatures");
            let r = t.bitMapToSignerIndices();
            for(let i = 0; i < t.signatures.length; i += 1){
                let o = t.signatures[i];
                if (!await this.publicKeys[r[i]].verifySignatureAsync({
                    ...e,
                    signature: o
                })) return !1;
            }
            return !0;
        } catch (r) {
            if (e.options?.throwErrorWithReason) throw r;
            return !1;
        }
    }
    authKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 3,
            input: this.toUint8Array()
        });
    }
    serialize(e) {
        e.serializeVector(this.publicKeys), e.serializeU8(this.signaturesRequired);
    }
    static deserialize(e) {
        let t = e.deserializeVector(x), r = e.deserializeU8();
        return new n({
            publicKeys: t,
            signaturesRequired: r
        });
    }
    getIndex(e) {
        let t = e instanceof x ? e : new x(e);
        return super.getIndex(t);
    }
    static isInstance(e) {
        return "publicKeys" in e && "signaturesRequired" in e;
    }
}, de = class de extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { signatures: t, bitmap: r } = e;
        if (t.length > de.MAX_SIGNATURES_SUPPORTED) throw new Error(`The number of signatures cannot be greater than ${de.MAX_SIGNATURES_SUPPORTED}`);
        if (this.signatures = t.map((o)=>o instanceof D ? o : new D(o)), !(r instanceof Uint8Array)) this.bitmap = de.createBitmap({
            bits: r
        });
        else {
            if (r.length !== de.BITMAP_LEN) throw new Error(`"bitmap" length should be ${de.BITMAP_LEN}`);
            this.bitmap = r;
        }
        let i = this.bitmap.reduce((o, s)=>o + Pa(s), 0);
        if (i !== this.signatures.length) throw new Error(`Expecting ${i} signatures from the bitmap, but got ${this.signatures.length}`);
    }
    static createBitmap(e) {
        let { bits: t } = e, r = 128, i = new Uint8Array([
            0,
            0,
            0,
            0
        ]), o = new Set;
        return t.forEach((s)=>{
            if (s >= de.MAX_SIGNATURES_SUPPORTED) throw new Error(`Cannot have a signature larger than ${de.MAX_SIGNATURES_SUPPORTED - 1}.`);
            if (o.has(s)) throw new Error("Duplicate bits detected.");
            o.add(s);
            let a = Math.floor(s / 8), c = i[a];
            c |= r >> s % 8, i[a] = c;
        }), i;
    }
    bitMapToSignerIndices() {
        let e = [];
        for(let t = 0; t < this.bitmap.length; t += 1){
            let r = this.bitmap[t];
            for(let i = 0; i < 8; i += 1)(r & 128 >> i) !== 0 && e.push(t * 8 + i);
        }
        return e;
    }
    serialize(e) {
        e.serializeVector(this.signatures), e.serializeBytes(this.bitmap);
    }
    static deserialize(e) {
        let t = e.deserializeVector(D), r = e.deserializeBytes();
        return new de({
            signatures: t,
            bitmap: r
        });
    }
};
de.BITMAP_LEN = 4, de.MAX_SIGNATURES_SUPPORTED = de.BITMAP_LEN * 8;
var Ae = de;
var pe = class pe extends xe {
    constructor(e){
        let { publicKeys: t, threshold: r } = e;
        if (super({
            publicKeys: t
        }), t.length > pe.MAX_KEYS || t.length < pe.MIN_KEYS) throw new Error(`Must have between ${pe.MIN_KEYS} and ${pe.MAX_KEYS} public keys, inclusive`);
        if (r < pe.MIN_THRESHOLD || r > t.length) throw new Error(`Threshold must be between ${pe.MIN_THRESHOLD} and ${t.length}, inclusive`);
        this.publicKeys = t, this.threshold = r;
    }
    getSignaturesRequired() {
        return this.threshold;
    }
    verifySignature(e) {
        let { message: t, signature: r } = e;
        if (!(r instanceof Ie)) return !1;
        let i = [];
        for(let o = 0; o < 4; o += 1)for(let s = 0; s < 8; s += 1)if ((r.bitmap[o] & 1 << 7 - s) !== 0) {
            let c = o * 8 + s;
            i.push(c);
        }
        if (i.length !== r.signatures.length) throw new Error("Bitmap and signatures length mismatch");
        if (i.length < this.threshold) throw new Error("Not enough signatures");
        for(let o = 0; o < i.length; o += 1)if (!this.publicKeys[i[o]].verifySignature({
            message: t,
            signature: r.signatures[o]
        })) return !1;
        return !0;
    }
    async verifySignatureAsync(e) {
        return this.verifySignature(e);
    }
    authKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 1,
            input: this.toUint8Array()
        });
    }
    toUint8Array() {
        let e = new Uint8Array(this.publicKeys.length * b.LENGTH + 1);
        return this.publicKeys.forEach((t, r)=>{
            e.set(t.toUint8Array(), r * b.LENGTH);
        }), e[this.publicKeys.length * b.LENGTH] = this.threshold, e;
    }
    serialize(e) {
        e.serializeBytes(this.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes(), r = t[t.length - 1], i = [];
        for(let o = 0; o < t.length - 1; o += b.LENGTH){
            let s = o;
            i.push(new b(t.subarray(s, s + b.LENGTH)));
        }
        return new pe({
            publicKeys: i,
            threshold: r
        });
    }
    static deserializeWithoutLength(e) {
        let t = e.remaining(), r = e.deserializeFixedBytes(t), i = r[r.length - 1], o = [];
        for(let s = 0; s < r.length - 1; s += b.LENGTH){
            let a = s;
            o.push(new b(r.subarray(a, a + b.LENGTH)));
        }
        return new pe({
            publicKeys: o,
            threshold: i
        });
    }
    getIndex(e) {
        return super.getIndex(e);
    }
};
pe.MAX_KEYS = 32, pe.MIN_KEYS = 2, pe.MIN_THRESHOLD = 1;
var Z = pe, le = class le extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { signatures: t, bitmap: r } = e;
        if (t.length > le.MAX_SIGNATURES_SUPPORTED) throw new Error(`The number of signatures cannot be greater than ${le.MAX_SIGNATURES_SUPPORTED}`);
        if (this.signatures = t, !(r instanceof Uint8Array)) this.bitmap = le.createBitmap({
            bits: r
        });
        else {
            if (r.length !== le.BITMAP_LEN) throw new Error(`"bitmap" length should be ${le.BITMAP_LEN}`);
            this.bitmap = r;
        }
    }
    toUint8Array() {
        let e = new Uint8Array(this.signatures.length * C.LENGTH + le.BITMAP_LEN);
        return this.signatures.forEach((t, r)=>{
            e.set(t.toUint8Array(), r * C.LENGTH);
        }), e.set(this.bitmap, this.signatures.length * C.LENGTH), e;
    }
    serialize(e) {
        e.serializeBytes(this.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes(), r = t.subarray(t.length - 4), i = [];
        for(let o = 0; o < t.length - r.length; o += C.LENGTH){
            let s = o;
            i.push(new C(t.subarray(s, s + C.LENGTH)));
        }
        return new le({
            signatures: i,
            bitmap: r
        });
    }
    static createBitmap(e) {
        let { bits: t } = e, r = 128, i = new Uint8Array([
            0,
            0,
            0,
            0
        ]), o = new Set;
        return t.forEach((s, a)=>{
            if (s >= le.MAX_SIGNATURES_SUPPORTED) throw new Error(`Cannot have a signature larger than ${le.MAX_SIGNATURES_SUPPORTED - 1}.`);
            if (o.has(s)) throw new Error("Duplicate bits detected.");
            if (a > 0 && s <= t[a - 1]) throw new Error("The bits need to be sorted in ascending order.");
            o.add(s);
            let c = Math.floor(s / 8), d = i[c];
            d |= r >> s % 8, i[c] = d;
        }), i;
    }
};
le.MAX_SIGNATURES_SUPPORTED = 32, le.BITMAP_LEN = 4;
var Ie = le;
var qn = "Multiple possible deserializations found";
function ed(n) {
    let e = [
        b,
        x,
        Z,
        B,
        E,
        G,
        Ke
    ], t;
    for (let r of e)try {
        let i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromHex(n), o = r.deserialize(i);
        if (i.assertFinished(), t) throw new Error(`${qn}: ${n}`);
        t = o;
    } catch (i) {
        if (i instanceof Error && i.message.includes(qn)) throw i;
    }
    if (!t) throw new Error(`Failed to deserialize public key: ${n}`);
    return t;
}
function td(n) {
    let e = [
        C,
        D,
        Ie,
        Ae,
        re,
        Le
    ], t;
    for (let r of e)try {
        let i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromHex(n), o = r.deserialize(i);
        if (i.assertFinished(), t) throw new Error(`${qn}: ${n}`);
        t = o;
    } catch (i) {
        if (i instanceof Error && i.message.includes(qn)) throw i;
    }
    if (!t) throw new Error(`Failed to deserialize signature: ${n}`);
    return t;
}
var q = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return Ee.load(e);
            case 1:
                return $e.load(e);
            case 2:
                return ie.load(e);
            case 3:
                return De.load(e);
            case 4:
                return Vt.load(e);
            case 5:
                return yt.load(e);
            default:
                throw new Error(`Unknown variant index for AccountAuthenticator: ${t}`);
        }
    }
    isEd25519() {
        return this instanceof Ee;
    }
    isMultiEd25519() {
        return this instanceof $e;
    }
    isSingleKey() {
        return this instanceof ie;
    }
    isMultiKey() {
        return this instanceof De;
    }
}, Ee = class n extends q {
    constructor(e, t){
        super(), this.public_key = e, this.signature = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.public_key.serialize(e), this.signature.serialize(e);
    }
    static load(e) {
        let t = b.deserialize(e), r = C.deserialize(e);
        return new n(t, r);
    }
}, $e = class n extends q {
    constructor(e, t){
        super(), this.public_key = e, this.signature = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(1), this.public_key.serialize(e), this.signature.serialize(e);
    }
    static load(e) {
        let t = Z.deserialize(e), r = Ie.deserialize(e);
        return new n(t, r);
    }
}, ie = class n extends q {
    constructor(e, t){
        super(), this.public_key = e, this.signature = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(2), this.public_key.serialize(e), this.signature.serialize(e);
    }
    static load(e) {
        let t = x.deserialize(e), r = D.deserialize(e);
        return new n(t, r);
    }
}, De = class n extends q {
    constructor(e, t){
        super(), this.public_keys = e, this.signatures = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(3), this.public_keys.serialize(e), this.signatures.serialize(e);
    }
    static load(e) {
        let t = B.deserialize(e), r = Ae.deserialize(e);
        return new n(t, r);
    }
}, Vt = class n extends q {
    serialize(e) {
        e.serializeU32AsUleb128(4);
    }
    static load(e) {
        return new n;
    }
}, yt = class n extends q {
    constructor(e, t, r, i){
        if (super(), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(e)) throw new Error(`Invalid function info ${e} passed into AccountAuthenticatorAbstraction`);
        this.functionInfo = e, this.abstractionSignature = r, this.signingMessageDigest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toUint8Array()), this.accountIdentity = i;
    }
    serialize(e) {
        e.serializeU32AsUleb128(5);
        let { moduleAddress: t, moduleName: r, functionName: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(this.functionInfo);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(t).serialize(e), e.serializeStr(r), e.serializeStr(i), this.accountIdentity ? e.serializeU32AsUleb128(1) : e.serializeU32AsUleb128(0), e.serializeBytes(this.signingMessageDigest.toUint8Array()), this.accountIdentity ? e.serializeBytes(this.abstractionSignature) : e.serializeFixedBytes(this.abstractionSignature), this.accountIdentity && e.serializeBytes(this.accountIdentity);
    }
    static load(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = e.deserializeStr(), i = e.deserializeStr(), o = e.deserializeUleb128AsU32(), s = e.deserializeBytes();
        if (o === 0) {
            let a = e.deserializeFixedBytes(e.remaining());
            return new n(`${t}::${r}::${i}`, s, a);
        }
        if (o === 1) {
            let a = e.deserializeBytes(), c = e.deserializeBytes();
            return new n(`${t}::${r}::${i}`, s, a, c);
        }
        throw new Error(`Unknown variant index for AccountAuthenticatorAbstraction: ${o}`);
    }
}, Wn = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.originalSigningMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e).toUint8Array()), this.functionInfo = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), e.serializeBytes(this.originalSigningMessage.toUint8Array());
        let { moduleAddress: t, moduleName: r, functionName: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(this.functionInfo);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(t).serialize(e), e.serializeStr(r), e.serializeStr(i);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        if (t !== 0) throw new Error(`Unknown variant index for AccountAbstractionMessage: ${t}`);
        let r = e.deserializeBytes(), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), o = e.deserializeStr(), s = e.deserializeStr(), a = `${i}::${o}::${s}`;
        return new n(r, a);
    }
};
;
var dn = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.address = e, this.name = t;
    }
    static fromStr(e) {
        let t = e.split("::");
        if (t.length !== 2) throw new Error("Invalid module id.");
        return new n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(t[0]), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t[1]));
    }
    serialize(e) {
        this.address.serialize(e), this.name.serialize(e);
    }
    static deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e);
        return new n(t, r);
    }
};
var O = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), o = e.deserializeVector(n);
        return new Re(t, r, i, o);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return V.load(e);
            case 1:
                return oe.load(e);
            case 2:
                return W.load(e);
            case 3:
                return je.load(e);
            case 4:
                return R.load(e);
            case 5:
                return mt.load(e);
            case 6:
                return v.load(e);
            case 7:
                return f.load(e);
            case 8:
                return qe.load(e);
            case 9:
                return We.load(e);
            case 10:
                return Qe.load(e);
            case 255:
                return N.load(e);
            default:
                throw new Error(`Unknown variant index for TypeTag: ${t}`);
        }
    }
    isBool() {
        return this instanceof V;
    }
    isAddress() {
        return this instanceof R;
    }
    isGeneric() {
        return this instanceof N;
    }
    isSigner() {
        return this instanceof mt;
    }
    isVector() {
        return this instanceof v;
    }
    isStruct() {
        return this instanceof f;
    }
    isU8() {
        return this instanceof oe;
    }
    isU16() {
        return this instanceof qe;
    }
    isU32() {
        return this instanceof We;
    }
    isU64() {
        return this instanceof W;
    }
    isU128() {
        return this instanceof je;
    }
    isU256() {
        return this instanceof Qe;
    }
    isPrimitive() {
        return this instanceof mt || this instanceof R || this instanceof V || this instanceof oe || this instanceof qe || this instanceof We || this instanceof W || this instanceof je || this instanceof Qe;
    }
}, V = class n extends O {
    toString() {
        return "bool";
    }
    serialize(e) {
        e.serializeU32AsUleb128(0);
    }
    static load(e) {
        return new n;
    }
}, oe = class n extends O {
    toString() {
        return "u8";
    }
    serialize(e) {
        e.serializeU32AsUleb128(1);
    }
    static load(e) {
        return new n;
    }
}, qe = class n extends O {
    toString() {
        return "u16";
    }
    serialize(e) {
        e.serializeU32AsUleb128(8);
    }
    static load(e) {
        return new n;
    }
}, We = class n extends O {
    toString() {
        return "u32";
    }
    serialize(e) {
        e.serializeU32AsUleb128(9);
    }
    static load(e) {
        return new n;
    }
}, W = class n extends O {
    toString() {
        return "u64";
    }
    serialize(e) {
        e.serializeU32AsUleb128(2);
    }
    static load(e) {
        return new n;
    }
}, je = class n extends O {
    toString() {
        return "u128";
    }
    serialize(e) {
        e.serializeU32AsUleb128(3);
    }
    static load(e) {
        return new n;
    }
}, Qe = class n extends O {
    toString() {
        return "u256";
    }
    serialize(e) {
        e.serializeU32AsUleb128(10);
    }
    static load(e) {
        return new n;
    }
}, R = class n extends O {
    toString() {
        return "address";
    }
    serialize(e) {
        e.serializeU32AsUleb128(4);
    }
    static load(e) {
        return new n;
    }
}, mt = class n extends O {
    toString() {
        return "signer";
    }
    serialize(e) {
        e.serializeU32AsUleb128(5);
    }
    static load(e) {
        return new n;
    }
}, jn = class n extends O {
    constructor(t){
        super();
        this.value = t;
    }
    toString() {
        return `&${this.value.toString()}`;
    }
    serialize(t) {
        t.serializeU32AsUleb128(254);
    }
    static load(t) {
        let r = O.deserialize(t);
        return new n(r);
    }
}, N = class n extends O {
    constructor(t){
        super();
        this.value = t;
        if (t < 0) throw new Error("Generic type parameter index cannot be negative");
    }
    toString() {
        return `T${this.value}`;
    }
    serialize(t) {
        t.serializeU32AsUleb128(255), t.serializeU32(this.value);
    }
    static load(t) {
        let r = t.deserializeU32();
        return new n(r);
    }
}, v = class n extends O {
    constructor(t){
        super();
        this.value = t;
    }
    toString() {
        return `vector<${this.value.toString()}>`;
    }
    static u8() {
        return new n(new oe);
    }
    serialize(t) {
        t.serializeU32AsUleb128(6), this.value.serialize(t);
    }
    static load(t) {
        let r = O.deserialize(t);
        return new n(r);
    }
}, f = class n extends O {
    constructor(t){
        super();
        this.value = t;
    }
    toString() {
        let t = "";
        return this.value.typeArgs.length > 0 && (t = `<${this.value.typeArgs.map((r)=>r.toString()).join(", ")}>`), `${this.value.address.toString()}::${this.value.moduleName.identifier}::${this.value.name.identifier}${t}`;
    }
    serialize(t) {
        t.serializeU32AsUleb128(7), this.value.serialize(t);
    }
    static load(t) {
        let r = Re.deserialize(t);
        return new n(r);
    }
    isTypeTag(t, r, i) {
        return this.value.moduleName.identifier === r && this.value.name.identifier === i && this.value.address.equals(t);
    }
    isString() {
        return this.isTypeTag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, "string", "String");
    }
    isOption() {
        return this.isTypeTag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, "option", "Option");
    }
    isObject() {
        return this.isTypeTag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, "object", "Object");
    }
    isDelegationKey() {
        return this.isTypeTag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, "permissioned_delegation", "DelegationKey");
    }
    isRateLimiter() {
        return this.isTypeTag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, "rate_limiter", "RateLimiter");
    }
}, Re = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t, r, i){
        super(), this.address = e, this.moduleName = t, this.name = r, this.typeArgs = i;
    }
    serialize(e) {
        e.serialize(this.address), e.serialize(this.moduleName), e.serialize(this.name), e.serializeVector(this.typeArgs);
    }
    static deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), o = e.deserializeVector(O);
        return new n(t, r, i, o);
    }
};
function Qd() {
    return new Re(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("aptos_coin"), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("AptosCoin"), []);
}
function I() {
    return new Re(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("string"), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("String"), []);
}
function Jd(n) {
    return new Re(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("option"), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Option"), [
        n
    ]);
}
function ge(n) {
    return new Re(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("object"), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Object"), [
        n
    ]);
}
function Ka(n) {
    let e = n.deserializeUleb128AsU32();
    switch(e){
        case 0:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(n);
        case 1:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"].deserialize(n);
        case 2:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"].deserialize(n);
        case 3:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(n);
        case 4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(n, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]);
        case 5:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(n);
        case 6:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].deserialize(n);
        case 7:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].deserialize(n);
        case 8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"].deserialize(n);
        case 9:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(n);
        default:
            throw new Error(`Unknown variant index for ScriptTransactionArgument: ${e}`);
    }
}
var at = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return Ht.load(e);
            case 2:
                return Lt.load(e);
            case 3:
                return $t.load(e);
            case 4:
                return Qn.deserialize(e);
            default:
                throw new Error(`Unknown variant index for TransactionPayload: ${t}`);
        }
    }
}, Ht = class n extends at {
    constructor(e){
        super(), this.script = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.script.serialize(e);
    }
    static load(e) {
        let t = qt.deserialize(e);
        return new n(t);
    }
}, Lt = class n extends at {
    constructor(e){
        super(), this.entryFunction = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(2), this.entryFunction.serialize(e);
    }
    static load(e) {
        let t = Je.deserialize(e);
        return new n(t);
    }
}, $t = class n extends at {
    constructor(e){
        super(), this.multiSig = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(3), this.multiSig.serialize(e);
    }
    static load(e) {
        let t = pn.deserialize(e);
        return new n(t);
    }
}, Je = class n {
    constructor(e, t, r, i){
        this.module_name = e, this.function_name = t, this.type_args = r, this.args = i;
    }
    static build(e, t, r, i) {
        return new n(dn.fromStr(e), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t), r, i);
    }
    serialize(e) {
        this.module_name.serialize(e), this.function_name.serialize(e), e.serializeVector(this.type_args), e.serializeU32AsUleb128(this.args.length), this.args.forEach((t)=>{
            t.serializeForEntryFunction(e);
        });
    }
    static deserialize(e) {
        let t = dn.deserialize(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), i = e.deserializeVector(O), o = e.deserializeUleb128AsU32(), s = new Array;
        for(let a = 0; a < o; a += 1){
            let c = e.deserializeUleb128AsU32(), d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TOBQ5UE6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e, c);
            s.push(d);
        }
        return new n(t, r, i, s);
    }
}, qt = class n {
    constructor(e, t, r){
        this.bytecode = e, this.type_args = t, this.args = r;
    }
    serialize(e) {
        e.serializeBytes(this.bytecode), e.serializeVector(this.type_args), e.serializeU32AsUleb128(this.args.length), this.args.forEach((t)=>{
            t.serializeForScriptFunction(e);
        });
    }
    static deserialize(e) {
        let t = e.deserializeBytes(), r = e.deserializeVector(O), i = e.deserializeUleb128AsU32(), o = new Array;
        for(let s = 0; s < i; s += 1){
            let a = Ka(e);
            o.push(a);
        }
        return new n(t, r, o);
    }
}, pn = class n {
    constructor(e, t){
        this.multisig_address = e, this.transaction_payload = t;
    }
    serialize(e) {
        this.multisig_address.serialize(e), this.transaction_payload === void 0 ? e.serializeBool(!1) : (e.serializeBool(!0), this.transaction_payload.serialize(e));
    }
    static deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = e.deserializeBool(), i;
        return r && (i = ln.deserialize(e)), new n(t, i);
    }
}, ln = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.transaction_payload = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.transaction_payload.serialize(e);
    }
    static deserialize(e) {
        return e.deserializeUleb128AsU32(), new n(Je.deserialize(e));
    }
}, Qn = class extends at {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return ft.load(e);
            default:
                throw new Error(`Unknown variant index for TransactionInnerPayload: ${t}`);
        }
    }
}, ft = class n extends Qn {
    constructor(e, t){
        super(), this.executable = e, this.extra_config = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(4), e.serializeU32AsUleb128(0), this.executable.serialize(e), this.extra_config.serialize(e);
    }
    static load(e) {
        let t = Wt.deserialize(e), r = Jn.deserialize(e);
        return new n(t, r);
    }
}, Wt = class {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return gn.load(e);
            case 1:
                return jt.load(e);
            case 2:
                return yn.load(e);
            default:
                throw new Error(`Unknown variant index for TransactionExecutable: ${t}`);
        }
    }
}, gn = class n extends Wt {
    constructor(e){
        super(), this.script = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.script.serialize(e);
    }
    static load(e) {
        let t = qt.deserialize(e);
        return new n(t);
    }
}, jt = class n extends Wt {
    constructor(e){
        super(), this.entryFunction = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(1), this.entryFunction.serialize(e);
    }
    static load(e) {
        let t = Je.deserialize(e);
        return new n(t);
    }
}, yn = class n extends Wt {
    serialize(e) {
        e.serializeU32AsUleb128(2);
    }
    static load(e) {
        return new n;
    }
}, Jn = class {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return At.load(e);
            default:
                throw new Error(`Unknown variant index for TransactionExtraConfig: ${t}`);
        }
    }
}, At = class n extends Jn {
    constructor(e, t){
        super(), this.multisigAddress = e, this.replayProtectionNonce = t !== void 0 ? BigInt(t) : void 0;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), e.serializeOption(this.multisigAddress), e.serializeOption(this.replayProtectionNonce !== void 0 ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](this.replayProtectionNonce) : void 0);
    }
    static load(e) {
        let t = e.deserializeOption(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), r = e.deserializeOption(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]);
        return new n(t, r?.value);
    }
};
var he = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t, r, i, o, s, a){
        super(), this.sender = e, this.sequence_number = t, this.payload = r, this.max_gas_amount = i, this.gas_unit_price = o, this.expiration_timestamp_secs = s, this.chain_id = a;
    }
    serialize(e) {
        this.sender.serialize(e), e.serializeU64(this.sequence_number), this.payload.serialize(e), e.serializeU64(this.max_gas_amount), e.serializeU64(this.gas_unit_price), e.serializeU64(this.expiration_timestamp_secs), this.chain_id.serialize(e);
    }
    static deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = e.deserializeU64(), i = at.deserialize(e), o = e.deserializeU64(), s = e.deserializeU64(), a = e.deserializeU64(), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XKUIMGKU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e);
        return new n(t, r, i, o, s, a, c);
    }
}, Zn = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return ht.load(e);
            case 1:
                return bt.load(e);
            default:
                throw new Error(`Unknown variant index for RawTransactionWithData: ${t}`);
        }
    }
}, ht = class n extends Zn {
    constructor(e, t){
        super(), this.raw_txn = e, this.secondary_signer_addresses = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.raw_txn.serialize(e), e.serializeVector(this.secondary_signer_addresses);
    }
    static load(e) {
        let t = he.deserialize(e), r = e.deserializeVector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]);
        return new n(t, r);
    }
}, bt = class n extends Zn {
    constructor(e, t, r){
        super(), this.raw_txn = e, this.secondary_signer_addresses = t, this.fee_payer_address = r;
    }
    serialize(e) {
        e.serializeU32AsUleb128(1), this.raw_txn.serialize(e), e.serializeVector(this.secondary_signer_addresses), this.fee_payer_address.serialize(e);
    }
    static load(e) {
        let t = he.deserialize(e), r = e.deserializeVector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e);
        return new n(t, r, i);
    }
};
var Ze = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return wt.load(e);
            case 1:
                return Qt.load(e);
            case 2:
                return Tt.load(e);
            case 3:
                return St.load(e);
            case 4:
                return ct.load(e);
            default:
                throw new Error(`Unknown variant index for TransactionAuthenticator: ${t}`);
        }
    }
    isEd25519() {
        return this instanceof wt;
    }
    isMultiEd25519() {
        return this instanceof Qt;
    }
    isMultiAgent() {
        return this instanceof Tt;
    }
    isFeePayer() {
        return this instanceof St;
    }
    isSingleSender() {
        return this instanceof ct;
    }
}, wt = class n extends Ze {
    constructor(e, t){
        super(), this.public_key = e, this.signature = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.public_key.serialize(e), this.signature.serialize(e);
    }
    static load(e) {
        let t = b.deserialize(e), r = C.deserialize(e);
        return new n(t, r);
    }
}, Qt = class n extends Ze {
    constructor(e, t){
        super(), this.public_key = e, this.signature = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(1), this.public_key.serialize(e), this.signature.serialize(e);
    }
    static load(e) {
        let t = Z.deserialize(e), r = Ie.deserialize(e);
        return new n(t, r);
    }
}, Tt = class n extends Ze {
    constructor(e, t, r){
        super(), this.sender = e, this.secondary_signer_addresses = t, this.secondary_signers = r;
    }
    serialize(e) {
        e.serializeU32AsUleb128(2), this.sender.serialize(e), e.serializeVector(this.secondary_signer_addresses), e.serializeVector(this.secondary_signers);
    }
    static load(e) {
        let t = q.deserialize(e), r = e.deserializeVector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), i = e.deserializeVector(q);
        return new n(t, r, i);
    }
}, St = class n extends Ze {
    constructor(e, t, r, i){
        super(), this.sender = e, this.secondary_signer_addresses = t, this.secondary_signers = r, this.fee_payer = i;
    }
    serialize(e) {
        e.serializeU32AsUleb128(3), this.sender.serialize(e), e.serializeVector(this.secondary_signer_addresses), e.serializeVector(this.secondary_signers), this.fee_payer.address.serialize(e), this.fee_payer.authenticator.serialize(e);
    }
    static load(e) {
        let t = q.deserialize(e), r = e.deserializeVector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), i = e.deserializeVector(q), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), s = q.deserialize(e), a = {
            address: o,
            authenticator: s
        };
        return new n(t, r, i, a);
    }
}, ct = class n extends Ze {
    constructor(e){
        super(), this.sender = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(4), this.sender.serialize(e);
    }
    static load(e) {
        let t = q.deserialize(e);
        return new n(t);
    }
};
var Ye = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.raw_txn = e, this.authenticator = t;
    }
    serialize(e) {
        this.raw_txn.serialize(e), this.authenticator.serialize(e);
    }
    static deserialize(e) {
        let t = he.deserialize(e), r = Ze.deserialize(e);
        return new n(t, r);
    }
};
var Yn = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.rawTransaction = e, this.feePayerAddress = t;
    }
    serialize(e) {
        this.rawTransaction.serialize(e), this.feePayerAddress === void 0 ? e.serializeBool(!1) : (e.serializeBool(!0), this.feePayerAddress.serialize(e));
    }
    static deserialize(e) {
        let t = he.deserialize(e), r = e.deserializeBool(), i;
        return r && (i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e)), new n(t, i);
    }
};
var Xn = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t, r){
        super(), this.rawTransaction = e, this.feePayerAddress = r, this.secondarySignerAddresses = t;
    }
    serialize(e) {
        this.rawTransaction.serialize(e), e.serializeVector(this.secondarySignerAddresses), this.feePayerAddress === void 0 ? e.serializeBool(!1) : (e.serializeBool(!0), this.feePayerAddress.serialize(e));
    }
    static deserialize(e) {
        let t = he.deserialize(e), r = e.deserializeVector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), i = e.deserializeBool(), o;
        return i && (o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e)), new n(t, r, o);
    }
};
function er(n) {
    return n.feePayerAddress ? new bt(n.rawTransaction, n.secondarySignerAddresses ?? [], n.feePayerAddress) : n.secondarySignerAddresses ? new ht(n.rawTransaction, n.secondarySignerAddresses) : n.rawTransaction;
}
function Oe(n, e) {
    let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"].create();
    if (!e.startsWith("APTOS::")) throw new Error(`Domain separator needs to start with 'APTOS::'.  Provided - ${e}`);
    t.update(e);
    let r = t.digest(), i = n, o = new Uint8Array(r.length + i.length);
    return o.set(r), o.set(i, r.length), o;
}
function dl(n) {
    return Oe(n.bcsToBytes(), `APTOS::${n.constructor.name}`);
}
function Ce(n) {
    let e = er(n);
    return n.feePayerAddress ? Oe(e.bcsToBytes(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"]) : n.secondarySignerAddresses ? Oe(e.bcsToBytes(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"]) : Oe(e.bcsToBytes(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"]);
}
var Y = class n {
    constructor(e){
        this.signingScheme = 0;
        let { privateKey: t, address: r } = e;
        this.privateKey = t, this.publicKey = t.publicKey(), this.accountAddress = r ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r) : this.publicKey.authKey().derivedAddress();
    }
    static generate() {
        let e = L.generate();
        return new n({
            privateKey: e
        });
    }
    static fromDerivationPath(e) {
        let { path: t, mnemonic: r } = e, i = L.fromDerivationPath(t, r);
        return new n({
            privateKey: i
        });
    }
    verifySignature(e) {
        return this.publicKey.verifySignature(e);
    }
    async verifySignatureAsync(e) {
        return this.publicKey.verifySignatureAsync({
            ...e,
            signature: e.signature
        });
    }
    signWithAuthenticator(e) {
        return new Ee(this.publicKey, this.privateKey.sign(e));
    }
    signTransactionWithAuthenticator(e) {
        return new Ee(this.publicKey, this.signTransaction(e));
    }
    sign(e) {
        return this.privateKey.sign(e);
    }
    signTransaction(e) {
        return this.sign(Ce(e));
    }
};
function Mr(n) {
    return typeof n == "object" && n !== null && "getAnyPublicKey" in n && typeof n.getAnyPublicKey == "function";
}
var se = class n {
    constructor(e){
        this.signingScheme = 2;
        let { privateKey: t, address: r } = e;
        this.privateKey = t, this.publicKey = new x(t.publicKey()), this.accountAddress = r ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r) : this.publicKey.authKey().derivedAddress();
    }
    getAnyPublicKey() {
        return this.publicKey;
    }
    static generate(e = {}) {
        let { scheme: t = 0 } = e, r;
        switch(t){
            case 0:
                r = L.generate();
                break;
            case 2:
                r = He.generate();
                break;
            default:
                throw new Error(`Unsupported signature scheme ${t}`);
        }
        return new n({
            privateKey: r
        });
    }
    static fromDerivationPath(e) {
        let { scheme: t = 0, path: r, mnemonic: i } = e, o;
        switch(t){
            case 0:
                o = L.fromDerivationPath(r, i);
                break;
            case 2:
                o = He.fromDerivationPath(r, i);
                break;
            default:
                throw new Error(`Unsupported signature scheme ${t}`);
        }
        return new n({
            privateKey: o
        });
    }
    verifySignature(e) {
        return this.publicKey.verifySignature(e);
    }
    async verifySignatureAsync(e) {
        return this.publicKey.verifySignatureAsync({
            ...e,
            signature: e.signature
        });
    }
    signWithAuthenticator(e) {
        return new ie(this.publicKey, this.sign(e));
    }
    signTransactionWithAuthenticator(e) {
        return new ie(this.publicKey, this.signTransaction(e));
    }
    sign(e) {
        return new D(this.privateKey.sign(e));
    }
    signTransaction(e) {
        return this.sign(Ce(e));
    }
    static fromEd25519Account(e) {
        return new n({
            privateKey: e.privateKey,
            address: e.accountAddress
        });
    }
};
var Xe = class {
    static generate(e = {}) {
        let { scheme: t = 0, legacy: r = !0 } = e;
        return t === 0 && r ? Y.generate() : se.generate({
            scheme: t
        });
    }
    static fromPrivateKey(e) {
        let { privateKey: t, address: r, legacy: i = !0 } = e;
        return t instanceof L && i ? new Y({
            privateKey: t,
            address: r
        }) : new se({
            privateKey: t,
            address: r
        });
    }
    static fromPrivateKeyAndAddress(e) {
        return this.fromPrivateKey(e);
    }
    static fromDerivationPath(e) {
        let { scheme: t = 0, mnemonic: r, path: i, legacy: o = !0 } = e;
        return t === 0 && o ? Y.fromDerivationPath({
            mnemonic: r,
            path: i
        }) : se.fromDerivationPath({
            scheme: t,
            mnemonic: r,
            path: i
        });
    }
    static authKey(e) {
        let { publicKey: t } = e;
        return t.authKey();
    }
    verifySignature(e) {
        return this.publicKey.verifySignature(e);
    }
    async verifySignatureAsync(e) {
        return this.publicKey.verifySignatureAsync(e);
    }
};
;
var va = 1209600, Jt = class Jt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { privateKey: t, expiryDateSecs: r, blinder: i } = e;
        this.privateKey = t, this.publicKey = new ut(t.publicKey()), this.expiryDateSecs = r || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])() + va), this.blinder = i !== void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toUint8Array() : _a();
        let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this.publicKey.bcsToBytes(), 93);
        o.push(BigInt(this.expiryDateSecs)), o.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this.blinder));
        let s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(o);
        this.nonce = s.toString();
    }
    getPublicKey() {
        return this.publicKey;
    }
    isExpired() {
        return Math.floor(Date.now() / 1e3) > this.expiryDateSecs;
    }
    serialize(e) {
        e.serializeU32AsUleb128(this.publicKey.variant), e.serializeBytes(this.privateKey.toUint8Array()), e.serializeU64(this.expiryDateSecs), e.serializeFixedBytes(this.blinder);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32(), r;
        switch(t){
            case 0:
                r = L.deserialize(e);
                break;
            default:
                throw new Error(`Unknown variant index for EphemeralPublicKey: ${t}`);
        }
        let i = e.deserializeU64(), o = e.deserializeFixedBytes(31);
        return new Jt({
            privateKey: r,
            expiryDateSecs: Number(i),
            blinder: o
        });
    }
    static fromBytes(e) {
        return Jt.deserialize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](e));
    }
    static generate(e) {
        let t;
        switch(e?.scheme){
            case 0:
            default:
                t = L.generate();
        }
        return new Jt({
            privateKey: t,
            expiryDateSecs: e?.expiryDateSecs
        });
    }
    sign(e) {
        if (this.isExpired()) throw new Error("EphemeralKeyPair has expired");
        return new Ne(this.privateKey.sign(e));
    }
};
Jt.BLINDER_LENGTH = 31;
var Pt = Jt;
function _a() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(Pt.BLINDER_LENGTH);
}
;
;
function nr(n) {
    return n != null && typeof n.checkKeylessAccountValidity == "function";
}
var Zt = class Zt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t){
        super();
        this.signingScheme = 2;
        let { address: r, ephemeralKeyPair: i, publicKey: o, uidKey: s, uidVal: a, aud: c, pepper: d, proof: l, proofFetchCallback: g, jwt: p, verificationKeyHash: y } = t;
        if (this.ephemeralKeyPair = i, this.publicKey = o, this.accountAddress = r ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r) : this.publicKey.authKey().derivedAddress(), this.uidKey = s, this.uidVal = a, this.aud = c, this.jwt = p, this.emitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], this.proofOrPromise = l, l instanceof ye) this.proof = l;
        else {
            if (g === void 0) throw new Error("Must provide callback for async proof fetch");
            this.emitter.on("proofFetchFinish", async (U)=>{
                await g(U), this.emitter.removeAllListeners();
            }), this.init(l);
        }
        let h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(d).toUint8Array();
        if (h.length !== Zt.PEPPER_LENGTH) throw new Error(`Pepper length in bytes should be ${Zt.PEPPER_LENGTH}`);
        if (this.pepper = h, y !== void 0) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToUint8Array(y).length !== 32) throw new Error("verificationKeyHash must be 32 bytes");
            this.verificationKeyHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToUint8Array(y);
        }
    }
    getAnyPublicKey() {
        return new x(this.publicKey);
    }
    async init(t) {
        try {
            this.proof = await t, this.emitter.emit("proofFetchFinish", {
                status: "Success"
            });
        } catch (r) {
            r instanceof Error ? this.emitter.emit("proofFetchFinish", {
                status: "Failed",
                error: r.toString()
            }) : this.emitter.emit("proofFetchFinish", {
                status: "Failed",
                error: "Unknown"
            });
        }
    }
    serialize(t) {
        if (this.accountAddress.serialize(t), t.serializeStr(this.jwt), t.serializeStr(this.uidKey), t.serializeFixedBytes(this.pepper), this.ephemeralKeyPair.serialize(t), this.proof === void 0) throw new Error("Cannot serialize - proof undefined");
        this.proof.serialize(t), t.serializeOption(this.verificationKeyHash, 32);
    }
    static partialDeserialize(t) {
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(t), i = t.deserializeStr(), o = t.deserializeStr(), s = t.deserializeFixedBytes(31), a = Pt.deserialize(t), c = ye.deserialize(t), d = t.deserializeOption("fixedBytes", 32);
        return {
            address: r,
            jwt: i,
            uidKey: o,
            pepper: s,
            ephemeralKeyPair: a,
            proof: c,
            verificationKeyHash: d
        };
    }
    isExpired() {
        return this.ephemeralKeyPair.isExpired();
    }
    signWithAuthenticator(t) {
        let r = new D(this.sign(t)), i = new x(this.publicKey);
        return new ie(i, r);
    }
    signTransactionWithAuthenticator(t) {
        let r = new D(this.signTransaction(t)), i = new x(this.publicKey);
        return new ie(i, r);
    }
    async waitForProofFetch() {
        this.proofOrPromise instanceof Promise && await this.proofOrPromise;
    }
    async checkKeylessAccountValidity(t) {
        if (this.isExpired()) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 0
        });
        if (await this.waitForProofFetch(), this.proof === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 2
        });
        let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(this.jwt, {
            header: !0
        });
        if (r.kid === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 12,
            details: "checkKeylessAccountValidity failed. JWT is missing 'kid' in header. This should never happen."
        });
        if (this.verificationKeyHash !== void 0) {
            let { verificationKey: i } = await Xt({
                aptosConfig: t
            });
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToString(i.hash()) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToString(this.verificationKeyHash)) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
                type: 4
            });
        } else console.warn("[Aptos SDK] The verification key hash was not set. Proof may be invalid if the verification key has rotated.");
        await Zt.fetchJWK({
            aptosConfig: t,
            publicKey: this.publicKey,
            kid: r.kid
        });
    }
    sign(t) {
        let { expiryDateSecs: r } = this.ephemeralKeyPair;
        if (this.isExpired()) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 0
        });
        if (this.proof === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 1,
            details: "Proof not found - make sure to call `await account.checkKeylessAccountValidity()` before signing."
        });
        let i = this.ephemeralKeyPair.getPublicKey(), o = this.ephemeralKeyPair.sign(t);
        return new re({
            jwtHeader: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(this.jwt.split(".")[0]),
            ephemeralCertificate: new Yt(this.proof, 0),
            expiryDateSecs: r,
            ephemeralPublicKey: i,
            ephemeralSignature: o
        });
    }
    signTransaction(t) {
        if (this.proof === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 1,
            details: "Proof not found - make sure to call `await account.checkKeylessAccountValidity()` before signing."
        });
        let r = er(t), o = new tr(r, this.proof.proof).hash();
        return this.sign(o);
    }
    getSigningMessage(t) {
        if (this.proof === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 1,
            details: "Proof not found - make sure to call `await account.checkKeylessAccountValidity()` before signing."
        });
        let r = er(t);
        return new tr(r, this.proof.proof).hash();
    }
    verifySignature(t) {
        return this.publicKey.verifySignature(t);
    }
    async verifySignatureAsync(t) {
        return this.publicKey.verifySignatureAsync({
            ...t
        });
    }
    static async fetchJWK(t) {
        return Br(t);
    }
};
Zt.PEPPER_LENGTH = 31;
var me = Zt, tr = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t, r){
        super();
        this.domainSeparator = "APTOS::TransactionAndProof";
        this.transaction = t, this.proof = r;
    }
    serialize(t) {
        t.serializeFixedBytes(this.transaction.bcsToBytes()), t.serializeOption(this.proof);
    }
    hash() {
        return Oe(this.bcsToBytes(), this.domainSeparator);
    }
};
var be = class n extends me {
    constructor(e){
        let t = E.create(e);
        super({
            publicKey: t,
            ...e
        }), this.publicKey = t;
    }
    serialize(e) {
        super.serialize(e);
    }
    static deserialize(e) {
        let { address: t, proof: r, ephemeralKeyPair: i, jwt: o, uidKey: s, pepper: a, verificationKeyHash: c } = me.partialDeserialize(e), { iss: d, aud: l, uidVal: g } = et({
            jwt: o,
            uidKey: s
        });
        return new n({
            address: t,
            proof: r,
            ephemeralKeyPair: i,
            iss: d,
            uidKey: s,
            uidVal: g,
            aud: l,
            pepper: a,
            jwt: o,
            verificationKeyHash: c
        });
    }
    static fromBytes(e) {
        return n.deserialize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToUint8Array(e)));
    }
    static create(e) {
        let { address: t, proof: r, jwt: i, ephemeralKeyPair: o, pepper: s, uidKey: a = "sub", proofFetchCallback: c, verificationKey: d, verificationKeyHash: l } = e;
        if (l && d) throw new Error("Cannot provide both verificationKey and verificationKeyHash");
        let { iss: g, aud: p, uidVal: y } = et({
            jwt: i,
            uidKey: a
        });
        return new n({
            address: t,
            proof: r,
            ephemeralKeyPair: o,
            iss: g,
            uidKey: a,
            uidVal: y,
            aud: p,
            pepper: s,
            jwt: i,
            proofFetchCallback: c,
            verificationKeyHash: l ?? (d ? d.hash() : void 0)
        });
    }
};
var ve = class n extends me {
    constructor(e){
        let t = G.create(e);
        super({
            publicKey: t,
            ...e
        }), this.publicKey = t, this.audless = e.audless ?? !1;
    }
    serialize(e) {
        super.serialize(e), this.publicKey.jwkAddress.serialize(e);
    }
    static deserialize(e) {
        let { address: t, proof: r, ephemeralKeyPair: i, jwt: o, uidKey: s, pepper: a, verificationKeyHash: c } = me.partialDeserialize(e), d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), { iss: l, aud: g, uidVal: p } = et({
            jwt: o,
            uidKey: s
        });
        return new n({
            address: t,
            proof: r,
            ephemeralKeyPair: i,
            iss: l,
            uidKey: s,
            uidVal: p,
            aud: g,
            pepper: a,
            jwt: o,
            verificationKeyHash: c,
            jwkAddress: d
        });
    }
    static fromBytes(e) {
        return n.deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromHex(e));
    }
    static create(e) {
        let { address: t, proof: r, jwt: i, ephemeralKeyPair: o, pepper: s, jwkAddress: a, uidKey: c = "sub", proofFetchCallback: d, verificationKey: l, verificationKeyHash: g } = e;
        if (g && l) throw new Error("Cannot provide both verificationKey and verificationKeyHash");
        let { iss: p, aud: y, uidVal: h } = et({
            jwt: i,
            uidKey: c
        });
        return new n({
            address: t,
            proof: r,
            ephemeralKeyPair: o,
            iss: p,
            uidKey: c,
            uidVal: h,
            aud: y,
            pepper: s,
            jwkAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(a),
            jwt: i,
            proofFetchCallback: d,
            verificationKeyHash: g ?? (l ? l.hash() : void 0)
        });
    }
};
var tt = class n {
    constructor(e){
        this.signingScheme = 3;
        let { multiKey: t, address: r } = e, i = e.signers.map((a)=>a instanceof Y ? se.fromEd25519Account(a) : a);
        if (t.signaturesRequired > i.length) throw new Error(`Not enough signers provided to satisfy the required signatures. Need ${t.signaturesRequired} signers, but only ${i.length} provided`);
        if (t.signaturesRequired < i.length) throw new Error(`More signers provided than required. Need ${t.signaturesRequired} signers, but ${i.length} provided`);
        this.publicKey = t, this.accountAddress = r ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r) : this.publicKey.authKey().derivedAddress();
        let o = [];
        for (let a of i)o.push(this.publicKey.getIndex(a.getAnyPublicKey()));
        let s = i.map((a, c)=>[
                a,
                o[c]
            ]);
        s.sort((a, c)=>a[1] - c[1]), this.signers = s.map((a)=>a[0]), this.signerIndicies = s.map((a)=>a[1]), this.signaturesBitmap = this.publicKey.createBitmap({
            bits: o
        });
    }
    static fromPublicKeysAndSigners(e) {
        let { address: t, publicKeys: r, signaturesRequired: i, signers: o } = e, s = new B({
            publicKeys: r,
            signaturesRequired: i
        });
        return new n({
            multiKey: s,
            signers: o,
            address: t
        });
    }
    static isMultiKeySigner(e) {
        return e instanceof n;
    }
    signWithAuthenticator(e) {
        return new De(this.publicKey, this.sign(e));
    }
    signTransactionWithAuthenticator(e) {
        return new De(this.publicKey, this.signTransaction(e));
    }
    async waitForProofFetch() {
        let t = this.signers.filter((r)=>r instanceof me).map(async (r)=>r.waitForProofFetch());
        await Promise.all(t);
    }
    async checkKeylessAccountValidity(e) {
        let r = this.signers.filter((i)=>i instanceof me).map((i)=>i.checkKeylessAccountValidity(e));
        await Promise.all(r);
    }
    sign(e) {
        let t = [];
        for (let r of this.signers)t.push(r.sign(e));
        return new Ae({
            signatures: t,
            bitmap: this.signaturesBitmap
        });
    }
    signTransaction(e) {
        let t = [];
        for (let r of this.signers)t.push(r.signTransaction(e));
        return new Ae({
            signatures: t,
            bitmap: this.signaturesBitmap
        });
    }
    verifySignature(e) {
        return this.publicKey.verifySignature(e);
    }
    async verifySignatureAsync(e) {
        return await this.publicKey.verifySignatureAsync(e);
    }
};
var mn = class {
    constructor(e){
        this.signingScheme = 1;
        let { signers: t, publicKey: r, address: i } = e;
        if (this.publicKey = r, this.accountAddress = i ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i) : this.publicKey.authKey().derivedAddress(), r.threshold > t.length) throw new Error(`Not enough signers provided to satisfy the required signatures. Need ${r.threshold} signers, but only ${t.length} provided`);
        if (r.threshold < t.length) throw new Error(`More signers provided than required. Need ${r.threshold} signers, but ${t.length} provided`);
        let o = [];
        for (let a of t)o.push(this.publicKey.getIndex(a.publicKey()));
        let s = t.map((a, c)=>[
                a,
                o[c]
            ]);
        s.sort((a, c)=>a[1] - c[1]), this.signers = s.map((a)=>a[0]), this.signerIndices = s.map((a)=>a[1]), this.signaturesBitmap = this.publicKey.createBitmap({
            bits: o
        });
    }
    verifySignature(e) {
        return this.publicKey.verifySignature(e);
    }
    async verifySignatureAsync(e) {
        return this.publicKey.verifySignatureAsync({
            ...e,
            signature: e.signature
        });
    }
    signWithAuthenticator(e) {
        return new $e(this.publicKey, this.sign(e));
    }
    signTransactionWithAuthenticator(e) {
        return new $e(this.publicKey, this.signTransaction(e));
    }
    sign(e) {
        let t = [];
        for (let r of this.signers)t.push(r.sign(e));
        return new Ie({
            signatures: t,
            bitmap: this.signaturesBitmap
        });
    }
    signTransaction(e) {
        return this.sign(Ce(e));
    }
};
function ko(n) {
    let e = n.deserializeUleb128AsU32();
    if (!Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MCFQE4GC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["J"]).includes(e)) throw new Error(`Deserialization of Account failed: SigningScheme variant ${e} is invalid`);
    return {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(n),
        signingScheme: e
    };
}
function Fo(n, e) {
    if (e.serializeStr(n.jwt), e.serializeStr(n.uidKey), e.serializeFixedBytes(n.pepper), n.ephemeralKeyPair.serialize(e), n.proof === void 0) throw new Error("Cannot serialize - proof undefined");
    n.proof.serialize(e), e.serializeOption(n.verificationKeyHash, 32);
}
function zo(n) {
    let e = n.deserializeStr(), t = n.deserializeStr(), r = n.deserializeFixedBytes(31), i = Pt.deserialize(n), o = ye.deserialize(n), s = n.deserializeOption("fixedBytes", 32);
    return {
        jwt: e,
        uidKey: t,
        pepper: r,
        ephemeralKeyPair: i,
        proof: o,
        verificationKeyHash: s
    };
}
var Do;
((g)=>{
    function n(p) {
        let y = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        switch(y.serializeU32AsUleb128(p.signingScheme), p.accountAddress.serialize(y), p.signingScheme){
            case 0:
                return p.privateKey.serialize(y), y.toUint8Array();
            case 2:
                {
                    if (!Mr(p)) throw new Error("Account is not a SingleKeySigner");
                    let h = p.getAnyPublicKey();
                    switch(y.serializeU32AsUleb128(h.variant), h.variant){
                        case 3:
                            return Fo(p, y), y.toUint8Array();
                        case 4:
                            {
                                let U = p;
                                return Fo(U, y), U.publicKey.jwkAddress.serialize(y), y.serializeBool(U.audless), y.toUint8Array();
                            }
                        case 1:
                        case 0:
                            return p.privateKey.serialize(y), y.toUint8Array();
                        default:
                            throw new Error(`Invalid public key variant: ${h.variant}`);
                    }
                }
            case 3:
                {
                    let h = p;
                    return h.publicKey.serialize(y), y.serializeU32AsUleb128(h.signers.length), h.signers.forEach((U)=>{
                        y.serializeFixedBytes(n(U));
                    }), y.toUint8Array();
                }
            default:
                throw new Error(`Deserialization of Account failed: invalid signingScheme value ${p.signingScheme}`);
        }
    }
    g.toBytes = n;
    function e(p) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToStringWithoutPrefix(n(p));
    }
    g.toHexStringWithoutPrefix = e;
    function t(p) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToString(n(p));
    }
    g.toHexString = t;
    function r(p) {
        let { address: y, signingScheme: h } = ko(p);
        switch(h){
            case 0:
                {
                    let U = L.deserialize(p);
                    return new Y({
                        privateKey: U,
                        address: y
                    });
                }
            case 2:
                {
                    let U = p.deserializeUleb128AsU32();
                    switch(U){
                        case 0:
                            {
                                let M = L.deserialize(p);
                                return new se({
                                    privateKey: M,
                                    address: y
                                });
                            }
                        case 1:
                            {
                                let M = He.deserialize(p);
                                return new se({
                                    privateKey: M,
                                    address: y
                                });
                            }
                        case 3:
                            {
                                let M = zo(p), X = et(M);
                                return new be({
                                    ...M,
                                    ...X
                                });
                            }
                        case 4:
                            {
                                let M = zo(p), X = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(p), Me = p.deserializeBool(), ot = et(M);
                                return new ve({
                                    ...M,
                                    ...ot,
                                    jwkAddress: X,
                                    audless: Me
                                });
                            }
                        default:
                            throw new Error(`Unsupported public key variant ${U}`);
                    }
                }
            case 3:
                {
                    let U = B.deserialize(p), M = p.deserializeUleb128AsU32(), X = new Array;
                    for(let Me = 0; Me < M; Me += 1){
                        let ot = r(p);
                        if (!Mr(ot) && !(ot instanceof Y)) throw new Error("Deserialization of MultiKeyAccount failed. Signer is not a SingleKeySigner or Ed25519Account");
                        X.push(ot);
                    }
                    return new tt({
                        multiKey: U,
                        signers: X,
                        address: y
                    });
                }
            default:
                throw new Error(`Deserialization of Account failed: invalid signingScheme value ${h}`);
        }
    }
    g.deserialize = r;
    function i(p) {
        let y = d(p);
        if (!(y instanceof be)) throw new Error("Deserialization of KeylessAccount failed");
        return y;
    }
    g.keylessAccountFromHex = i;
    function o(p) {
        let y = d(p);
        if (!(y instanceof ve)) throw new Error("Deserialization of FederatedKeylessAccount failed");
        return y;
    }
    g.federatedKeylessAccountFromHex = o;
    function s(p) {
        let y = d(p);
        if (!(y instanceof tt)) throw new Error("Deserialization of MultiKeyAccount failed");
        return y;
    }
    g.multiKeyAccountFromHex = s;
    function a(p) {
        let y = d(p);
        if (!(y instanceof se)) throw new Error("Deserialization of SingleKeyAccount failed");
        return y;
    }
    g.singleKeyAccountFromHex = a;
    function c(p) {
        let y = d(p);
        if (!(y instanceof Y)) throw new Error("Deserialization of Ed25519Account failed");
        return y;
    }
    g.ed25519AccountFromHex = c;
    function d(p) {
        return r(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromHex(p));
    }
    g.fromHex = d;
    function l(p) {
        return d(p);
    }
    g.fromBytes = l;
})(Do || (Do = {}));
;
var rr = class n extends Xe {
    constructor({ signer: t, accountAddress: r, authenticationFunction: i }){
        super();
        this.signingScheme = 2;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(i)) throw new Error(`Invalid authentication function ${i} passed into AbstractedAccount`);
        this.authenticationFunction = i, this.accountAddress = r, this.publicKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EF4FA5I6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](this.accountAddress), this.sign = (o)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EF4FA5I6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t(o));
    }
    static fromPermissionedSigner({ signer: t, accountAddress: r }) {
        return new n({
            signer: (i)=>{
                let o = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
                return t.publicKey.serialize(o), t.sign(i).serialize(o), o.toUint8Array();
            },
            accountAddress: r ?? t.accountAddress,
            authenticationFunction: "0x1::permissioned_delegation::authenticate"
        });
    }
    static generateAccountAbstractionMessage(t, r) {
        let i = new Wn(t, r);
        return Oe(i.bcsToBytes(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"]);
    }
    signWithAuthenticator(t) {
        return new yt(this.authenticationFunction, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(t), this.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(t)).toUint8Array());
    }
    signTransactionWithAuthenticator(t) {
        let r = n.generateAccountAbstractionMessage(Ce(t), this.authenticationFunction);
        return this.signWithAuthenticator(r);
    }
    signTransaction(t) {
        return this.sign(Ce(t));
    }
    setSigner(t) {
        this.sign = (r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EF4FA5I6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t(r));
    }
};
;
var fn = class fn extends rr {
    constructor({ signer: e, authenticationFunction: t, abstractPublicKey: r }){
        let i = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](fn.computeAccountAddress(t, r));
        super({
            accountAddress: i,
            signer: e,
            authenticationFunction: t
        }), this.abstractPublicKey = r;
    }
    static computeAccountAddress(e, t) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(e)) throw new Error(`Invalid authentication function ${e} passed into DerivableAbstractedAccount`);
        let [r, i, o] = e.split("::"), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"].create(), a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(r).serialize(a), a.serializeStr(i), a.serializeStr(o), s.update(a.toUint8Array());
        let c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return c.serializeBytes(t), s.update(c.toUint8Array()), s.update(new Uint8Array([
            fn.ADDRESS_DOMAIN_SEPERATOR
        ])), s.digest();
    }
    signWithAuthenticator(e) {
        return new yt(this.authenticationFunction, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(e), this.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(e)).value, this.abstractPublicKey);
    }
};
fn.ADDRESS_DOMAIN_SEPERATOR = 5;
var Oo = fn;
;
function No(n) {
    return !!n.match(/^[_a-zA-Z0-9]+$/);
}
function Go(n) {
    return !!n.match(/\s/);
}
function za(n) {
    return !!n.match(/^T[0-9]+$/);
}
function Da(n) {
    return !!n.match(/^&.+$/);
}
function Ra(n) {
    switch(n){
        case "signer":
        case "address":
        case "bool":
        case "u8":
        case "u16":
        case "u32":
        case "u64":
        case "u128":
        case "u256":
            return !0;
        default:
            return !1;
    }
}
function Oa(n, e) {
    let t = e;
    for(; t < n.length; t += 1){
        let r = n[t];
        if (!Go(r)) break;
    }
    return t;
}
var Na = ((h)=>(h.InvalidTypeTag = "unknown type", h.UnexpectedGenericType = "unexpected generic type", h.UnexpectedTypeArgumentClose = "unexpected '>'", h.UnexpectedWhitespaceCharacter = "unexpected whitespace character", h.UnexpectedComma = "unexpected ','", h.TypeArgumentCountMismatch = "type argument count doesn't match expected amount", h.MissingTypeArgumentClose = "no matching '>' for '<'", h.MissingTypeArgument = "no type argument before ','", h.UnexpectedPrimitiveTypeArguments = "primitive types not expected to have type arguments", h.UnexpectedVectorTypeArgumentCount = "vector type expected to have exactly one type argument", h.UnexpectedStructFormat = "unexpected struct format, must be of the form 0xaddress::module_name::struct_name", h.InvalidModuleNameCharacter = "module name must only contain alphanumeric or '_' characters", h.InvalidStructNameCharacter = "struct name must only contain alphanumeric or '_' characters", h.InvalidAddress = "struct address must be valid", h))(Na || {}), $ = class extends Error {
    constructor(e, t){
        super(`Failed to parse typeTag '${e}', ${t}`);
    }
};
function _e(n, e) {
    let t = e?.allowGenerics ?? !1, r = [], i = [], o = [], s = 0, a = "", c = 1;
    for(; s < n.length;){
        let d = n[s];
        if (d === "<") r.push({
            savedExpectedTypes: c,
            savedStr: a,
            savedTypes: o
        }), a = "", o = [], c = 1;
        else if (d === ">") {
            if (a !== "") {
                let h = An(a, i, t);
                o.push(h);
            }
            let l = r.pop();
            if (l === void 0) throw new $(n, "unexpected '>'");
            if (c !== o.length) throw new $(n, "type argument count doesn't match expected amount");
            let { savedStr: g, savedTypes: p, savedExpectedTypes: y } = l;
            i = o, o = p, a = g, c = y;
        } else if (d === ",") {
            if (r.length === 0) throw new $(n, "unexpected ','");
            if (a.length === 0) throw new $(n, "no type argument before ','");
            let l = An(a, i, t);
            i = [], o.push(l), a = "", c += 1;
        } else if (Go(d)) {
            let l = !1;
            if (a.length !== 0) {
                let p = An(a, i, t);
                i = [], o.push(p), a = "", l = !0;
            }
            s = Oa(n, s);
            let g = n[s];
            if (s < n.length && l && g !== "," && g !== ">") throw new $(n, "unexpected whitespace character");
            continue;
        } else a += d;
        s += 1;
    }
    if (r.length > 0) throw new $(n, "no matching '>' for '<'");
    switch(o.length){
        case 0:
            return An(a, i, t);
        case 1:
            if (a === "") return o[0];
            throw new $(n, "unexpected ','");
        default:
            throw new $(n, "unexpected whitespace character");
    }
}
function An(n, e, t) {
    let r = n.trim(), i = r.toLowerCase();
    if (Ra(i) && e.length > 0) throw new $(n, "primitive types not expected to have type arguments");
    switch(r.toLowerCase()){
        case "signer":
            return new mt;
        case "bool":
            return new V;
        case "address":
            return new R;
        case "u8":
            return new oe;
        case "u16":
            return new qe;
        case "u32":
            return new We;
        case "u64":
            return new W;
        case "u128":
            return new je;
        case "u256":
            return new Qe;
        case "vector":
            if (e.length !== 1) throw new $(n, "vector type expected to have exactly one type argument");
            return new v(e[0]);
        default:
            if (Da(r)) {
                let a = r.substring(1);
                return new jn(An(a, e, t));
            }
            if (za(r)) {
                if (t) return new N(Number(r.split("T")[1]));
                throw new $(n, "unexpected generic type");
            }
            if (!r.match(/:/)) throw new $(n, "unknown type");
            let o = r.split("::");
            if (o.length !== 3) throw new $(n, "unexpected struct format, must be of the form 0xaddress::module_name::struct_name");
            let s;
            try {
                s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(o[0]);
            } catch  {
                throw new $(n, "struct address must be valid");
            }
            if (!No(o[1])) throw new $(n, "module name must only contain alphanumeric or '_' characters");
            if (!No(o[2])) throw new $(n, "struct name must only contain alphanumeric or '_' characters");
            return new f(new Re(s, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](o[1]), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](o[2]), e));
    }
}
function Mo(n) {
    return typeof n == "boolean";
}
function nt(n) {
    return typeof n == "string";
}
function Ga(n) {
    return typeof n == "number";
}
function ir(n) {
    if (Ga(n)) return n;
    if (nt(n) && n !== "") return Number.parseInt(n, 10);
}
function or(n) {
    return typeof n == "number" || typeof n == "bigint" || typeof n == "string";
}
function Bo(n) {
    return n == null;
}
function Vo(n) {
    return Hr(n) || $r(n) || qr(n) || Wr(n) || jr(n) || Qr(n) || Jr(n) || sr(n) || Lr(n) || Ma(n) || n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] || n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"];
}
function Hr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
}
function sr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
}
function Lr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"];
}
function Ma(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
}
function $r(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
}
function qr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"];
}
function Wr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"];
}
function jr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"];
}
function Qr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"];
}
function Jr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"];
}
function Ho(n) {
    return "bytecode" in n;
}
function _(n, e) {
    throw new Error(`Type mismatch for argument ${e}, expected '${n}'`);
}
function Lo(n) {
    let e = n.params.findIndex((t)=>t !== "signer" && t !== "&signer");
    return e < 0 ? n.params.length : e;
}
var Ba = new TextEncoder;
function ar(n) {
    return n?.map((e)=>nt(e) ? _e(e) : e) ?? [];
}
async function Va(n, e, t) {
    return (await cr({
        aptosConfig: t,
        accountAddress: n,
        moduleName: e
    })).abi;
}
async function Yr(n, e, t, r) {
    let i = await Va(n, e, r);
    if (!i) throw new Error(`Could not find module ABI for '${n}::${e}'`);
    return i.exposed_functions.find((o)=>o.name === t);
}
async function hm(n, e, t, r) {
    let i = await Yr(n, e, t, r);
    if (!i) throw new Error(`Could not find function ABI for '${n}::${e}::${t}'`);
    let o = [];
    for(let s = 0; s < i.params.length; s += 1)o.push(_e(i.params[s], {
        allowGenerics: !0
    }));
    return {
        typeParameters: i.generic_type_params,
        parameters: o
    };
}
async function $o(n, e, t, r) {
    let i = await Yr(n, e, t, r);
    if (!i) throw new Error(`Could not find entry function ABI for '${n}::${e}::${t}'`);
    if (!i.is_entry) throw new Error(`'${n}::${e}::${t}' is not an entry function`);
    let o = Lo(i), s = [];
    for(let a = o; a < i.params.length; a += 1)s.push(_e(i.params[a], {
        allowGenerics: !0
    }));
    return {
        signers: o,
        typeParameters: i.generic_type_params,
        parameters: s
    };
}
async function qo(n, e, t, r) {
    let i = await Yr(n, e, t, r);
    if (!i) throw new Error(`Could not find view function ABI for '${n}::${e}::${t}'`);
    if (!i.is_view) throw new Error(`'${n}::${e}::${t}' is not an view function`);
    let o = [];
    for(let a = 0; a < i.params.length; a += 1)o.push(_e(i.params[a], {
        allowGenerics: !0
    }));
    let s = [];
    for(let a = 0; a < i.return.length; a += 1)s.push(_e(i.return[a], {
        allowGenerics: !0
    }));
    return {
        typeParameters: i.generic_type_params,
        parameters: o,
        returnTypes: s
    };
}
function Xr(n, e, t, r, i, o) {
    let s;
    if ("exposed_functions" in e) {
        let a = e.exposed_functions.find((c)=>c.name === n);
        if (!a) throw new Error(`Could not find function ABI for '${e.address}::${e.name}::${n}'`);
        if (r >= a.params.length) throw new Error(`Too many arguments for '${n}', expected ${a.params.length}`);
        s = _e(a.params[r], {
            allowGenerics: !0
        });
    } else {
        if (r >= e.parameters.length) throw new Error(`Too many arguments for '${n}', expected ${e.parameters.length}`);
        s = e.parameters[r];
    }
    return Kt(t, s, r, i, "exposed_functions" in e ? e : void 0, o);
}
function Kt(n, e, t, r, i, o) {
    return Vo(n) ? (Zr(e, n, t), n) : Ha(n, e, t, r, i, o);
}
function Ha(n, e, t, r, i, o) {
    if (e.isBool()) {
        if (Mo(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n);
        if (nt(n)) {
            if (n === "true") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](!0);
            if (n === "false") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](!1);
        }
        _("boolean", t);
    }
    if (e.isAddress()) {
        if (nt(n)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(n);
        if (n && typeof n == "object" && "data" in n && n.data instanceof Uint8Array) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](n.data);
        _("string | AccountAddress", t);
    }
    if (e.isU8()) {
        let s = ir(n);
        if (s !== void 0) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](s);
        _("number | string", t);
    }
    if (e.isU16()) {
        let s = ir(n);
        if (s !== void 0) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](s);
        _("number | string", t);
    }
    if (e.isU32()) {
        let s = ir(n);
        if (s !== void 0) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](s);
        _("number | string", t);
    }
    if (e.isU64()) {
        if (or(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](BigInt(n));
        _("bigint | number | string", t);
    }
    if (e.isU128()) {
        if (or(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"](BigInt(n));
        _("bigint | number | string", t);
    }
    if (e.isU256()) {
        if (or(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"](BigInt(n));
        _("bigint | number | string", t);
    }
    if (e.isGeneric()) {
        let s = e.value;
        if (s < 0 || s >= r.length) throw new Error(`Generic argument ${e.toString()} is invalid for argument ${t}`);
        return Kt(n, r[s], t, r, i);
    }
    if (e.isVector()) {
        if (e.value.isU8()) {
            if (nt(n)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(Ba.encode(n));
            if (n instanceof Uint8Array) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(n);
            if (n instanceof ArrayBuffer) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(new Uint8Array(n));
        }
        if (nt(n) && n.startsWith("[")) return Kt(JSON.parse(n), e, t, r);
        if (Array.isArray(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.map((s)=>Kt(s, e.value, t, r, i)));
        throw new Error(`Type mismatch for argument ${t}, type '${e.toString()}'`);
    }
    if (e.isStruct()) {
        if (e.isString()) {
            if (nt(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](n);
            _("string", t);
        }
        if (e.isObject()) {
            if (nt(n)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(n);
            if (n && typeof n == "object" && "data" in n && n.data instanceof Uint8Array) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](n.data);
            _("string | AccountAddress", t);
        }
        if (e.isDelegationKey() || e.isRateLimiter()) {
            if (n instanceof Uint8Array) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n);
            _("Uint8Array", t);
        }
        if (e.isOption()) {
            if (Bo(n)) {
                let a = e.value.typeArgs[0];
                return a instanceof V ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof R ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof oe ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof qe ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof We ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof W ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof je ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof Qe ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null);
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](Kt(n, e.value.typeArgs[0], t, r, i));
        }
        if (i?.structs.find((a)=>a.name === e.value.name.identifier)?.fields.length === 0 && n instanceof Uint8Array) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n);
        if (n instanceof Uint8Array && o?.allowUnknownStructs) return console.warn(`Unsupported struct input type for argument ${t}. Continuing since 'allowUnknownStructs' is enabled.`), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n);
        throw new Error(`Unsupported struct input type for argument ${t}, type '${e.toString()}'`);
    }
    throw new Error(`Type mismatch for argument ${t}, type '${e.toString()}'`);
}
function Zr(n, e, t) {
    if (n.isBool()) {
        if (Hr(e)) return;
        _("Bool", t);
    }
    if (n.isAddress()) {
        if (sr(e)) return;
        _("AccountAddress", t);
    }
    if (n.isU8()) {
        if ($r(e)) return;
        _("U8", t);
    }
    if (n.isU16()) {
        if (qr(e)) return;
        _("U16", t);
    }
    if (n.isU32()) {
        if (Wr(e)) return;
        _("U32", t);
    }
    if (n.isU64()) {
        if (jr(e)) return;
        _("U64", t);
    }
    if (n.isU128()) {
        if (Qr(e)) return;
        _("U128", t);
    }
    if (n.isU256()) {
        if (Jr(e)) return;
        _("U256", t);
    }
    if (n.isVector()) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]) {
            e.values.length > 0 && Zr(n.value, e.values[0], t);
            return;
        }
        _("MoveVector", t);
    }
    if (n instanceof f) {
        if (n.isString()) {
            if (Lr(e)) return;
            _("MoveString", t);
        }
        if (n.isObject()) {
            if (sr(e)) return;
            _("AccountAddress", t);
        }
        if (n.isOption()) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]) {
                e.value !== void 0 && Zr(n.value.typeArgs[0], e.value, t);
                return;
            }
            _("MoveOption", t);
        }
    }
    throw new Error(`Type mismatch for argument ${t}, expected '${n.toString()}'`);
}
async function ur(n) {
    if (Ho(n)) return Wa(n);
    let { moduleAddress: e, moduleName: t, functionName: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(n.function), i = await Jo({
        key: "entry-function",
        moduleAddress: e,
        moduleName: t,
        functionName: r,
        aptosConfig: n.aptosConfig,
        abi: n.abi,
        fetch: $o
    });
    return $a({
        ...n,
        abi: i
    });
}
function $a(n) {
    let e = n.abi, { moduleAddress: t, moduleName: r, functionName: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(n.function), o = ar(n.typeArguments);
    if (o.length !== e.typeParameters.length) throw new Error(`Type argument count mismatch, expected ${e.typeParameters.length}, received ${o.length}`);
    let s = n.functionArguments.map((c, d)=>Xr(n.function, e, c, d, o));
    if (s.length !== e.parameters.length) throw new Error(`Too few arguments for '${t}::${r}::${i}', expected ${e.parameters.length} but got ${s.length}`);
    let a = Je.build(`${t}::${r}`, i, o, s);
    if ("multisigAddress" in n) {
        let c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(n.multisigAddress);
        return new $t(new pn(c, new ln(a)));
    }
    return new Lt(a);
}
async function Wo(n) {
    let { moduleAddress: e, moduleName: t, functionName: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(n.function), i = await Jo({
        key: "view-function",
        moduleAddress: e,
        moduleName: t,
        functionName: r,
        aptosConfig: n.aptosConfig,
        abi: n.abi,
        fetch: qo
    });
    return qa({
        abi: i,
        ...n
    });
}
function qa(n) {
    let e = n.abi, { moduleAddress: t, moduleName: r, functionName: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(n.function), o = ar(n.typeArguments);
    if (o.length !== e.typeParameters.length) throw new Error(`Type argument count mismatch, expected ${e.typeParameters.length}, received ${o.length}`);
    let s = n?.functionArguments?.map((a, c)=>Xr(n.function, e, a, c, o)) ?? [];
    if (s.length !== e.parameters.length) throw new Error(`Too few arguments for '${t}::${r}::${i}', expected ${e.parameters.length} but got ${s.length}`);
    return Je.build(`${t}::${r}`, i, o, s);
}
function Wa(n) {
    return new Ht(new qt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(n.bytecode).toUint8Array(), ar(n.typeArguments), n.functionArguments));
}
async function ja(n) {
    let { aptosConfig: e, sender: t, payload: r, options: i, feePayerAddress: o } = n;
    if (i?.replayProtectionNonce !== void 0 && i?.accountSequenceNumber !== void 0) throw new Error("Cannot specify both replayProtectionNonce and accountSequenceNumber in options.");
    let s = async ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"][e.network] ? {
            chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"][e.network]
        } : {
            chainId: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
                aptosConfig: e
            })).chain_id
        }, a = async ()=>i?.gasUnitPrice ? {
            gasEstimate: i.gasUnitPrice
        } : {
            gasEstimate: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
                aptosConfig: e
            })).gas_estimate
        }, c = async ()=>{
        let X = async ()=>i?.accountSequenceNumber !== void 0 ? i.accountSequenceNumber : i?.replayProtectionNonce !== void 0 ? 0xdeadbeefn : (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JABP65XD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
                aptosConfig: e,
                accountAddress: t
            })).sequence_number;
        if (o && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(o).equals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ZERO)) try {
            return await X();
        } catch  {
            return 0;
        }
        else return X();
    }, [{ chainId: d }, { gasEstimate: l }, g] = await Promise.all([
        s(),
        a(),
        c()
    ]), { maxGasAmount: p, gasUnitPrice: y, expireTimestamp: h, replayProtectionNonce: U } = {
        maxGasAmount: i?.maxGasAmount ? BigInt(i.maxGasAmount) : BigInt(e.getDefaultMaxGasAmount()),
        gasUnitPrice: i?.gasUnitPrice ?? BigInt(l),
        expireTimestamp: i?.expireTimestamp ?? BigInt(Math.floor(Date.now() / 1e3) + e.getDefaultTxnExpirySecFromNow()),
        replayProtectionNonce: i?.replayProtectionNonce ? BigInt(i.replayProtectionNonce) : void 0
    }, M = r;
    return U !== void 0 && (M = Qa(r, U)), new he(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t), BigInt(g), M, BigInt(p), BigInt(y), BigInt(h), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XKUIMGKU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](d));
}
function Qa(n, e) {
    if (n instanceof Ht) return new ft(new gn(n.script), new At(void 0, e));
    if (n instanceof Lt) return new ft(new jt(n.entryFunction), new At(void 0, e));
    if (n instanceof $t) {
        let t = n.multiSig.transaction_payload, r;
        if (t === void 0 || t?.transaction_payload === void 0) r = new yn;
        else if (t.transaction_payload instanceof Je) r = new jt(t.transaction_payload);
        else throw new Error("Scripts are not supported in multi-sig transactions.");
        return new ft(r, new At(n.multiSig.multisig_address, e));
    } else throw new Error(`Unsupported payload type: ${n}`);
}
async function ei(n) {
    let { aptosConfig: e, sender: t, payload: r, options: i, feePayerAddress: o } = n, s = await ja({
        aptosConfig: e,
        sender: t,
        payload: r,
        options: i,
        feePayerAddress: o
    });
    if ("secondarySignerAddresses" in n) {
        let a = n.secondarySignerAddresses?.map((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(c)) ?? [];
        return new Xn(s, a, n.feePayerAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(n.feePayerAddress) : void 0);
    }
    return new Yn(s, n.feePayerAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(n.feePayerAddress) : void 0);
}
function jo(n) {
    let { signerPublicKey: e, transaction: t, secondarySignersPublicKeys: r, feePayerPublicKey: i } = n, o = en(e);
    if (t.feePayerAddress) {
        let a = new bt(t.rawTransaction, t.secondarySignerAddresses ?? [], t.feePayerAddress), c = [];
        t.secondarySignerAddresses && (r ? c = r.map((g)=>en(g)) : c = Array.from({
            length: t.secondarySignerAddresses.length
        }, ()=>en(void 0)));
        let d = en(i), l = new St(o, t.secondarySignerAddresses ?? [], c, {
            address: t.feePayerAddress,
            authenticator: d
        });
        return new Ye(a.raw_txn, l).bcsToBytes();
    }
    if (t.secondarySignerAddresses) {
        let a = new ht(t.rawTransaction, t.secondarySignerAddresses), c = [];
        r ? c = r.map((l)=>en(l)) : c = Array.from({
            length: t.secondarySignerAddresses.length
        }, ()=>en(void 0));
        let d = new Tt(o, t.secondarySignerAddresses, c);
        return new Ye(a.raw_txn, d).bcsToBytes();
    }
    let s;
    if (o instanceof Ee) s = new wt(o.public_key, o.signature);
    else if (o instanceof ie || o instanceof De) s = new ct(o);
    else if (o instanceof Vt) s = new ct(o);
    else throw new Error("Invalid public key");
    return new Ye(t.rawTransaction, s).bcsToBytes();
}
function en(n) {
    if (!n) return new Vt;
    let t = E.isInstance(n) || G.isInstance(n) || Ke.isInstance(n) ? new x(n) : n, r = new C(new Uint8Array(64));
    if (b.isInstance(t)) return new Ee(t, r);
    if (x.isInstance(t)) return E.isInstance(t.publicKey) ? new ie(t, new D(re.getSimulationSignature())) : new ie(t, new D(r));
    if (B.isInstance(t)) return new De(t, new Ae({
        signatures: t.publicKeys.map((i)=>E.isInstance(i.publicKey) || G.isInstance(i.publicKey) ? new D(re.getSimulationSignature()) : new D(r)),
        bitmap: t.createBitmap({
            bits: Array(t.publicKeys.length).fill(0).map((i, o)=>o)
        })
    }));
    throw new Error("Unsupported PublicKey used for simulations");
}
function ti(n) {
    let { transaction: e, feePayerAuthenticator: t, additionalSignersAuthenticators: r } = n, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$CW35YAMN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(q, n.senderAuthenticator), o;
    if (e.feePayerAddress) {
        if (!t) throw new Error("Must provide a feePayerAuthenticator argument to generate a signed fee payer transaction");
        o = new St(i, e.secondarySignerAddresses ?? [], r ?? [], {
            address: e.feePayerAddress,
            authenticator: t
        });
    } else if (e.secondarySignerAddresses) {
        if (!r) throw new Error("Must provide a additionalSignersAuthenticators argument to generate a signed multi agent transaction");
        o = new Tt(i, e.secondarySignerAddresses, r);
    } else i instanceof Ee ? o = new wt(i.public_key, i.signature) : i instanceof $e ? o = new Qt(i.public_key, i.signature) : o = new ct(i);
    return new Ye(e.rawTransaction, o).bcsToBytes();
}
function Qo(n) {
    let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"].create();
    for (let t of n)e.update(t);
    return e.digest();
}
var Ja = Qo([
    "APTOS::Transaction"
]);
function $m(n) {
    let e = ti(n);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](Qo([
        Ja,
        new Uint8Array([
            0
        ]),
        e
    ])).toString();
}
async function Jo({ key: n, moduleAddress: e, moduleName: t, functionName: r, aptosConfig: i, abi: o, fetch: s }) {
    return o !== void 0 ? o : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(async ()=>s(e, t, r, i), `${n}-${i.network}-${e}-${t}-${r}`, 1e3 * 60 * 5)();
}
async function A(n) {
    let e = await Ya(n);
    return Xa(n, e);
}
async function Ya(n) {
    let { aptosConfig: e, data: t } = n, r, i;
    return "bytecode" in t ? i = await ur(t) : "multisigAddress" in t ? (r = {
        aptosConfig: e,
        multisigAddress: t.multisigAddress,
        function: t.function,
        functionArguments: t.functionArguments,
        typeArguments: t.typeArguments,
        abi: t.abi
    }, i = await ur(r)) : (r = {
        aptosConfig: e,
        function: t.function,
        functionArguments: t.functionArguments,
        typeArguments: t.typeArguments,
        abi: t.abi
    }, i = await ur(r)), i;
}
async function Xa(n, e) {
    let { aptosConfig: t, sender: r, options: i } = n, o;
    if (ec(n) && (o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ZERO.toString()), tc(n)) {
        let { secondarySignerAddresses: s } = n;
        return ei({
            aptosConfig: t,
            sender: r,
            payload: e,
            options: i,
            secondarySignerAddresses: s,
            feePayerAddress: o
        });
    }
    return ei({
        aptosConfig: t,
        sender: r,
        payload: e,
        options: i,
        feePayerAddress: o
    });
}
function ec(n) {
    return n.withFeePayer === !0;
}
function tc(n) {
    return "secondarySignerAddresses" in n;
}
function Zo(n) {
    let { transaction: e } = n;
    return Ce(e);
}
function dr(n) {
    let { signer: e, transaction: t } = n;
    return e.signTransactionWithAuthenticator(t);
}
function pr(n) {
    let { signer: e, transaction: t } = n;
    if (!t.feePayerAddress) throw new Error(`Transaction ${t} is not a Fee Payer transaction`);
    return t.feePayerAddress = e.accountAddress, dr({
        signer: e,
        transaction: t
    });
}
async function ni(n) {
    let { aptosConfig: e, transaction: t, signerPublicKey: r, secondarySignersPublicKeys: i, feePayerPublicKey: o, options: s } = n, a = jo({
        transaction: t,
        signerPublicKey: r,
        secondarySignersPublicKeys: i,
        feePayerPublicKey: o,
        options: s
    }), { data: c } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        body: a,
        path: "transactions/simulate",
        params: {
            estimate_gas_unit_price: n.options?.estimateGasUnitPrice ?? !1,
            estimate_max_gas_amount: n.options?.estimateMaxGasAmount ?? !1,
            estimate_prioritized_gas_unit_price: n.options?.estimatePrioritizedGasUnitPrice ?? !1
        },
        originMethod: "simulateTransaction",
        contentType: "application/x.aptos.signed_transaction+bcs"
    });
    return c;
}
async function hn(n) {
    let { aptosConfig: e, transactionSubmitter: t } = n, r = t === void 0 ? e.getTransactionSubmitter() : t;
    if (r) return r.submitTransaction(n);
    let i = ti({
        ...n
    });
    try {
        let { data: o } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: e,
            body: i,
            path: "transactions",
            originMethod: "submitTransaction",
            contentType: "application/x.aptos.signed_transaction+bcs"
        });
        return o;
    } catch (o) {
        let s = Ye.deserialize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](i));
        throw s.authenticator.isSingleSender() && s.authenticator.sender.isSingleKey() && (s.authenticator.sender.public_key.publicKey instanceof E || s.authenticator.sender.public_key.publicKey instanceof G) && await me.fetchJWK({
            aptosConfig: e,
            publicKey: s.authenticator.sender.public_key.publicKey,
            kid: s.authenticator.sender.signature.signature.getJwkKid()
        }), o;
    }
}
async function lr(n) {
    let { aptosConfig: e, signer: t, feePayer: r, transaction: i, ...o } = n;
    nr(t) && await t.checkKeylessAccountValidity(e), nr(r) && await r.checkKeylessAccountValidity(e);
    let s = n.feePayerAuthenticator || r && pr({
        signer: r,
        transaction: i
    }), a = dr({
        signer: t,
        transaction: i
    });
    return hn({
        aptosConfig: e,
        transaction: i,
        senderAuthenticator: a,
        feePayerAuthenticator: s,
        ...o
    });
}
async function Yo(n) {
    let { aptosConfig: e, senderAuthenticator: t, feePayer: r, transaction: i, ...o } = n;
    nr(r) && await r.checkKeylessAccountValidity(e);
    let s = pr({
        signer: r,
        transaction: i
    });
    return hn({
        aptosConfig: e,
        transaction: i,
        senderAuthenticator: t,
        feePayerAuthenticator: s,
        ...o
    });
}
var nc = {
    typeParameters: [],
    parameters: [
        v.u8(),
        new v(v.u8())
    ]
};
async function Xo(n) {
    let { aptosConfig: e, account: t, metadataBytes: r, moduleBytecode: i, options: o } = n, s = i.map((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(a));
    return A({
        aptosConfig: e,
        sender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t),
        data: {
            function: "0x1::code::publish_package_txn",
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(r),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](s)
            ],
            abi: nc
        },
        options: o
    });
}
async function tn(n) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JABP65XD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(n);
}
async function ts(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
        aptosConfig: e,
        originMethod: "getModules",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/modules`,
        params: {
            ledger_version: r?.ledgerVersion,
            limit: r?.limit ?? 1e3
        }
    });
}
async function ns(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, { response: i, cursor: o } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
        aptosConfig: e,
        originMethod: "getModulesPage",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/modules`,
        params: {
            ledger_version: r?.ledgerVersion,
            cursor: r?.cursor,
            limit: r?.limit ?? 100
        }
    });
    return {
        modules: i.data,
        cursor: o
    };
}
async function cr(n) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JABP65XD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(n);
}
async function oi(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        aptosConfig: e,
        originMethod: "getTransactions",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/transactions`,
        params: {
            start: r?.offset,
            limit: r?.limit
        }
    });
}
async function si(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
        aptosConfig: e,
        originMethod: "getResources",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/resources`,
        params: {
            ledger_version: r?.ledgerVersion,
            limit: r?.limit ?? 999
        }
    });
}
async function rs(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, { response: i, cursor: o } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
        aptosConfig: e,
        originMethod: "getResourcesPage",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/resources`,
        params: {
            ledger_version: r?.ledgerVersion,
            cursor: r?.cursor,
            limit: r?.limit ?? 100
        }
    });
    return {
        resources: i.data,
        cursor: o
    };
}
async function ai(n) {
    let { aptosConfig: e, accountAddress: t, resourceType: r, options: i } = n, { data: o } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        originMethod: "getResource",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/resource/${r}`,
        params: {
            ledger_version: i?.ledgerVersion
        }
    });
    return o.data;
}
async function nn(n) {
    let { aptosConfig: e, authenticationKey: t, options: r } = n, i = await ai({
        aptosConfig: e,
        accountAddress: "0x1",
        resourceType: "0x1::account::OriginatingAddress",
        options: r
    }), { address_map: { handle: o } } = i, s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t);
    try {
        let a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$M3AO73ZL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            aptosConfig: e,
            handle: o,
            data: {
                key: s.toString(),
                key_type: "address",
                value_type: "address"
            },
            options: r
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(a);
    } catch (a) {
        if (a instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"] && a.data.error_code === "table_item_not_found") return s;
        throw a;
    }
}
async function is(n) {
    let { aptosConfig: e, accountAddress: t } = n, i = {
        owner_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        },
        amount: {
            _gt: 0
        }
    }, s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"],
            variables: {
                where_condition: i
            }
        },
        originMethod: "getAccountTokensCount"
    });
    return s.current_token_ownerships_v2_aggregate.aggregate ? s.current_token_ownerships_v2_aggregate.aggregate.count : 0;
}
async function os(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, o = {
        owner_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        },
        amount: {
            _gt: 0
        }
    };
    r?.tokenStandard && (o.token_standard = {
        _eq: r?.tokenStandard
    });
    let s = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"],
        variables: {
            where_condition: o,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: s,
        originMethod: "getAccountOwnedTokens"
    })).current_token_ownerships_v2;
}
async function ss(n) {
    let { aptosConfig: e, accountAddress: t, collectionAddress: r, options: i } = n, o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r).toStringLong(), a = {
        owner_address: {
            _eq: o
        },
        current_token_data: {
            collection_id: {
                _eq: s
            }
        },
        amount: {
            _gt: 0
        }
    };
    i?.tokenStandard && (a.token_standard = {
        _eq: i?.tokenStandard
    });
    let c = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"],
        variables: {
            where_condition: a,
            offset: i?.offset,
            limit: i?.limit,
            order_by: i?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: c,
        originMethod: "getAccountOwnedTokensFromCollectionAddress"
    })).current_token_ownerships_v2;
}
async function as(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, o = {
        owner_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    };
    r?.tokenStandard && (o.current_collection = {
        token_standard: {
            _eq: r?.tokenStandard
        }
    });
    let s = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"],
        variables: {
            where_condition: o,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: s,
        originMethod: "getAccountCollectionsWithOwnedTokens"
    })).current_collection_ownership_v2_view;
}
async function cs(n) {
    let { aptosConfig: e, accountAddress: t } = n, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"],
            variables: {
                address: r
            }
        },
        originMethod: "getAccountTransactionsCount"
    });
    return o.account_transactions_aggregate.aggregate ? o.account_transactions_aggregate.aggregate.count : 0;
}
async function gA(n) {
    let { aptosConfig: e, accountAddress: t, coinType: r, faMetadataAddress: i } = n, o = r, s;
    if (r !== void 0 && i !== void 0) s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i).toStringLong();
    else if (r !== void 0 && i === void 0) r === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"] ? s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A.toStringLong() : s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HNBVYE3N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A, r).toStringLong();
    else if (r === void 0 && i !== void 0) {
        let l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i);
        s = l.toStringLong(), l === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A && (o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]);
    } else throw new Error("Either coinType, fungibleAssetAddress, or both must be provided");
    let a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), c = {
        asset_type: {
            _eq: s
        }
    };
    o !== void 0 && (c = {
        asset_type: {
            _in: [
                o,
                s
            ]
        }
    });
    let d = await ci({
        aptosConfig: e,
        accountAddress: a,
        options: {
            where: c
        }
    });
    return d[0] ? d[0].amount : 0;
}
async function ci(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), o = {
        ...r?.where,
        owner_address: {
            _eq: i
        }
    }, s = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"],
        variables: {
            where_condition: o,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: s,
        originMethod: "getAccountCoinsData"
    })).current_fungible_asset_balances;
}
async function us(n) {
    let { aptosConfig: e, accountAddress: t } = n, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"],
            variables: {
                address: r
            }
        },
        originMethod: "getAccountCoinsCount"
    });
    if (!o.current_fungible_asset_balances_aggregate.aggregate) throw Error("Failed to get the count of account coins");
    return o.current_fungible_asset_balances_aggregate.aggregate.count;
}
async function ds(n) {
    let { aptosConfig: e, accountAddress: t, asset: r } = n, i = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        originMethod: "getBalance",
        path: `accounts/${t}/balance/${r}`,
        params: {
            accountAddress: t.toString(),
            asset: r instanceof Uint8Array ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r).toString() : r.toString()
        }
    });
    return parseInt(i.data.toString(), 10);
}
async function ui(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, o = {
        owner_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    }, s = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"],
        variables: {
            where_condition: o,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: s,
        originMethod: "getAccountOwnedObjects"
    })).current_objects;
}
async function ps(n) {
    let { aptosConfig: e, privateKey: t, options: r } = n, i = r?.throwIfNoAccountFound ?? !1, o = await gr({
        aptosConfig: e,
        privateKey: t
    });
    if (o.length === 0) {
        if (i) throw new Error("No existing account found for private key.");
        return Xe.fromPrivateKey({
            privateKey: t
        });
    }
    return o[0];
}
async function yA(n) {
    let { aptosConfig: e, authKey: t } = n, r = await nn({
        aptosConfig: e,
        authenticationKey: t.derivedAddress()
    });
    return ls({
        aptosConfig: e,
        accountAddress: r
    });
}
async function ls(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n;
    try {
        let [i, o] = await Promise.all([
            si({
                aptosConfig: e,
                accountAddress: t
            }),
            ui({
                aptosConfig: e,
                accountAddress: t,
                options: {
                    limit: 1
                }
            })
        ]), s = i.find((c)=>c.type === "0x1::account::Account");
        if (!s && o.length === 0) return !1;
        if (!r?.withAuthKey) return !0;
        let a;
        return s ? a = s.data.authentication_key : a = t.toStringLong(), a === r.withAuthKey.toString();
    } catch (i) {
        throw new Error(`Error while checking if account exists at ${t.toString()}: ${i}`);
    }
}
var rc = {
    typeParameters: [],
    parameters: [
        new oe,
        v.u8(),
        new oe,
        v.u8(),
        v.u8(),
        v.u8()
    ]
};
async function gs(n) {
    let { aptosConfig: e, fromAccount: t, options: r } = n;
    if ("toNewPrivateKey" in n) return ri({
        aptosConfig: e,
        fromAccount: t,
        toNewPrivateKey: n.toNewPrivateKey,
        options: r
    });
    if ("toAccount" in n) return n.toAccount instanceof Y ? ri({
        aptosConfig: e,
        fromAccount: t,
        toNewPrivateKey: n.toAccount.privateKey,
        options: r
    }) : ri({
        aptosConfig: e,
        fromAccount: t,
        toAccount: n.toAccount,
        options: r
    });
    throw new Error("Invalid arguments");
}
async function ri(n) {
    let { aptosConfig: e, fromAccount: t, options: r } = n, i = await tn({
        aptosConfig: e,
        accountAddress: t.accountAddress
    }), o;
    "toNewPrivateKey" in n ? o = Xe.fromPrivateKey({
        privateKey: n.toNewPrivateKey,
        legacy: !0
    }) : o = n.toAccount;
    let a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2XQKGWHQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]({
        sequenceNumber: BigInt(i.sequence_number),
        originator: t.accountAddress,
        currentAuthKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i.authentication_key),
        newPublicKey: o.publicKey
    }).bcsToBytes(), c = t.sign(a), d = o.sign(a);
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::account::rotate_authentication_key",
            functionArguments: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](t.signingScheme),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(t.publicKey.toUint8Array()),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](o.signingScheme),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(o.publicKey.toUint8Array()),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(c.toUint8Array()),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(d.toUint8Array())
            ],
            abi: rc
        },
        options: r
    });
}
var ic = {
    typeParameters: [],
    parameters: [
        new oe,
        v.u8()
    ]
};
async function ys(n) {
    let { aptosConfig: e, fromAccount: t, toNewPublicKey: r, options: i } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::account::rotate_authentication_key_from_public_key",
            functionArguments: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](es(r)),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(ii(r).toUint8Array())
            ],
            abi: ic
        },
        options: i
    });
}
async function yr(n) {
    let { aptosConfig: e, publicKey: t, options: r } = n, i = r?.noMultiKey ?? !1;
    if (i && t instanceof xe) throw new Error("Multi-key accounts are not supported when noMultiKey is true.");
    let o = [
        t
    ];
    t instanceof x && t.publicKey instanceof b ? o.push(t.publicKey) : t instanceof b && o.push(new x(t));
    let [s, a] = await Promise.all([
        Promise.all(o.map(async (g)=>{
            let p = await uc({
                aptosConfig: e,
                publicKey: g
            });
            if (p) return {
                ...p,
                publicKey: g
            };
        })),
        !(t instanceof xe) && !i ? sc({
            aptosConfig: e,
            publicKey: t,
            options: r
        }) : Promise.resolve([])
    ]), c = [];
    for (let g of s)g && c.push(g);
    o.push(...a);
    let d = new Map(o.map((g)=>[
            g.authKey().toString(),
            g
        ])), l = await ac({
        aptosConfig: e,
        authKeys: o.map((g)=>g.authKey()),
        options: r
    });
    for (let g of l){
        if (c.find((y)=>y.accountAddress === g.accountAddress)) continue;
        let p = d.get(g.authKey.toString());
        if (!p) throw new Error(`No publicKey found for authentication key ${g.authKey}. This should never happen.`);
        c.push({
            accountAddress: g.accountAddress,
            publicKey: p,
            lastTransactionVersion: g.lastTransactionVersion
        });
    }
    return c.sort((g, p)=>p.lastTransactionVersion - g.lastTransactionVersion);
}
async function di(n) {
    let { aptosConfig: e, signer: t, options: r } = n;
    if (t instanceof L || t instanceof He) return gr({
        aptosConfig: e,
        privateKey: t,
        options: r
    });
    if (t instanceof Y || t instanceof se) return gr({
        aptosConfig: e,
        privateKey: t.privateKey,
        options: r
    });
    if (t instanceof be || t instanceof ve) return oc({
        aptosConfig: e,
        keylessAccount: t,
        options: r
    });
    if (t instanceof tt && t.signers.length === 1) return di({
        aptosConfig: e,
        signer: t.signers[0],
        options: r
    });
    if (t instanceof mn && t.signers.length === 1) return gr({
        aptosConfig: e,
        privateKey: t.signers[0],
        options: r
    });
    throw new Error("Unknown signer type");
}
async function oc(n) {
    let { aptosConfig: e, keylessAccount: t, options: r } = n, i = await yr({
        aptosConfig: e,
        publicKey: t.getAnyPublicKey(),
        options: r
    }), o = {
        proof: t.proofOrPromise,
        jwt: t.jwt,
        ephemeralKeyPair: t.ephemeralKeyPair,
        pepper: t.pepper,
        verificationKeyHash: t.verificationKeyHash
    }, s = [];
    for (let { accountAddress: a, publicKey: c } of i)if (c instanceof xe) {
        if (c.getSignaturesRequired() > 1) continue;
        if (c instanceof Z) throw new Error("Keyless authentication cannot be used for multi-ed25519 accounts. This should never happen.");
        c instanceof B && s.push(new tt({
            multiKey: c,
            signers: [
                t
            ],
            address: a
        }));
    } else t instanceof ve ? s.push(ve.create({
        ...o,
        address: a,
        jwkAddress: t.publicKey.jwkAddress
    })) : s.push(be.create({
        ...o,
        address: a
    }));
    return s;
}
async function gr(n) {
    let { aptosConfig: e, privateKey: t, options: r } = n, i = Xe.fromPrivateKey({
        privateKey: t,
        legacy: !1
    }), o = await yr({
        aptosConfig: e,
        publicKey: new x(t.publicKey()),
        options: r
    }), s = [];
    for (let { accountAddress: a, publicKey: c } of o)if (c instanceof xe) {
        if (c.getSignaturesRequired() > 1) continue;
        c instanceof Z ? s.push(new mn({
            publicKey: c,
            signers: [
                t
            ],
            address: a
        })) : c instanceof B && s.push(new tt({
            multiKey: c,
            signers: [
                i
            ],
            address: a
        }));
    } else {
        let d = c instanceof b;
        s.push(Xe.fromPrivateKey({
            privateKey: t,
            address: a,
            legacy: d
        }));
    }
    return s;
}
async function sc(n) {
    let { aptosConfig: e, publicKey: t, options: r } = n;
    if (t instanceof xe) throw new Error("Public key is a multi-key.");
    let i = r?.includeUnverified ?? !1, o = t instanceof x ? t : new x(t), s = o.publicKey, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MCFQE4GC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"])(o.variant), c = {
        public_key: {
            _eq: s.toString()
        },
        public_key_type: {
            _eq: a
        },
        ...i ? {} : {
            is_public_key_used: {
                _eq: !0
            }
        }
    }, d = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"],
        variables: {
            where_condition: c
        }
    }, { public_key_auth_keys: l } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: d,
        originMethod: "getMultiKeysForPublicKey"
    });
    return l.map((p)=>{
        switch(p.signature_type){
            case "multi_ed25519_signature":
                return Z.deserializeWithoutLength(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromHex(p.account_public_key));
            case "multi_key_signature":
                return B.deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromHex(p.account_public_key));
            default:
                throw new Error(`Unknown multi-signature type: ${p.signature_type}`);
        }
    });
}
async function ac(n) {
    let { aptosConfig: e, authKeys: t, options: r } = n, i = r?.includeUnverified ?? !1;
    if (t.length === 0) throw new Error("No authentication keys provided");
    let o = {
        auth_key: {
            _in: t.map((c)=>c.toString())
        },
        ...i ? {} : {
            is_auth_key_used: {
                _eq: !0
            }
        }
    }, s = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"],
        variables: {
            where_condition: o,
            order_by: [
                {
                    last_transaction_version: "desc"
                }
            ]
        }
    }, { auth_key_account_addresses: a } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: s,
        originMethod: "getAccountAddressesForAuthKeys"
    });
    return a.map((c)=>({
            authKey: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]({
                data: c.auth_key
            }),
            accountAddress: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToUint8Array(c.account_address)),
            lastTransactionVersion: Number(c.last_transaction_version)
        }));
}
async function cc(n) {
    let { aptosConfig: e, accountAddress: t } = n, r = await oi({
        aptosConfig: e,
        accountAddress: t,
        options: {
            limit: 1
        }
    });
    return r.length === 0 ? 0 : Number(r[0].version);
}
async function uc(n) {
    let { aptosConfig: e, publicKey: t } = n, r = t.authKey().derivedAddress(), [i, o] = await Promise.all([
        cc({
            aptosConfig: e,
            accountAddress: r
        }),
        ls({
            aptosConfig: e,
            accountAddress: r,
            options: {
                withAuthKey: t.authKey()
            }
        })
    ]);
    if (o) return {
        accountAddress: r,
        lastTransactionVersion: i
    };
}
async function ae(n) {
    let { aptosConfig: e, payload: t, options: r } = n, i = await Wo({
        ...t,
        aptosConfig: e
    }), o = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
    i.serialize(o);
    let s = o.toUint8Array(), { data: a } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        path: "view",
        originMethod: "view",
        contentType: "application/x.aptos.view_function+bcs",
        params: {
            ledger_version: r?.ledgerVersion
        },
        body: s
    });
    return a;
}
async function ms(n) {
    let { aptosConfig: e, payload: t, options: r } = n, { data: i } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        originMethod: "viewJson",
        path: "view",
        params: {
            ledger_version: r?.ledgerVersion
        },
        body: {
            function: t.function,
            type_arguments: t.typeArguments ?? [],
            arguments: t.functionArguments ?? []
        }
    });
    return i;
}
async function fs(n) {
    let { aptosConfig: e, sender: t, authenticationFunction: r, options: i } = n, { moduleAddress: o, moduleName: s, functionName: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(r);
    return A({
        aptosConfig: e,
        sender: t,
        data: {
            function: "0x1::account_abstraction::add_authentication_function",
            typeArguments: [],
            functionArguments: [
                o,
                s,
                a
            ],
            abi: {
                typeParameters: [],
                parameters: [
                    new R,
                    new f(I()),
                    new f(I())
                ]
            }
        },
        options: i
    });
}
async function As(n) {
    let { aptosConfig: e, sender: t, authenticationFunction: r, options: i } = n, { moduleAddress: o, moduleName: s, functionName: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(r);
    return A({
        aptosConfig: e,
        sender: t,
        data: {
            function: "0x1::account_abstraction::remove_authentication_function",
            typeArguments: [],
            functionArguments: [
                o,
                s,
                a
            ],
            abi: {
                typeParameters: [],
                parameters: [
                    new R,
                    new f(I()),
                    new f(I())
                ]
            }
        },
        options: i
    });
}
async function hs(n) {
    let { aptosConfig: e, sender: t, options: r } = n;
    return A({
        aptosConfig: e,
        sender: t,
        data: {
            function: "0x1::account_abstraction::remove_authenticator",
            typeArguments: [],
            functionArguments: [],
            abi: {
                typeParameters: [],
                parameters: []
            }
        },
        options: r
    });
}
var xt = class {
    constructor(e){
        this.config = e;
        this.isAccountAbstractionEnabled = async (e)=>{
            let t = await this.getAuthenticationFunction(e), { moduleAddress: r, moduleName: i, functionName: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(e.authenticationFunction);
            return t?.some((s)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(r).equals(s.moduleAddress) && i === s.moduleName && o === s.functionName) ?? !1;
        };
        this.enableAccountAbstractionTransaction = this.addAuthenticationFunctionTransaction;
        this.disableAccountAbstractionTransaction = async (e)=>{
            let { accountAddress: t, authenticationFunction: r, options: i } = e;
            return r ? this.removeAuthenticationFunctionTransaction({
                accountAddress: t,
                authenticationFunction: r,
                options: i
            }) : this.removeDispatchableAuthenticatorTransaction({
                accountAddress: t,
                options: i
            });
        };
    }
    async addAuthenticationFunctionTransaction(e) {
        let { accountAddress: t, authenticationFunction: r, options: i } = e;
        return fs({
            aptosConfig: this.config,
            authenticationFunction: r,
            sender: t,
            options: i
        });
    }
    async removeAuthenticationFunctionTransaction(e) {
        let { accountAddress: t, authenticationFunction: r, options: i } = e;
        return As({
            aptosConfig: this.config,
            sender: t,
            authenticationFunction: r,
            options: i
        });
    }
    async removeDispatchableAuthenticatorTransaction(e) {
        let { accountAddress: t, options: r } = e;
        return hs({
            aptosConfig: this.config,
            sender: t,
            options: r
        });
    }
    async getAuthenticationFunction(e) {
        let { accountAddress: t } = e, [{ vec: r }] = await ae({
            aptosConfig: this.config,
            payload: {
                function: "0x1::account_abstraction::dispatchable_authenticator",
                functionArguments: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t)
                ],
                abi: {
                    typeParameters: [],
                    parameters: [
                        new R
                    ],
                    returnTypes: []
                }
            }
        });
        if (r.length !== 0) return r[0].map((i)=>({
                moduleAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(i.module_address),
                moduleName: i.module_name,
                functionName: i.function_name
            }));
    }
};
var bn = class {
    constructor(e){
        this.config = e;
        this.abstraction = new xt(e);
    }
    async getAccountInfo(e) {
        return tn({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountModules(e) {
        return ts({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountModulesPage(e) {
        return ns({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountModule(e) {
        return cr({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountTransactions(e) {
        return oi({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountResources(e) {
        return si({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountResourcesPage(e) {
        return rs({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountResource(e) {
        return ai({
            aptosConfig: this.config,
            ...e
        });
    }
    async lookupOriginalAccountAddress(e) {
        return nn({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountTokensCount(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "account_transactions_processor"
        }), is({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountOwnedTokens(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), os({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountOwnedTokensFromCollectionAddress(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), ss({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountCollectionsWithOwnedTokens(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), as({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountTransactionsCount(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "account_transactions_processor"
        }), cs({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountCoinsData(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), ci({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountCoinsCount(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), us({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountAPTAmount(e) {
        return this.getAccountCoinAmount({
            coinType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"],
            faMetadataAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"],
            ...e
        });
    }
    async getAccountCoinAmount(e) {
        let { accountAddress: t, coinType: r, faMetadataAddress: i } = e, o = r;
        r === void 0 && i !== void 0 && (o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(async ()=>{
            try {
                let c = (await ae({
                    aptosConfig: this.config,
                    payload: {
                        function: "0x1::coin::paired_coin",
                        functionArguments: [
                            i
                        ]
                    }
                }))[0];
                if (c.vec.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(c.vec[0])) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(c.vec[0]);
            } catch  {}
        }, `coin-mapping-${i.toString()}`, 1e3 * 60 * 5)());
        let s;
        if (r !== void 0 && i !== void 0) s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i).toStringLong();
        else if (r !== void 0 && i === void 0) r === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"] ? s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A.toStringLong() : s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HNBVYE3N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A, r).toStringLong();
        else if (r === void 0 && i !== void 0) {
            let c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i);
            s = c.toStringLong(), c === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A && (o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]);
        } else throw new Error("Either coinType, faMetadataAddress, or both must be provided");
        if (o !== void 0) {
            let [c] = await ae({
                aptosConfig: this.config,
                payload: {
                    function: "0x1::coin::balance",
                    typeArguments: [
                        o
                    ],
                    functionArguments: [
                        t
                    ]
                }
            });
            return parseInt(c, 10);
        }
        let [a] = await ae({
            aptosConfig: this.config,
            payload: {
                function: "0x1::primary_fungible_store::balance",
                typeArguments: [
                    "0x1::object::ObjectCore"
                ],
                functionArguments: [
                    t,
                    s
                ]
            }
        });
        return parseInt(a, 10);
    }
    async getBalance(e) {
        return ds({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountOwnedObjects(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "default_processor"
        }), ui({
            aptosConfig: this.config,
            ...e
        });
    }
    async deriveAccountFromPrivateKey(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "account_restoration_processor"
        }), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "objects_processor"
        }), ps({
            aptosConfig: this.config,
            ...e
        });
    }
    async deriveOwnedAccountsFromSigner(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "account_restoration_processor"
        }), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "objects_processor"
        }), di({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountsForPublicKey(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "account_restoration_processor"
        }), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "objects_processor"
        }), yr({
            aptosConfig: this.config,
            ...e
        });
    }
};
var dc = {
    typeParameters: [
        {
            constraints: []
        }
    ],
    parameters: [
        new R,
        new W
    ]
};
async function bs(n) {
    let { aptosConfig: e, sender: t, recipient: r, amount: i, coinType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t,
        data: {
            function: "0x1::aptos_account::transfer_coins",
            typeArguments: [
                o ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]
            ],
            functionArguments: [
                r,
                i
            ],
            abi: dc
        },
        options: s
    });
}
var Tn = class {
    constructor(e){
        this.config = e;
    }
    async transferCoinTransaction(e) {
        return bs({
            aptosConfig: this.config,
            ...e
        });
    }
};
var dt = {
    BOOLEAN: "bool",
    U8: "u8",
    U16: "u16",
    U32: "u32",
    U64: "u64",
    U128: "u128",
    U256: "u256",
    ADDRESS: "address",
    STRING: "0x1::string::String",
    ARRAY: "vector<u8>"
}, we = "0x4::token::Token";
async function ws(n) {
    let { aptosConfig: e, digitalAssetAddress: t } = n, r = {
        token_data_id: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"],
            variables: {
                where_condition: r
            }
        },
        originMethod: "getDigitalAssetData"
    })).current_token_datas_v2[0];
}
async function Ts(n) {
    let { aptosConfig: e, digitalAssetAddress: t } = n, r = {
        token_data_id: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        },
        amount: {
            _gt: 0
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"],
            variables: {
                where_condition: r
            }
        },
        originMethod: "getCurrentDigitalAssetOwnership"
    })).current_token_ownerships_v2[0];
}
async function Ss(n) {
    let { aptosConfig: e, ownerAddress: t, options: r } = n, i = {
        owner_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        },
        amount: {
            _gt: 0
        }
    }, o = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"],
        variables: {
            where_condition: i,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: o,
        originMethod: "getOwnedDigitalAssets"
    })).current_token_ownerships_v2;
}
async function Ps(n) {
    let { aptosConfig: e, digitalAssetAddress: t, options: r } = n, i = {
        token_data_id: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    }, o = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"],
        variables: {
            where_condition: i,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: o,
        originMethod: "getDigitalAssetActivity"
    })).token_activities_v2;
}
var pc = {
    typeParameters: [],
    parameters: [
        new f(I()),
        new W,
        new f(I()),
        new f(I()),
        new V,
        new V,
        new V,
        new V,
        new V,
        new V,
        new V,
        new V,
        new V,
        new W,
        new W
    ]
};
async function Ks(n) {
    let { aptosConfig: e, options: t, creator: r } = n;
    return A({
        aptosConfig: e,
        sender: r.accountAddress,
        data: {
            function: "0x4::aptos_token::create_collection",
            functionArguments: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](n.description),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](n.maxSupply ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](n.name),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](n.uri),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableDescription ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableRoyalty ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableURI ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableTokenDescription ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableTokenName ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableTokenProperties ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableTokenURI ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.tokensBurnableByCreator ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.tokensFreezableByCreator ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](n.royaltyNumerator ?? 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](n.royaltyDenominator ?? 1)
            ],
            abi: pc
        },
        options: t
    });
}
async function rn(n) {
    let { aptosConfig: e, options: t } = n, r = t?.where;
    t?.tokenStandard && (r.token_standard = {
        _eq: t?.tokenStandard ?? "v2"
    });
    let i = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"],
        variables: {
            where_condition: r,
            offset: t?.offset,
            limit: t?.limit
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: i,
        originMethod: "getCollectionData"
    })).current_collections_v2[0];
}
async function xs(n) {
    let { aptosConfig: e, creatorAddress: t, collectionName: r, options: i } = n, o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t), s = {
        collection_name: {
            _eq: r
        },
        creator_address: {
            _eq: o.toStringLong()
        }
    };
    return i?.tokenStandard && (s.token_standard = {
        _eq: i?.tokenStandard ?? "v2"
    }), rn({
        aptosConfig: e,
        options: {
            ...i,
            where: s
        }
    });
}
async function Is(n) {
    let { aptosConfig: e, creatorAddress: t, options: r } = n, o = {
        creator_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    };
    return r?.tokenStandard && (o.token_standard = {
        _eq: r?.tokenStandard ?? "v2"
    }), rn({
        aptosConfig: e,
        options: {
            ...r,
            where: o
        }
    });
}
async function Es(n) {
    let { aptosConfig: e, collectionId: t, options: r } = n, o = {
        collection_id: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    };
    return r?.tokenStandard && (o.token_standard = {
        _eq: r?.tokenStandard ?? "v2"
    }), rn({
        aptosConfig: e,
        options: {
            ...r,
            where: o
        }
    });
}
async function Cs(n) {
    let { creatorAddress: e, collectionName: t, options: r, aptosConfig: i } = n, o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(e), s = {
        collection_name: {
            _eq: t
        },
        creator_address: {
            _eq: o.toStringLong()
        }
    };
    return r?.tokenStandard && (s.token_standard = {
        _eq: r?.tokenStandard ?? "v2"
    }), (await rn({
        aptosConfig: i,
        options: {
            where: s
        }
    })).collection_id;
}
var lc = {
    typeParameters: [],
    parameters: [
        new f(I()),
        new f(I()),
        new f(I()),
        new f(I()),
        new v(new f(I())),
        new v(new f(I())),
        new v(v.u8())
    ]
};
async function vs(n) {
    let { aptosConfig: e, options: t, creator: r, collection: i, description: o, name: s, uri: a, propertyKeys: c, propertyTypes: d, propertyValues: l } = n, g = d?.map((p)=>dt[p]);
    return A({
        aptosConfig: e,
        sender: r.accountAddress,
        data: {
            function: "0x4::aptos_token::mint",
            functionArguments: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](i),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](o),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](s),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](a),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(c ?? []),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(g ?? []),
                Hs(l ?? [], g ?? [])
            ],
            abi: lc
        },
        options: t
    });
}
var gc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new f(ge(new N(0))),
        new R
    ]
};
async function _s(n) {
    let { aptosConfig: e, sender: t, digitalAssetAddress: r, recipient: i, digitalAssetType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::object::transfer",
            typeArguments: [
                o ?? we
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i)
            ],
            abi: gc
        },
        options: s
    });
}
var yc = {
    typeParameters: [],
    parameters: [
        new f(I()),
        new f(I()),
        new f(I()),
        new f(I()),
        new v(new f(I())),
        new v(new f(I())),
        new v(v.u8()),
        new R
    ]
};
async function Us(n) {
    let { aptosConfig: e, account: t, collection: r, description: i, name: o, uri: s, recipient: a, propertyKeys: c, propertyTypes: d, propertyValues: l, options: g } = n;
    if (c?.length !== l?.length) throw new Error("Property keys and property values counts do not match");
    if (d?.length !== l?.length) throw new Error("Property types and property values counts do not match");
    let p = d?.map((y)=>dt[y]);
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::mint_soul_bound",
            functionArguments: [
                r,
                i,
                o,
                s,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(c ?? []),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(p ?? []),
                Hs(l ?? [], p ?? []),
                a
            ],
            abi: yc
        },
        options: g
    });
}
var mc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new f(ge(new N(0)))
    ]
};
async function ks(n) {
    let { aptosConfig: e, creator: t, digitalAssetAddress: r, digitalAssetType: i, options: o } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::burn",
            typeArguments: [
                i ?? we
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r)
            ],
            abi: mc
        },
        options: o
    });
}
var fc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new f(ge(new N(0)))
    ]
};
async function Fs(n) {
    let { aptosConfig: e, creator: t, digitalAssetAddress: r, digitalAssetType: i, options: o } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::freeze_transfer",
            typeArguments: [
                i ?? we
            ],
            functionArguments: [
                r
            ],
            abi: fc
        },
        options: o
    });
}
var Ac = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new f(ge(new N(0)))
    ]
};
async function zs(n) {
    let { aptosConfig: e, creator: t, digitalAssetAddress: r, digitalAssetType: i, options: o } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::unfreeze_transfer",
            typeArguments: [
                i ?? we
            ],
            functionArguments: [
                r
            ],
            abi: Ac
        },
        options: o
    });
}
var hc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new f(ge(new N(0))),
        new f(I())
    ]
};
async function Ds(n) {
    let { aptosConfig: e, creator: t, description: r, digitalAssetAddress: i, digitalAssetType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::set_description",
            typeArguments: [
                o ?? we
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r)
            ],
            abi: hc
        },
        options: s
    });
}
var bc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new f(ge(new N(0))),
        new f(I())
    ]
};
async function Rs(n) {
    let { aptosConfig: e, creator: t, name: r, digitalAssetAddress: i, digitalAssetType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::set_name",
            typeArguments: [
                o ?? we
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r)
            ],
            abi: bc
        },
        options: s
    });
}
var wc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new f(ge(new N(0))),
        new f(I())
    ]
};
async function Os(n) {
    let { aptosConfig: e, creator: t, uri: r, digitalAssetAddress: i, digitalAssetType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::set_uri",
            typeArguments: [
                o ?? we
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r)
            ],
            abi: wc
        },
        options: s
    });
}
var Tc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new f(ge(new N(0))),
        new f(I()),
        new f(I()),
        v.u8()
    ]
};
async function Ns(n) {
    let { aptosConfig: e, creator: t, propertyKey: r, propertyType: i, propertyValue: o, digitalAssetAddress: s, digitalAssetType: a, options: c } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::add_property",
            typeArguments: [
                a ?? we
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(s),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](dt[i]),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(pi(o, dt[i]))
            ],
            abi: Tc
        },
        options: c
    });
}
var Sc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new f(ge(new N(0))),
        new f(I())
    ]
};
async function Gs(n) {
    let { aptosConfig: e, creator: t, propertyKey: r, digitalAssetAddress: i, digitalAssetType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::remove_property",
            typeArguments: [
                o ?? we
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r)
            ],
            abi: Sc
        },
        options: s
    });
}
var Pc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new f(ge(new N(0))),
        new f(I()),
        new f(I()),
        v.u8()
    ]
};
async function Ms(n) {
    let { aptosConfig: e, creator: t, propertyKey: r, propertyType: i, propertyValue: o, digitalAssetAddress: s, digitalAssetType: a, options: c } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::update_property",
            typeArguments: [
                a ?? we
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(s),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](dt[i]),
                pi(o, dt[i])
            ],
            abi: Pc
        },
        options: c
    });
}
var Kc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        },
        {
            constraints: []
        }
    ],
    parameters: [
        new f(ge(new N(0))),
        new f(I()),
        new N(1)
    ]
};
async function Bs(n) {
    let { aptosConfig: e, creator: t, propertyKey: r, propertyType: i, propertyValue: o, digitalAssetAddress: s, digitalAssetType: a, options: c } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::add_typed_property",
            typeArguments: [
                a ?? we,
                dt[i]
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(s),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r),
                o
            ],
            abi: Kc
        },
        options: c
    });
}
var xc = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        },
        {
            constraints: []
        }
    ],
    parameters: [
        new f(ge(new N(0))),
        new f(I()),
        new N(1)
    ]
};
async function Vs(n) {
    let { aptosConfig: e, creator: t, propertyKey: r, propertyType: i, propertyValue: o, digitalAssetAddress: s, digitalAssetType: a, options: c } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::update_typed_property",
            typeArguments: [
                a ?? we,
                dt[i]
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(s),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r),
                o
            ],
            abi: xc
        },
        options: c
    });
}
function Hs(n, e) {
    let t = new Array;
    return e.forEach((r, i)=>{
        t.push(pi(n[i], r));
    }), t;
}
function pi(n, e) {
    let t = _e(e);
    return Kt(n, t, 0, []).bcsToBytes();
}
var Sn = class {
    constructor(e){
        this.config = e;
    }
    async getCollectionData(e) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        });
        let { creatorAddress: t, collectionName: r, options: i } = e, o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t), s = {
            collection_name: {
                _eq: r
            },
            creator_address: {
                _eq: o.toStringLong()
            }
        };
        return i?.tokenStandard && (s.token_standard = {
            _eq: i?.tokenStandard ?? "v2"
        }), rn({
            aptosConfig: this.config,
            options: {
                where: s
            }
        });
    }
    async getCollectionDataByCreatorAddressAndCollectionName(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), xs({
            aptosConfig: this.config,
            ...e
        });
    }
    async getCollectionDataByCreatorAddress(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Is({
            aptosConfig: this.config,
            ...e
        });
    }
    async getCollectionDataByCollectionId(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Es({
            aptosConfig: this.config,
            ...e
        });
    }
    async getCollectionId(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Cs({
            aptosConfig: this.config,
            ...e
        });
    }
    async getDigitalAssetData(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), ws({
            aptosConfig: this.config,
            ...e
        });
    }
    async getCurrentDigitalAssetOwnership(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Ts({
            aptosConfig: this.config,
            ...e
        });
    }
    async getOwnedDigitalAssets(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Ss({
            aptosConfig: this.config,
            ...e
        });
    }
    async getDigitalAssetActivity(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Ps({
            aptosConfig: this.config,
            ...e
        });
    }
    async createCollectionTransaction(e) {
        return Ks({
            aptosConfig: this.config,
            ...e
        });
    }
    async mintDigitalAssetTransaction(e) {
        return vs({
            aptosConfig: this.config,
            ...e
        });
    }
    async transferDigitalAssetTransaction(e) {
        return _s({
            aptosConfig: this.config,
            ...e
        });
    }
    async mintSoulBoundTransaction(e) {
        return Us({
            aptosConfig: this.config,
            ...e
        });
    }
    async burnDigitalAssetTransaction(e) {
        return ks({
            aptosConfig: this.config,
            ...e
        });
    }
    async freezeDigitalAssetTransaferTransaction(e) {
        return Fs({
            aptosConfig: this.config,
            ...e
        });
    }
    async unfreezeDigitalAssetTransaferTransaction(e) {
        return zs({
            aptosConfig: this.config,
            ...e
        });
    }
    async setDigitalAssetDescriptionTransaction(e) {
        return Ds({
            aptosConfig: this.config,
            ...e
        });
    }
    async setDigitalAssetNameTransaction(e) {
        return Rs({
            aptosConfig: this.config,
            ...e
        });
    }
    async setDigitalAssetURITransaction(e) {
        return Os({
            aptosConfig: this.config,
            ...e
        });
    }
    async addDigitalAssetPropertyTransaction(e) {
        return Ns({
            aptosConfig: this.config,
            ...e
        });
    }
    async removeDigitalAssetPropertyTransaction(e) {
        return Gs({
            aptosConfig: this.config,
            ...e
        });
    }
    async updateDigitalAssetPropertyTransaction(e) {
        return Ms({
            aptosConfig: this.config,
            ...e
        });
    }
    async addDigitalAssetTypedPropertyTransaction(e) {
        return Bs({
            aptosConfig: this.config,
            ...e
        });
    }
    async updateDigitalAssetTypedPropertyTransaction(e) {
        return Vs({
            aptosConfig: this.config,
            ...e
        });
    }
};
async function Ls(n) {
    let { aptosConfig: e, accountAddress: t, amount: r, options: i } = n, o = i?.timeoutSecs || 20, { data: s } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        aptosConfig: e,
        path: "fund",
        body: {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString(),
            amount: r
        },
        originMethod: "fundAccount"
    }), a = s.txn_hashes[0], c = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])({
        aptosConfig: e,
        transactionHash: a,
        options: {
            timeoutSecs: o,
            checkSuccess: i?.checkSuccess
        }
    });
    if (c.type === "user_transaction") return c;
    throw new Error(`Unexpected transaction received for fund account: ${c.type}`);
}
var Pn = class {
    constructor(e){
        this.config = e;
    }
    async fundAccount(e) {
        let t = await Ls({
            aptosConfig: this.config,
            ...e
        });
        return (e.options?.waitForIndexer === void 0 || e.options?.waitForIndexer) && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])({
            aptosConfig: this.config,
            minimumLedgerVersion: BigInt(t.version),
            processorType: "fungible_asset_processor"
        }), t;
    }
};
async function mr(n) {
    let { aptosConfig: e, options: t } = n, r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"],
        variables: {
            where_condition: t?.where,
            limit: t?.limit,
            offset: t?.offset
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r,
        originMethod: "getFungibleAssetMetadata"
    })).fungible_asset_metadata;
}
async function $s(n) {
    let { aptosConfig: e, options: t } = n, r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"],
        variables: {
            where_condition: t?.where,
            limit: t?.limit,
            offset: t?.offset
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r,
        originMethod: "getFungibleAssetActivities"
    })).fungible_asset_activities;
}
async function qs(n) {
    let { aptosConfig: e, options: t } = n, r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"],
        variables: {
            where_condition: t?.where,
            limit: t?.limit,
            offset: t?.offset
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r,
        originMethod: "getCurrentFungibleAssetBalances"
    })).current_fungible_asset_balances;
}
var Ws = {
    typeParameters: [
        {
            constraints: []
        }
    ],
    parameters: [
        _e("0x1::object::Object"),
        new R,
        new W
    ]
};
async function js(n) {
    let { aptosConfig: e, sender: t, fungibleAssetMetadataAddress: r, recipient: i, amount: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::primary_fungible_store::transfer",
            typeArguments: [
                "0x1::fungible_asset::Metadata"
            ],
            functionArguments: [
                r,
                i,
                o
            ],
            abi: Ws
        },
        options: s
    });
}
async function Qs(n) {
    let { aptosConfig: e, sender: t, fromStore: r, toStore: i, amount: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::dispatchable_fungible_asset::transfer",
            typeArguments: [
                "0x1::fungible_asset::FungibleStore"
            ],
            functionArguments: [
                r,
                i,
                o
            ],
            abi: Ws
        },
        options: s
    });
}
var Kn = class {
    constructor(e){
        this.config = e;
    }
    async getFungibleAssetMetadata(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), mr({
            aptosConfig: this.config,
            ...e
        });
    }
    async getFungibleAssetMetadataByAssetType(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), (await mr({
            aptosConfig: this.config,
            options: {
                where: {
                    asset_type: {
                        _eq: e.assetType
                    }
                }
            }
        }))[0];
    }
    async getFungibleAssetMetadataByCreatorAddress(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), await mr({
            aptosConfig: this.config,
            options: {
                where: {
                    creator_address: {
                        _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(e.creatorAddress).toStringLong()
                    }
                }
            }
        });
    }
    async getFungibleAssetActivities(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), $s({
            aptosConfig: this.config,
            ...e
        });
    }
    async getCurrentFungibleAssetBalances(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), qs({
            aptosConfig: this.config,
            ...e
        });
    }
    async transferFungibleAsset(e) {
        return js({
            aptosConfig: this.config,
            ...e
        });
    }
    async transferFungibleAssetBetweenStores(e) {
        return Qs({
            aptosConfig: this.config,
            ...e
        });
    }
};
var xn = class {
    constructor(e){
        this.config = e;
    }
    async getLedgerInfo() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            aptosConfig: this.config
        });
    }
    async getChainId() {
        return (await this.getLedgerInfo()).chain_id;
    }
    async getBlockByVersion(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getBlockByHeight(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async view(e) {
        return ae({
            aptosConfig: this.config,
            ...e
        });
    }
    async viewJson(e) {
        return ms({
            aptosConfig: this.config,
            ...e
        });
    }
    async getChainTopUserTransactions(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async queryIndexer(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getIndexerLastSuccessVersion() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
            aptosConfig: this.config
        });
    }
    async getProcessorStatus(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
            aptosConfig: this.config,
            processorType: e
        });
    }
};
var Js = [
    "A name must be between 3 and 63 characters long,",
    "and can only contain lowercase a-z, 0-9, and hyphens.",
    "A name may not start or end with a hyphen."
].join(" ");
function Zs(n) {
    return !(!n || n.length < 3 || n.length > 63 || !/^[a-z\d][a-z\d-]{1,61}[a-z\d]$/.test(n));
}
function pt(n) {
    let [e, t, ...r] = n.replace(/\.apt$/, "").split(".");
    if (r.length > 0) throw new Error(`${n} is invalid. A name can only have two parts, a domain and a subdomain separated by a "."`);
    if (!Zs(e)) throw new Error(`${e} is not valid. ${Js}`);
    if (t && !Zs(t)) throw new Error(`${t} is not valid. ${Js}`);
    return {
        domainName: t || e,
        subdomainName: t ? e : void 0
    };
}
var Ic = ((t)=>(t[t.Independent = 0] = "Independent", t[t.FollowsDomain = 1] = "FollowsDomain", t))(Ic || {});
function Ys(n) {
    if (!n) return !1;
    let e = new Date(n.domain_expiration_timestamp).getTime() < Date.now(), t = new Date(n.expiration_timestamp).getTime() < Date.now();
    return n.subdomain && e ? !1 : n.subdomain && n.subdomain_expiration_policy === 1 ? !0 : !t;
}
var Tb = "0x37368b46ce665362562c6d1d4ec01a08c8644c488690df5a17e13ba163e20221", Ec = "0x585fc9f0f0c54183b039ffc770ca282ebd87307916c215a3e692f2f8e4305e82", Cc = {
    testnet: "0x5f8fd2347449685cf41d4db97926ec3a096eaf381332be4f1318ad4d16a8497c",
    mainnet: "0x867ed1f6bf916171b1de3ee92849b8978b7d1b9e0a8cc982a3d19d535dfd9c0c",
    local: Ec,
    custom: null,
    devnet: null
};
function rt(n) {
    let e = Cc[n.network];
    if (!e) throw new Error(`The ANS contract is not deployed to ${n.network}`);
    return e;
}
var fr = (n)=>{
    if (n && typeof n == "object" && "vec" in n && Array.isArray(n.vec)) return n.vec[0];
};
async function Xs(n) {
    let { aptosConfig: e, name: t } = n, r = rt(e), { domainName: i, subdomainName: o } = pt(t), s = await ae({
        aptosConfig: e,
        payload: {
            function: `${r}::router::get_owner_addr`,
            functionArguments: [
                i,
                o
            ]
        }
    }), a = fr(s[0]);
    return a ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(a) : void 0;
}
async function ea(n) {
    let { aptosConfig: e, expiration: t, name: r, sender: i, targetAddress: o, toAddress: s, options: a, transferable: c } = n, d = rt(e), { domainName: l, subdomainName: g } = pt(r), p = t.policy === "subdomain:independent" || t.policy === "subdomain:follow-domain";
    if (g && !p) throw new Error("Subdomains must have an expiration policy of either 'subdomain:independent' or 'subdomain:follow-domain'");
    if (p && !g) throw new Error(`Policy is set to ${t.policy} but no subdomain was provided`);
    if (t.policy === "domain") {
        let M = t.years ?? 1;
        if (M !== 1) throw new Error("For now, names can only be registered for 1 year at a time");
        let Me = M * 31536e3;
        return await A({
            aptosConfig: e,
            sender: i.accountAddress.toString(),
            data: {
                function: `${d}::router::register_domain`,
                functionArguments: [
                    l,
                    Me,
                    o,
                    s
                ]
            },
            options: a
        });
    }
    if (!g) throw new Error(`${t.policy} requires a subdomain to be provided.`);
    let y = await li({
        aptosConfig: e,
        name: l
    });
    if (!y) throw new Error("The domain does not exist");
    let h = t.policy === "subdomain:independent" ? t.expirationDate : y;
    if (h > y) throw new Error("The subdomain expiration time cannot be greater than the domain expiration time");
    return await A({
        aptosConfig: e,
        sender: i.accountAddress.toString(),
        data: {
            function: `${d}::router::register_subdomain`,
            functionArguments: [
                l,
                g,
                Math.round(h / 1e3),
                t.policy === "subdomain:follow-domain" ? 1 : 0,
                !!c,
                o,
                s
            ]
        },
        options: a
    });
}
async function li(n) {
    let { aptosConfig: e, name: t } = n, r = rt(e), { domainName: i, subdomainName: o } = pt(t);
    try {
        let s = await ae({
            aptosConfig: e,
            payload: {
                function: `${r}::router::get_expiration`,
                functionArguments: [
                    i,
                    o
                ]
            }
        });
        return Number(s[0]) * 1e3;
    } catch  {
        return;
    }
}
async function ta(n) {
    let { aptosConfig: e, address: t } = n, r = rt(e), i = await ae({
        aptosConfig: e,
        payload: {
            function: `${r}::router::get_primary_name`,
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()
            ]
        }
    }), o = fr(i[1]), s = fr(i[0]);
    if (o) return [
        s,
        o
    ].filter(Boolean).join(".");
}
async function na(n) {
    let { aptosConfig: e, sender: t, name: r, options: i } = n, o = rt(e);
    if (!r) return await A({
        aptosConfig: e,
        sender: t.accountAddress.toString(),
        data: {
            function: `${o}::router::clear_primary_name`,
            functionArguments: []
        },
        options: i
    });
    let { domainName: s, subdomainName: a } = pt(r);
    return await A({
        aptosConfig: e,
        sender: t.accountAddress.toString(),
        data: {
            function: `${o}::router::set_primary_name`,
            functionArguments: [
                s,
                a
            ]
        },
        options: i
    });
}
async function ra(n) {
    let { aptosConfig: e, name: t } = n, r = rt(e), { domainName: i, subdomainName: o } = pt(t), s = await ae({
        aptosConfig: e,
        payload: {
            function: `${r}::router::get_target_addr`,
            functionArguments: [
                i,
                o
            ]
        }
    }), a = fr(s[0]);
    return a ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(a) : void 0;
}
async function ia(n) {
    let { aptosConfig: e, sender: t, name: r, address: i, options: o } = n, s = rt(e), { domainName: a, subdomainName: c } = pt(r);
    return await A({
        aptosConfig: e,
        sender: t.accountAddress.toString(),
        data: {
            function: `${s}::router::set_target_addr`,
            functionArguments: [
                a,
                c,
                i
            ]
        },
        options: o
    });
}
async function oa(n) {
    let { aptosConfig: e, name: t } = n, { domainName: r, subdomainName: i = "" } = pt(t), a = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"],
            variables: {
                where_condition: {
                    domain: {
                        _eq: r
                    },
                    subdomain: {
                        _eq: i
                    }
                },
                limit: 1
            }
        },
        originMethod: "getName"
    })).current_aptos_names[0];
    return a && (a = In(a)), Ys(a) ? a : void 0;
}
async function sa(n) {
    let { aptosConfig: e, options: t, accountAddress: r } = n, i = await gi({
        aptosConfig: e
    });
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        originMethod: "getAccountNames",
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"],
            variables: {
                limit: t?.limit,
                offset: t?.offset,
                order_by: t?.orderBy,
                where_condition: {
                    ...n.options?.where ?? {},
                    owner_address: {
                        _eq: r.toString()
                    },
                    expiration_timestamp: {
                        _gte: i
                    }
                }
            }
        }
    })).current_aptos_names.map(In);
}
async function aa(n) {
    let { aptosConfig: e, options: t, accountAddress: r } = n, i = await gi({
        aptosConfig: e
    });
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        originMethod: "getAccountDomains",
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"],
            variables: {
                limit: t?.limit,
                offset: t?.offset,
                order_by: t?.orderBy,
                where_condition: {
                    ...n.options?.where ?? {},
                    owner_address: {
                        _eq: r.toString()
                    },
                    expiration_timestamp: {
                        _gte: i
                    },
                    subdomain: {
                        _eq: ""
                    }
                }
            }
        }
    })).current_aptos_names.map(In);
}
async function ca(n) {
    let { aptosConfig: e, options: t, accountAddress: r } = n, i = await gi({
        aptosConfig: e
    });
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        originMethod: "getAccountSubdomains",
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"],
            variables: {
                limit: t?.limit,
                offset: t?.offset,
                order_by: t?.orderBy,
                where_condition: {
                    ...n.options?.where ?? {},
                    owner_address: {
                        _eq: r.toString()
                    },
                    expiration_timestamp: {
                        _gte: i
                    },
                    subdomain: {
                        _neq: ""
                    }
                }
            }
        }
    })).current_aptos_names.map(In);
}
async function ua(n) {
    let { aptosConfig: e, options: t, domain: r } = n;
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        originMethod: "getDomainSubdomains",
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"],
            variables: {
                limit: t?.limit,
                offset: t?.offset,
                order_by: t?.orderBy,
                where_condition: {
                    ...n.options?.where ?? {},
                    domain: {
                        _eq: r
                    },
                    subdomain: {
                        _neq: ""
                    }
                }
            }
        }
    })).current_aptos_names.map(In).filter(Ys);
}
async function gi(n) {
    let { aptosConfig: e } = n, t = rt(e), [r] = await ae({
        aptosConfig: e,
        payload: {
            function: `${t}::config::reregistration_grace_sec`,
            functionArguments: []
        }
    }), i = r / 60 / 60 / 24, o = ()=>new Date;
    return new Date(o().setDate(o().getDate() - i)).toISOString();
}
async function da(n) {
    let { aptosConfig: e, sender: t, name: r, years: i = 1, options: o } = n, s = rt(e), a = i * 31536e3, { domainName: c, subdomainName: d } = pt(r);
    if (d) throw new Error("Subdomains cannot be renewed");
    if (i !== 1) throw new Error("Currently, only 1 year renewals are supported");
    return await A({
        aptosConfig: e,
        sender: t.accountAddress.toString(),
        data: {
            function: `${s}::router::renew_domain`,
            functionArguments: [
                c,
                a
            ]
        },
        options: o
    });
}
function In(n) {
    return {
        ...n,
        expiration_timestamp: new Date(n.expiration_timestamp).getTime()
    };
}
var En = class {
    constructor(e){
        this.config = e;
    }
    async getOwnerAddress(e) {
        return Xs({
            aptosConfig: this.config,
            ...e
        });
    }
    async getExpiration(e) {
        return li({
            aptosConfig: this.config,
            ...e
        });
    }
    async getTargetAddress(e) {
        return ra({
            aptosConfig: this.config,
            ...e
        });
    }
    async setTargetAddress(e) {
        return ia({
            aptosConfig: this.config,
            ...e
        });
    }
    async getPrimaryName(e) {
        return ta({
            aptosConfig: this.config,
            ...e
        });
    }
    async setPrimaryName(e) {
        return na({
            aptosConfig: this.config,
            ...e
        });
    }
    async registerName(e) {
        return ea({
            aptosConfig: this.config,
            ...e
        });
    }
    async renewDomain(e) {
        return da({
            aptosConfig: this.config,
            ...e
        });
    }
    async getName(e) {
        return oa({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountNames(e) {
        return sa({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountDomains(e) {
        return aa({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountSubdomains(e) {
        return ca({
            aptosConfig: this.config,
            ...e
        });
    }
    async getDomainSubdomains(e) {
        return ua({
            aptosConfig: this.config,
            ...e
        });
    }
};
async function pa(n) {
    let { aptosConfig: e, poolAddress: t } = n, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"],
            variables: {
                where_condition: {
                    pool_address: {
                        _eq: r
                    }
                }
            }
        }
    });
    return o.num_active_delegator_per_pool[0] ? o.num_active_delegator_per_pool[0].num_active_delegator : 0;
}
async function la(n) {
    let { aptosConfig: e, options: t } = n, r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"],
        variables: {
            order_by: t?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r
    })).num_active_delegator_per_pool;
}
async function ga(n) {
    let { aptosConfig: e, delegatorAddress: t, poolAddress: r } = n, i = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"],
        variables: {
            delegatorAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(),
            poolAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r).toStringLong()
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: i
    })).delegated_staking_activities;
}
var Cn = class {
    constructor(e){
        this.config = e;
    }
    async getNumberOfDelegators(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "stake_processor"
        }), pa({
            aptosConfig: this.config,
            ...e
        });
    }
    async getNumberOfDelegatorsForAllPools(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "stake_processor"
        }), la({
            aptosConfig: this.config,
            ...e
        });
    }
    async getDelegatedStakingActivities(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "stake_processor"
        }), ga({
            aptosConfig: this.config,
            ...e
        });
    }
};
var Ar = class {
    constructor(e){
        this.config = e;
    }
    async simple(e) {
        return A({
            aptosConfig: this.config,
            ...e
        });
    }
    async multiAgent(e) {
        return A({
            aptosConfig: this.config,
            ...e
        });
    }
};
var on = class {
    constructor(e){
        this.config = e;
    }
    async simple(e) {
        return ni({
            aptosConfig: this.config,
            ...e
        });
    }
    async multiAgent(e) {
        return ni({
            aptosConfig: this.config,
            ...e
        });
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QREVMGQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]
], on.prototype, "simple", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QREVMGQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]
], on.prototype, "multiAgent", 1);
var hr = class {
    constructor(e){
        this.config = e;
    }
    async simple(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QREVMGQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.config, e), hn({
            aptosConfig: this.config,
            ...e
        });
    }
    async multiAgent(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QREVMGQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.config, e), hn({
            aptosConfig: this.config,
            ...e
        });
    }
};
;
var br = class {
    constructor(e, t, r, i, o){
        this.lastUncommintedNumber = null;
        this.currentNumber = null;
        this.lock = !1;
        this.aptosConfig = e, this.account = t, this.maxWaitTime = r, this.maximumInFlight = i, this.sleepTime = o;
    }
    async nextSequenceNumber() {
        for(; this.lock;)await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.sleepTime);
        this.lock = !0;
        let e = BigInt(0);
        try {
            if ((this.lastUncommintedNumber === null || this.currentNumber === null) && await this.initialize(), this.currentNumber - this.lastUncommintedNumber >= this.maximumInFlight) {
                await this.update();
                let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])();
                for(; this.currentNumber - this.lastUncommintedNumber >= this.maximumInFlight;)await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.sleepTime), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])() - t > this.maxWaitTime ? (console.warn(`Waited over 30 seconds for a transaction to commit, re-syncing ${this.account.accountAddress.toString()}`), await this.initialize()) : await this.update();
            }
            e = this.currentNumber, this.currentNumber += BigInt(1);
        } catch (t) {
            console.error("error in getting next sequence number for this account", t);
        } finally{
            this.lock = !1;
        }
        return e;
    }
    async initialize() {
        let { sequence_number: e } = await tn({
            aptosConfig: this.aptosConfig,
            accountAddress: this.account.accountAddress
        });
        this.currentNumber = BigInt(e), this.lastUncommintedNumber = BigInt(e);
    }
    async update() {
        let { sequence_number: e } = await tn({
            aptosConfig: this.aptosConfig,
            accountAddress: this.account.accountAddress
        });
        return this.lastUncommintedNumber = BigInt(e), this.lastUncommintedNumber;
    }
    async synchronize() {
        if (this.lastUncommintedNumber !== this.currentNumber) {
            for(; this.lock;)await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.sleepTime);
            this.lock = !0;
            try {
                await this.update();
                let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])();
                for(; this.lastUncommintedNumber !== this.currentNumber;)(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])() - e > this.maxWaitTime ? (console.warn(`Waited over 30 seconds for a transaction to commit, re-syncing ${this.account.accountAddress.toString()}`), await this.initialize()) : (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.sleepTime), await this.update());
            } catch (e) {
                console.error("error in synchronizing this account sequence number with the one on chain", e);
            } finally{
                this.lock = !1;
            }
        }
    }
};
;
var ya = "fulfilled", ma = ((o)=>(o.TransactionSent = "transactionSent", o.TransactionSendFailed = "transactionSendFailed", o.TransactionExecuted = "transactionExecuted", o.TransactionExecutionFailed = "transactionExecutionFailed", o.ExecutionFinish = "executionFinish", o))(ma || {}), wr = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"] {
    constructor(t, r, i = 30, o = 100, s = 10){
        super();
        this.taskQueue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
        this.transactionsQueue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
        this.outstandingTransactions = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
        this.sentTransactions = [];
        this.executedTransactions = [];
        this.aptosConfig = t, this.account = r, this.started = !1, this.accountSequnceNumber = new br(t, r, i, o, s);
    }
    async submitNextTransaction() {
        try {
            for(;;){
                let t = await this.accountSequnceNumber.nextSequenceNumber();
                if (t === null) return;
                let r = await this.generateNextTransaction(this.account, t);
                if (!r) return;
                let i = lr({
                    aptosConfig: this.aptosConfig,
                    transaction: r,
                    signer: this.account
                });
                await this.outstandingTransactions.enqueue([
                    i,
                    t
                ]);
            }
        } catch (t) {
            if (t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]) return;
            throw new Error(`Submit transaction failed for ${this.account.accountAddress.toString()} with error ${t}`);
        }
    }
    async processTransactions() {
        try {
            for(;;){
                let t = [], r = [], [i, o] = await this.outstandingTransactions.dequeue();
                for(t.push(i), r.push(o); !this.outstandingTransactions.isEmpty();)[i, o] = await this.outstandingTransactions.dequeue(), t.push(i), r.push(o);
                let s = await Promise.allSettled(t);
                for(let a = 0; a < s.length && a < r.length; a += 1){
                    let c = s[a];
                    o = r[a], c.status === ya ? (this.sentTransactions.push([
                        c.value.hash,
                        o,
                        null
                    ]), this.emit("transactionSent", {
                        message: `transaction hash ${c.value.hash} has been committed to chain`,
                        transactionHash: c.value.hash
                    }), await this.checkTransaction(c, o)) : (this.sentTransactions.push([
                        c.status,
                        o,
                        c.reason
                    ]), this.emit("transactionSendFailed", {
                        message: `failed to commit transaction ${this.sentTransactions.length} with error ${c.reason}`,
                        error: c.reason
                    }));
                }
                this.emit("executionFinish", {
                    message: `execute ${s.length} transactions finished`
                });
            }
        } catch (t) {
            if (t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]) return;
            throw new Error(`Process execution failed for ${this.account.accountAddress.toString()} with error ${t}`);
        }
    }
    async checkTransaction(t, r) {
        try {
            let i = [];
            i.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])({
                aptosConfig: this.aptosConfig,
                transactionHash: t.value.hash
            }));
            let o = await Promise.allSettled(i);
            for(let s = 0; s < o.length; s += 1){
                let a = o[s];
                a.status === ya ? (this.executedTransactions.push([
                    a.value.hash,
                    r,
                    null
                ]), this.emit("transactionExecuted", {
                    message: `transaction hash ${a.value.hash} has been executed on chain`,
                    transactionHash: t.value.hash
                })) : (this.executedTransactions.push([
                    a.status,
                    r,
                    a.reason
                ]), this.emit("transactionExecutionFailed", {
                    message: `failed to execute transaction ${this.executedTransactions.length} with error ${a.reason}`,
                    error: a.reason
                }));
            }
        } catch (i) {
            throw new Error(`Check transaction failed for ${this.account.accountAddress.toString()} with error ${i}`);
        }
    }
    async push(t, r) {
        this.transactionsQueue.enqueue([
            t,
            r
        ]);
    }
    async generateNextTransaction(t, r) {
        if (this.transactionsQueue.isEmpty()) return;
        let [i, o] = await this.transactionsQueue.dequeue();
        return A({
            aptosConfig: this.aptosConfig,
            sender: t.accountAddress,
            data: i,
            options: {
                ...o,
                accountSequenceNumber: r,
                replayProtectionNonce: void 0
            }
        });
    }
    async run() {
        try {
            for(; !this.taskQueue.isCancelled();)await (await this.taskQueue.dequeue())();
        } catch (t) {
            throw new Error(`Unable to start transaction batching: ${t}`);
        }
    }
    start() {
        if (this.started) throw new Error("worker has already started");
        this.started = !0, this.taskQueue.enqueue(()=>this.submitNextTransaction()), this.taskQueue.enqueue(()=>this.processTransactions()), this.run();
    }
    stop() {
        if (this.taskQueue.isCancelled()) throw new Error("worker has already stopped");
        this.started = !1, this.taskQueue.cancel();
    }
};
var Tr = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"] {
    constructor(e){
        super(), this.config = e;
    }
    start(e) {
        let { sender: t } = e;
        this.account = t, this.transactionWorker = new wr(this.config, t), this.transactionWorker.start(), this.registerToEvents();
    }
    push(e) {
        let { data: t, options: r } = e;
        for (let i of t)this.transactionWorker.push(i, r);
    }
    registerToEvents() {
        this.transactionWorker.on("transactionSent", async (e)=>{
            this.emit("transactionSent", e);
        }), this.transactionWorker.on("transactionSendFailed", async (e)=>{
            this.emit("transactionSendFailed", e);
        }), this.transactionWorker.on("transactionExecuted", async (e)=>{
            this.emit("transactionExecuted", e);
        }), this.transactionWorker.on("transactionExecutionFailed", async (e)=>{
            this.emit("transactionExecutionFailed", e);
        }), this.transactionWorker.on("executionFinish", async (e)=>{
            this.emit("executionFinish", e);
        });
    }
    forSingleAccount(e) {
        try {
            let { sender: t, data: r, options: i } = e;
            this.start({
                sender: t
            }), this.push({
                data: r,
                options: i
            });
        } catch (t) {
            throw new Error(`failed to submit transactions with error: ${t}`);
        }
    }
};
var vn = class {
    constructor(e){
        this.config = e, this.build = new Ar(this.config), this.simulate = new on(this.config), this.submit = new hr(this.config), this.batch = new Tr(this.config);
    }
    async getTransactions(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getTransactionByVersion(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getTransactionByHash(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async isPendingTransaction(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async waitForTransaction(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getGasPriceEstimation() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: this.config
        });
    }
    getSigningMessage(e) {
        return Zo(e);
    }
    async publishPackageTransaction(e) {
        return Xo({
            aptosConfig: this.config,
            ...e
        });
    }
    async rotateAuthKey(e) {
        return gs({
            aptosConfig: this.config,
            ...e
        });
    }
    async rotateAuthKeyUnverified(e) {
        return ys({
            aptosConfig: this.config,
            ...e
        });
    }
    sign(e) {
        return dr({
            ...e
        });
    }
    signAsFeePayer(e) {
        return pr({
            ...e
        });
    }
    async batchTransactionsForSingleAccount(e) {
        try {
            let { sender: t, data: r, options: i } = e;
            this.batch.forSingleAccount({
                sender: t,
                data: r,
                options: i
            });
        } catch (t) {
            throw new Error(`failed to submit transactions with error: ${t}`);
        }
    }
    async signAndSubmitTransaction(e) {
        return lr({
            aptosConfig: this.config,
            ...e
        });
    }
    async signAndSubmitAsFeePayer(e) {
        return Yo({
            aptosConfig: this.config,
            ...e
        });
    }
};
;
async function Sr(n) {
    let { aptosConfig: e, jwt: t, ephemeralKeyPair: r, uidKey: i = "sub", derivationPath: o } = n, s = {
        jwt_b64: t,
        epk: r.getPublicKey().bcsToHex().toStringWithoutPrefix(),
        exp_date_secs: r.expiryDateSecs,
        epk_blinder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(r.blinder).toStringWithoutPrefix(),
        uid_key: i,
        derivation_path: o
    }, { data: a } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
        aptosConfig: e,
        path: "fetch",
        body: s,
        originMethod: "getPepper",
        overrides: {
            WITH_CREDENTIALS: !1
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(a.pepper).toUint8Array();
}
async function yi(n) {
    let { aptosConfig: e, jwt: t, ephemeralKeyPair: r, pepper: i = await Sr(n), uidKey: o = "sub", maxExpHorizonSecs: s = (await Xt({
        aptosConfig: e
    })).maxExpHorizonSecs } = n;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toUint8Array().length !== be.PEPPER_LENGTH) throw new Error(`Pepper needs to be ${be.PEPPER_LENGTH} bytes`);
    let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(t);
    if (typeof a.iat != "number") throw new Error("iat was not found");
    if (s < r.expiryDateSecs - a.iat) throw Error(`The EphemeralKeyPair is too long lived.  It's lifespan must be less than ${s}`);
    let c = {
        jwt_b64: t,
        epk: r.getPublicKey().bcsToHex().toStringWithoutPrefix(),
        epk_blinder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(r.blinder).toStringWithoutPrefix(),
        exp_date_secs: r.expiryDateSecs,
        exp_horizon_secs: s,
        pepper: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toStringWithoutPrefix(),
        uid_key: o
    }, { data: d } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
        aptosConfig: e,
        path: "prove",
        body: c,
        originMethod: "getProof",
        overrides: {
            WITH_CREDENTIALS: !1
        }
    }), l = d.proof, g = new lt({
        a: l.a,
        b: l.b,
        c: l.c
    });
    return new ye({
        proof: new sn(g, 0),
        trainingWheelsSignature: Ne.fromHex(d.training_wheels_signature),
        expHorizonSecs: s
    });
}
async function fa(n) {
    let { aptosConfig: e, jwt: t, jwkAddress: r, uidKey: i, proofFetchCallback: o, pepper: s = await Sr(n) } = n, { verificationKey: a, maxExpHorizonSecs: c } = await Xt({
        aptosConfig: e
    }), d = yi({
        ...n,
        pepper: s,
        maxExpHorizonSecs: c
    }), l = o ? d : await d;
    if (r !== void 0) {
        let y = G.fromJwtAndPepper({
            jwt: t,
            pepper: s,
            jwkAddress: r,
            uidKey: i
        }), h = await nn({
            aptosConfig: e,
            authenticationKey: y.authKey().derivedAddress()
        });
        return ve.create({
            ...n,
            address: h,
            proof: l,
            pepper: s,
            proofFetchCallback: o,
            jwkAddress: r,
            verificationKey: a
        });
    }
    let g = E.fromJwtAndPepper({
        jwt: t,
        pepper: s,
        uidKey: i
    }), p = await nn({
        aptosConfig: e,
        authenticationKey: g.authKey().derivedAddress()
    });
    return be.create({
        ...n,
        address: p,
        proof: l,
        pepper: s,
        proofFetchCallback: o,
        verificationKey: a
    });
}
async function Aa(n) {
    let { aptosConfig: e, sender: t, iss: r, options: i } = n, { jwksUrl: o } = n;
    o === void 0 && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"].test(r) ? o = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com" : o = r.endsWith("/") ? `${r}.well-known/jwks.json` : `${r}/.well-known/jwks.json`);
    let s;
    try {
        if (s = await fetch(o), !s.ok) throw new Error(`${s.status} ${s.statusText}`);
    } catch (c) {
        let d;
        throw c instanceof Error ? d = `${c.message}` : d = `error unknown - ${c}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 14,
            details: `Failed to fetch JWKS at ${o}: ${d}`
        });
    }
    let a = await s.json();
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::jwks::update_federated_jwk_set",
            functionArguments: [
                r,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(a.keys.map((c)=>c.kid)),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(a.keys.map((c)=>c.alg)),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(a.keys.map((c)=>c.e)),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(a.keys.map((c)=>c.n))
            ]
        },
        options: i
    });
}
var _n = class {
    constructor(e){
        this.config = e;
    }
    async getPepper(e) {
        return Sr({
            aptosConfig: this.config,
            ...e
        });
    }
    async getProof(e) {
        return yi({
            aptosConfig: this.config,
            ...e
        });
    }
    async deriveKeylessAccount(e) {
        return fa({
            aptosConfig: this.config,
            ...e
        });
    }
    async updateFederatedKeylessJwkSetTransaction(e) {
        return Aa({
            aptosConfig: this.config,
            ...e
        });
    }
};
async function Fc(n) {
    let { aptosConfig: e, options: t } = n, r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"],
        variables: {
            where_condition: t?.where,
            offset: t?.offset,
            limit: t?.limit,
            order_by: t?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r,
        originMethod: "getObjectData"
    })).current_objects;
}
async function ha(n) {
    let { aptosConfig: e, objectAddress: t, options: r } = n, o = {
        object_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    };
    return (await Fc({
        aptosConfig: e,
        options: {
            ...r,
            where: o
        }
    }))[0];
}
var Un = class {
    constructor(e){
        this.config = e;
    }
    async getObjectDataByObjectAddress(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "objects_processor"
        }), ha({
            aptosConfig: this.config,
            ...e
        });
    }
};
var J = class {
    constructor(e){
        this.config = e ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RCSJFTST$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"], this.account = new bn(this.config), this.abstraction = new xt(this.config), this.ans = new En(this.config), this.coin = new Tn(this.config), this.digitalAsset = new Sn(this.config), this.faucet = new Pn(this.config), this.fungibleAsset = new Kn(this.config), this.general = new xn(this.config), this.staking = new Cn(this.config), this.transaction = new vn(this.config), this.table = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WHSTLR3F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](this.config), this.keyless = new _n(this.config), this.object = new Un(this.config);
    }
    setIgnoreTransactionSubmitter(e) {
        this.config.setIgnoreTransactionSubmitter(e);
    }
};
function ce(n, e, t) {
    Object.getOwnPropertyNames(e.prototype).forEach((r)=>{
        let i = Object.getOwnPropertyDescriptor(e.prototype, r);
        i && Object.defineProperty(n.prototype, r, {
            value: function(...o) {
                return this[t][r](...o);
            },
            writable: i.writable,
            configurable: i.configurable,
            enumerable: i.enumerable
        });
    });
}
ce(J, bn, "account");
ce(J, xt, "abstraction");
ce(J, En, "ans");
ce(J, Tn, "coin");
ce(J, Sn, "digitalAsset");
ce(J, Event, "event");
ce(J, Pn, "faucet");
ce(J, Kn, "fungibleAsset");
ce(J, xn, "general");
ce(J, Cn, "staking");
ce(J, vn, "transaction");
ce(J, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WHSTLR3F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"], "table");
ce(J, _n, "keyless");
ce(J, Un, "object");
var Oc = 1e7, mi = 120, Nc = 30, Gc = 330, Mc = 120, Bc = 350, Vc = 300, Hc = 93, Ge = class Ge extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(e, t){
        super();
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toUint8Array();
        if (r.length !== Ge.ID_COMMITMENT_LENGTH) throw new Error(`Id Commitment length in bytes should be ${Ge.ID_COMMITMENT_LENGTH}`);
        this.iss = e, this.idCommitment = r;
    }
    authKey() {
        let e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return e.serializeU32AsUleb128(3), e.serializeFixedBytes(this.bcsToBytes()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 2,
            input: e.toUint8Array()
        });
    }
    verifySignature(e) {
        try {
            return Pr({
                ...e,
                publicKey: this
            }), !0;
        } catch (t) {
            if (t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]) return !1;
            throw t;
        }
    }
    async verifySignatureAsync(e) {
        return Ti({
            ...e,
            publicKey: this
        });
    }
    serialize(e) {
        e.serializeStr(this.iss), e.serializeBytes(this.idCommitment);
    }
    static deserialize(e) {
        let t = e.deserializeStr(), r = e.deserializeBytes();
        return new Ge(t, r);
    }
    static load(e) {
        let t = e.deserializeStr(), r = e.deserializeBytes();
        return new Ge(t, r);
    }
    static isPublicKey(e) {
        return e instanceof Ge;
    }
    static create(e) {
        return ba(e), new Ge(e.iss, ba(e));
    }
    static fromJwtAndPepper(e) {
        let { jwt: t, pepper: r, uidKey: i = "sub" } = e, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(t);
        if (typeof o.iss != "string") throw new Error("iss was not found");
        if (typeof o.aud != "string") throw new Error("aud was not found or an array of values");
        let s = o[i];
        return Ge.create({
            iss: o.iss,
            uidKey: i,
            uidVal: s,
            aud: o.aud,
            pepper: r
        });
    }
    static isInstance(e) {
        return "iss" in e && typeof e.iss == "string" && "idCommitment" in e && e.idCommitment instanceof Uint8Array;
    }
};
Ge.ID_COMMITMENT_LENGTH = 32;
var E = Ge;
async function Ti(n) {
    let { aptosConfig: e, publicKey: t, message: r, signature: i, jwk: o, keylessConfig: s = await Xt({
        aptosConfig: e
    }), options: a } = n;
    try {
        if (!(i instanceof re)) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 26,
            details: "Not a keyless signature"
        });
        return Pr({
            message: r,
            publicKey: t,
            signature: i,
            jwk: o || await Br({
                aptosConfig: e,
                publicKey: t,
                kid: i.getJwkKid()
            }),
            keylessConfig: s
        }), !0;
    } catch (c) {
        if (a?.throwErrorWithReason) throw c;
        return !1;
    }
}
function Pr(n) {
    let { publicKey: e, message: t, signature: r, keylessConfig: i, jwk: o } = n, { verificationKey: s, maxExpHorizonSecs: a, trainingWheelsPubkey: c } = i;
    if (!(r instanceof re)) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 26,
        details: "Not a keyless signature"
    });
    if (!(r.ephemeralCertificate.signature instanceof ye)) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 26,
        details: "Unsupported ephemeral certificate variant"
    });
    let d = r.ephemeralCertificate.signature;
    if (!(d.proof.proof instanceof lt)) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 26,
        details: "Unsupported proof variant for ZeroKnowledgeSig"
    });
    let l = d.proof.proof;
    if (r.expiryDateSecs < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])()) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 27,
        details: "The expiryDateSecs is in the past"
    });
    if (d.expHorizonSecs > a) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 28
    });
    if (!r.ephemeralPublicKey.verifySignature({
        message: t,
        signature: r.ephemeralSignature
    })) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 29
    });
    let g = Lc({
        publicKey: e,
        signature: r,
        jwk: o,
        keylessConfig: i
    });
    if (!s.verifyProof({
        publicInputsHash: g,
        groth16Proof: l
    })) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 32
    });
    if (c) {
        if (!d.trainingWheelsSignature) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 30
        });
        let p = new Ai(l, g);
        if (!c.verifySignature({
            message: p.hash(),
            signature: d.trainingWheelsSignature
        })) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 31
        });
    }
}
function Lc(n) {
    let { publicKey: e, signature: t, jwk: r, keylessConfig: i } = n, o = e instanceof E ? e : e.keylessPublicKey;
    if (!(t.ephemeralCertificate.signature instanceof ye)) throw new Error("Signature is not a ZeroKnowledgeSig");
    let s = t.ephemeralCertificate.signature, a = [];
    return a.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(t.ephemeralPublicKey.toUint8Array(), i.maxCommitedEpkBytes)), a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(o.idCommitment)), a.push(t.expiryDateSecs), a.push(s.expHorizonSecs), a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(o.iss, i.maxIssValBytes)), s.extraField ? (a.push(1n), a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(s.extraField, i.maxExtraFieldBytes))) : (a.push(0n), a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(" ", i.maxExtraFieldBytes))), a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$base64$40$3$2e$7$2e$8$2f$node_modules$2f$js$2d$base64$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(t.jwtHeader, !0) + ".", i.maxJwtHeaderB64Bytes)), a.push(r.toScalar()), s.overrideAudVal ? (a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(s.overrideAudVal, mi)), a.push(1n)) : (a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])("", mi)), a.push(0n)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(a);
}
async function Br(n) {
    let { aptosConfig: e, publicKey: t, kid: r } = n, i = t instanceof E ? t : t.keylessPublicKey, { iss: o } = i, s, a = t instanceof G ? t.jwkAddress : void 0;
    try {
        s = await Wc({
            aptosConfig: e,
            jwkAddr: a
        });
    } catch (l) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 24,
            error: l,
            details: `Failed to fetch ${a ? "Federated" : "Patched"}JWKs ${a ? `for address ${a}` : "0x1"}`
        });
    }
    let c = s.get(o);
    if (c === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 7,
        details: `JWKs for issuer ${o} not found.`
    });
    let d = c.find((l)=>l.kid === r);
    if (d === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 6,
        details: `JWK with kid '${r}' for issuer '${o}' not found.`
    });
    return d;
}
function ba(n) {
    let { uidKey: e, uidVal: t, aud: r, pepper: i } = n, o = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toUint8Array()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(r, mi),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(t, Gc),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(e, Nc)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(o), E.ID_COMMITMENT_LENGTH);
}
var re = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { jwtHeader: t, ephemeralCertificate: r, expiryDateSecs: i, ephemeralPublicKey: o, ephemeralSignature: s } = e;
        this.jwtHeader = t, this.ephemeralCertificate = r, this.expiryDateSecs = i, this.ephemeralPublicKey = o, this.ephemeralSignature = s;
    }
    getJwkKid() {
        return Qc(this.jwtHeader).kid;
    }
    serialize(e) {
        this.ephemeralCertificate.serialize(e), e.serializeStr(this.jwtHeader), e.serializeU64(this.expiryDateSecs), this.ephemeralPublicKey.serialize(e), this.ephemeralSignature.serialize(e);
    }
    static deserialize(e) {
        let t = Yt.deserialize(e), r = e.deserializeStr(), i = e.deserializeU64(), o = ut.deserialize(e), s = Ne.deserialize(e);
        return new n({
            jwtHeader: r,
            expiryDateSecs: Number(i),
            ephemeralCertificate: t,
            ephemeralPublicKey: o,
            ephemeralSignature: s
        });
    }
    static getSimulationSignature() {
        return new n({
            jwtHeader: "{}",
            ephemeralCertificate: new Yt(new ye({
                proof: new sn(new lt({
                    a: new Uint8Array(32),
                    b: new Uint8Array(64),
                    c: new Uint8Array(32)
                }), 0),
                expHorizonSecs: 0
            }), 0),
            expiryDateSecs: 0,
            ephemeralPublicKey: new ut(new b(new Uint8Array(32))),
            ephemeralSignature: new Ne(new C(new Uint8Array(64)))
        });
    }
    static isSignature(e) {
        return e instanceof n;
    }
}, Yt = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.signature = e, this.variant = t;
    }
    toUint8Array() {
        return this.signature.toUint8Array();
    }
    serialize(e) {
        e.serializeU32AsUleb128(this.variant), this.signature.serialize(e);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return new n(ye.deserialize(e), t);
            default:
                throw new Error(`Unknown variant index for EphemeralCertificate: ${t}`);
        }
    }
}, kn = class kn extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        if (super(), this.data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e).toUint8Array(), this.data.length !== 32) throw new Error("Input needs to be 32 bytes");
    }
    serialize(e) {
        e.serializeFixedBytes(this.data);
    }
    static deserialize(e) {
        let t = e.deserializeFixedBytes(32);
        return new kn(t);
    }
    toArray() {
        let e = this.toProjectivePoint();
        return [
            e.x.toString(),
            e.y.toString(),
            e.pz.toString()
        ];
    }
    toProjectivePoint() {
        let e = new Uint8Array(this.data);
        e.reverse();
        let t = (e[0] & 128) >> 7, { Fp: r } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].fields, i = r.create(fi(e)), o = r.sqrt(r.add(r.pow(i, 3n), kn.B)), s = r.neg(o), a = o > s == (t === 1) ? o : s;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].G1.ProjectivePoint.fromAffine({
            x: i,
            y: a
        });
    }
};
kn.B = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].fields.Fp.create(3n);
var it = kn;
function fi(n) {
    if (n.length !== 32) throw new Error("Input should be 32 bytes");
    let e = new Uint8Array(n);
    return e[0] = e[0] & 63, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"])(e);
}
var Fn = class Fn extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        if (super(), this.data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e).toUint8Array(), this.data.length !== 64) throw new Error("Input needs to be 64 bytes");
    }
    serialize(e) {
        e.serializeFixedBytes(this.data);
    }
    static deserialize(e) {
        let t = e.deserializeFixedBytes(64);
        return new Fn(t);
    }
    toArray() {
        let e = this.toProjectivePoint();
        return [
            [
                e.x.c0.toString(),
                e.x.c1.toString()
            ],
            [
                e.y.c0.toString(),
                e.y.c1.toString()
            ],
            [
                e.pz.c0.toString(),
                e.pz.c1.toString()
            ]
        ];
    }
    toProjectivePoint() {
        let e = new Uint8Array(this.data), t = e.slice(0, 32).reverse(), r = e.slice(32, 64).reverse(), i = (r[0] & 128) >> 7, { Fp2: o } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].fields, s = o.fromBigTuple([
            fi(t),
            fi(r)
        ]), a = o.sqrt(o.add(o.pow(s, 3n), Fn.B)), c = o.neg(a), l = (a.c1 > c.c1 || a.c1 === c.c1 && a.c0 > c.c0) === (i === 1) ? a : c;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].G2.ProjectivePoint.fromAffine({
            x: s,
            y: l
        });
    }
};
Fn.B = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].fields.Fp2.fromBigTuple([
    19485874751759354771024239261021720505790618469301721065564631296452457478373n,
    266929791119991161246907387137283842545076965332900288569378510910307636690n
]);
var It = Fn, lt = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XJJVJOX5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { a: t, b: r, c: i } = e;
        this.a = new it(t), this.b = new It(r), this.c = new it(i);
    }
    serialize(e) {
        this.a.serialize(e), this.b.serialize(e), this.c.serialize(e);
    }
    static deserialize(e) {
        let t = it.deserialize(e).bcsToBytes(), r = It.deserialize(e).bcsToBytes(), i = it.deserialize(e).bcsToBytes();
        return new n({
            a: t,
            b: r,
            c: i
        });
    }
    toSnarkJsJson() {
        return {
            protocol: "groth16",
            curve: "bn128",
            pi_a: this.a.toArray(),
            pi_b: this.b.toArray(),
            pi_c: this.c.toArray()
        };
    }
}, Ai = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t, r){
        super();
        this.domainSeparator = "APTOS::Groth16ProofAndStatement";
        if (this.proof = t, this.publicInputsHash = typeof r == "bigint" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(r, 32) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(r).toUint8Array(), this.publicInputsHash.length !== 32) throw new Error("Invalid public inputs hash");
    }
    serialize(t) {
        this.proof.serialize(t), t.serializeFixedBytes(this.publicInputsHash);
    }
    static deserialize(t) {
        return new n(lt.deserialize(t), t.deserializeFixedBytes(32));
    }
    hash() {
        return Oe(this.bcsToBytes(), this.domainSeparator);
    }
}, sn = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.proof = e, this.variant = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(this.variant), this.proof.serialize(e);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return new n(lt.deserialize(e), t);
            default:
                throw new Error(`Unknown variant index for ZkProof: ${t}`);
        }
    }
}, ye = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { proof: t, expHorizonSecs: r, trainingWheelsSignature: i, extraField: o, overrideAudVal: s } = e;
        this.proof = t, this.expHorizonSecs = r, this.trainingWheelsSignature = i, this.extraField = o, this.overrideAudVal = s;
    }
    static fromBytes(e) {
        return n.deserialize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](e));
    }
    serialize(e) {
        this.proof.serialize(e), e.serializeU64(this.expHorizonSecs), e.serializeOption(this.extraField), e.serializeOption(this.overrideAudVal), e.serializeOption(this.trainingWheelsSignature);
    }
    static deserialize(e) {
        let t = sn.deserialize(e), r = Number(e.deserializeU64()), i = e.deserializeOption("string"), o = e.deserializeOption("string"), s = e.deserializeOption(Ne);
        return new n({
            proof: t,
            expHorizonSecs: r,
            trainingWheelsSignature: s,
            extraField: i,
            overrideAudVal: o
        });
    }
}, hi = class n {
    constructor(e){
        let { verificationKey: t, trainingWheelsPubkey: r, maxExpHorizonSecs: i = Oc, maxExtraFieldBytes: o = Bc, maxJwtHeaderB64Bytes: s = Vc, maxIssValBytes: a = Mc, maxCommitedEpkBytes: c = Hc } = e;
        this.verificationKey = t, this.maxExpHorizonSecs = i, r && (this.trainingWheelsPubkey = new ut(new b(r))), this.maxExtraFieldBytes = o, this.maxJwtHeaderB64Bytes = s, this.maxIssValBytes = a, this.maxCommitedEpkBytes = c;
    }
    static create(e, t) {
        return new n({
            verificationKey: new bi({
                alphaG1: e.alpha_g1,
                betaG2: e.beta_g2,
                deltaG2: e.delta_g2,
                gammaAbcG1: e.gamma_abc_g1,
                gammaG2: e.gamma_g2
            }),
            maxExpHorizonSecs: Number(t.max_exp_horizon_secs),
            trainingWheelsPubkey: t.training_wheels_pubkey.vec[0],
            maxExtraFieldBytes: t.max_extra_field_bytes,
            maxJwtHeaderB64Bytes: t.max_jwt_header_b64_bytes,
            maxIssValBytes: t.max_iss_val_bytes,
            maxCommitedEpkBytes: t.max_commited_epk_bytes
        });
    }
}, bi = class n {
    constructor(e){
        let { alphaG1: t, betaG2: r, deltaG2: i, gammaAbcG1: o, gammaG2: s } = e;
        this.alphaG1 = new it(t), this.betaG2 = new It(r), this.deltaG2 = new It(i), this.gammaAbcG1 = [
            new it(o[0]),
            new it(o[1])
        ], this.gammaG2 = new It(s);
    }
    hash() {
        let e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return this.serialize(e), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$8$2e$0$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"].create().update(e.toUint8Array()).digest();
    }
    serialize(e) {
        this.alphaG1.serialize(e), this.betaG2.serialize(e), this.deltaG2.serialize(e), this.gammaAbcG1[0].serialize(e), this.gammaAbcG1[1].serialize(e), this.gammaG2.serialize(e);
    }
    static fromGroth16VerificationKeyResponse(e) {
        return new n({
            alphaG1: e.alpha_g1,
            betaG2: e.beta_g2,
            deltaG2: e.delta_g2,
            gammaAbcG1: e.gamma_abc_g1,
            gammaG2: e.gamma_g2
        });
    }
    verifyProof(e) {
        let { publicInputsHash: t, groth16Proof: r } = e;
        try {
            let i = r.a.toProjectivePoint(), o = r.b.toProjectivePoint(), s = r.c.toProjectivePoint(), a = this.alphaG1.toProjectivePoint(), c = this.betaG2.toProjectivePoint(), d = this.gammaG2.toProjectivePoint(), l = this.deltaG2.toProjectivePoint(), g = this.gammaAbcG1.map((ot)=>ot.toProjectivePoint()), { Fp12: p } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].fields, y = g[0].add(g[1].multiply(t)), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].pairing(y, d), U = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].pairing(i, o), M = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].pairing(a, c), X = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].pairing(s, l), Me = p.mul(M, p.mul(h, X));
            return p.eql(U, Me);
        } catch (i) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
                type: 32,
                error: i,
                details: "Error encountered when checking zero knowledge relation"
            });
        }
    }
    toSnarkJsJson() {
        return {
            protocol: "groth16",
            curve: "bn128",
            nPublic: 1,
            vk_alpha_1: this.alphaG1.toArray(),
            vk_beta_2: this.betaG2.toArray(),
            vk_gamma_2: this.gammaG2.toArray(),
            vk_delta_2: this.deltaG2.toArray(),
            IC: this.gammaAbcG1.map((e)=>e.toArray())
        };
    }
};
async function Xt(n) {
    let { aptosConfig: e } = n;
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(async ()=>{
            let [t, r] = await Promise.all([
                $c(n),
                qc(n)
            ]);
            return hi.create(r, t);
        }, `keyless-configuration-${e.network}`, 1e3 * 60 * 5)();
    } catch (t) {
        throw t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"] ? t : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 25,
            error: t
        });
    }
}
function et(n) {
    let { jwt: e, uidKey: t = "sub" } = n, r;
    try {
        r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(e);
    } catch (o) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 12,
            details: `Failed to parse JWT - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(o)}`
        });
    }
    if (typeof r.iss != "string") throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 12,
        details: "JWT is missing 'iss' in the payload. This should never happen."
    });
    if (typeof r.aud != "string") throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 12,
        details: "JWT is missing 'aud' in the payload or 'aud' is an array of values."
    });
    let i = r[t];
    return {
        iss: r.iss,
        aud: r.aud,
        uidVal: i
    };
}
async function $c(n) {
    let { aptosConfig: e, options: t } = n, r = "0x1::keyless_account::Configuration";
    try {
        let { data: i } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: e,
            originMethod: "getKeylessConfigurationResource",
            path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from("0x1").toString()}/resource/${r}`,
            params: {
                ledger_version: t?.ledgerVersion
            }
        });
        return i.data;
    } catch (i) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 22,
            error: i
        });
    }
}
async function qc(n) {
    let { aptosConfig: e, options: t } = n, r = "0x1::keyless_account::Groth16VerificationKey";
    try {
        let { data: i } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: e,
            originMethod: "getGroth16VerificationKeyResource",
            path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from("0x1").toString()}/resource/${r}`,
            params: {
                ledger_version: t?.ledgerVersion
            }
        });
        return i.data;
    } catch (i) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 23,
            error: i
        });
    }
}
async function Wc(n) {
    let { aptosConfig: e, jwkAddr: t, options: r } = n, i;
    if (t) {
        let s = "0x1::jwks::FederatedJWKs", { data: a } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: e,
            originMethod: "getKeylessJWKs",
            path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/resource/${s}`,
            params: {
                ledger_version: r?.ledgerVersion
            }
        });
        i = a;
    } else {
        let s = "0x1::jwks::PatchedJWKs", { data: a } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: e,
            originMethod: "getKeylessJWKs",
            path: `accounts/0x1/resource/${s}`,
            params: {
                ledger_version: r?.ledgerVersion
            }
        });
        i = a;
    }
    let o = new Map;
    for (let s of i.data.jwks.entries){
        let a = [];
        for (let c of s.jwks){
            let { data: d } = c.variant, l = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(d).toUint8Array()), g = wi.deserialize(l);
            a.push(g);
        }
        o.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(s.issuer), a);
    }
    return o;
}
var wi = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { kid: t, kty: r, alg: i, e: o, n: s } = e;
        this.kid = t, this.kty = r, this.alg = i, this.e = o, this.n = s;
    }
    serialize(e) {
        e.serializeStr(this.kid), e.serializeStr(this.kty), e.serializeStr(this.alg), e.serializeStr(this.e), e.serializeStr(this.n);
    }
    static fromMoveStruct(e) {
        let { data: t } = e.variant, r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toUint8Array());
        return n.deserialize(r);
    }
    toScalar() {
        if (this.alg !== "RS256") throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 32,
            details: "Failed to convert JWK to scalar when calculating the public inputs hash. Only RSA 256 is supported currently"
        });
        let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(this.n), r = jc(e.reverse()).map((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(i));
        return r.push(256n), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(r);
    }
    static deserialize(e) {
        let t = e.deserializeStr(), r = e.deserializeStr(), i = e.deserializeStr(), o = e.deserializeStr(), s = e.deserializeStr();
        return new n({
            kid: t,
            kty: r,
            alg: i,
            n: s,
            e: o
        });
    }
};
function jc(n) {
    let e = [];
    for(let t = 0; t < n.length; t += 24){
        let r = n.slice(t, Math.min(t + 24, n.length));
        if (r.length < 24) {
            let i = new Uint8Array(24);
            i.set(r), e.push(i);
        } else e.push(r);
    }
    return e;
}
function Qc(n) {
    try {
        let e = JSON.parse(n);
        if (e.kid === void 0) throw new Error("JWT header missing kid");
        return e;
    } catch  {
        throw new Error("Failed to parse JWT header.");
    }
}
var G = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(e, t){
        super(), this.jwkAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(e), this.keylessPublicKey = t;
    }
    authKey() {
        let e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return e.serializeU32AsUleb128(4), e.serializeFixedBytes(this.bcsToBytes()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 2,
            input: e.toUint8Array()
        });
    }
    verifySignature(e) {
        try {
            return Pr({
                ...e,
                publicKey: this
            }), !0;
        } catch  {
            return !1;
        }
    }
    serialize(e) {
        this.jwkAddress.serialize(e), this.keylessPublicKey.serialize(e);
    }
    static deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = E.deserialize(e);
        return new n(t, r);
    }
    static isPublicKey(e) {
        return e instanceof n;
    }
    async verifySignatureAsync(e) {
        return Ti({
            ...e,
            publicKey: this
        });
    }
    static create(e) {
        return new n(e.jwkAddress, E.create(e));
    }
    static fromJwtAndPepper(e) {
        return new n(e.jwkAddress, E.fromJwtAndPepper(e));
    }
    static isInstance(e) {
        return "jwkAddress" in e && e.jwkAddress instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] && "keylessPublicKey" in e && e.keylessPublicKey instanceof E;
    }
};
var Bt = (n)=>typeof n == "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].isValid(n).valid ? n : new TextEncoder().encode(n) : n, ii = (n)=>{
    if (n instanceof b || n instanceof x || n instanceof Z || n instanceof B) return n;
    if (n instanceof E || n instanceof G) return new x(n);
    throw new Error(`Unknown account public key: ${n}`);
}, es = (n)=>{
    let e = ii(n);
    if (e instanceof b) return 0;
    if (e instanceof x) return 2;
    if (e instanceof Z) return 1;
    if (e instanceof B) return 3;
    throw new Error(`Unknown signing scheme: ${e}`);
};
var Si = [
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
];
function Jc(n) {
    let e = n.toUint8Array().slice(32);
    for(let t = Si.length - 1; t >= 0; t -= 1){
        if (e[t] < Si[t]) return !0;
        if (e[t] > Si[t]) return !1;
    }
    return !1;
}
var gt = class gt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(e){
        super();
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
        if (t.toUint8Array().length !== gt.LENGTH) throw new Error(`PublicKey length should be ${gt.LENGTH}`);
        this.key = t;
    }
    verifySignature(e) {
        let { message: t, signature: r } = e;
        if (!Jc(r)) return !1;
        let i = Bt(t), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toUint8Array(), s = r.toUint8Array(), a = this.key.toUint8Array();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ed25519"].verify(s, o, a);
    }
    async verifySignatureAsync(e) {
        return this.verifySignature(e);
    }
    authKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 0,
            input: this.toUint8Array()
        });
    }
    toUint8Array() {
        return this.key.toUint8Array();
    }
    serialize(e) {
        e.serializeBytes(this.key.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new gt(t);
    }
    static isPublicKey(e) {
        return e instanceof gt;
    }
    static isInstance(e) {
        return "key" in e && e.key?.data?.length === gt.LENGTH;
    }
};
gt.LENGTH = 32;
var b = gt, Te = class Te extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super();
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].parseHexInput(e, "ed25519", t);
        if (r.toUint8Array().length !== Te.LENGTH) throw new Error(`PrivateKey length should be ${Te.LENGTH}`);
        this.signingKey = r;
    }
    static generate() {
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ed25519"].utils.randomPrivateKey();
        return new Te(e, !1);
    }
    static fromDerivationPath(e, t) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(e)) throw new Error(`Invalid derivation path ${e}`);
        return Te.fromDerivationPathInner(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(t));
    }
    static fromDerivationPathInner(e, t, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]) {
        let { key: i, chainCode: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(Te.SLIP_0010_SEED, t), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(e).map((c)=>parseInt(c, 10)), { key: a } = s.reduce((c, d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(c, d + r), {
            key: i,
            chainCode: o
        });
        return new Te(a, !1);
    }
    publicKey() {
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ed25519"].getPublicKey(this.signingKey.toUint8Array());
        return new b(e);
    }
    sign(e) {
        let t = Bt(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toUint8Array(), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$9$2e$0$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ed25519"].sign(r, this.signingKey.toUint8Array());
        return new C(i);
    }
    toUint8Array() {
        return this.signingKey.toUint8Array();
    }
    toString() {
        return this.toAIP80String();
    }
    toHexString() {
        return this.signingKey.toString();
    }
    toAIP80String() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].formatPrivateKey(this.signingKey.toString(), "ed25519");
    }
    serialize(e) {
        e.serializeBytes(this.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new Te(t, !1);
    }
    static isPrivateKey(e) {
        return e instanceof Te;
    }
};
Te.LENGTH = 32, Te.SLIP_0010_SEED = "ed25519 seed";
var L = Te, an = class an extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
        if (t.toUint8Array().length !== an.LENGTH) throw new Error(`Signature length should be ${an.LENGTH}`);
        this.data = t;
    }
    toUint8Array() {
        return this.data.toUint8Array();
    }
    serialize(e) {
        e.serializeBytes(this.data.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new an(t);
    }
};
an.LENGTH = 64;
var C = an;
var ut = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let t = e.constructor.name;
        switch(t){
            case b.name:
                this.publicKey = e, this.variant = 0;
                break;
            default:
                throw new Error(`Unsupported key for EphemeralPublicKey - ${t}`);
        }
    }
    verifySignature(e) {
        let { message: t, signature: r } = e;
        return this.publicKey.verifySignature({
            message: t,
            signature: r.signature
        });
    }
    async verifySignatureAsync(e) {
        return this.verifySignature(e);
    }
    serialize(e) {
        if (this.publicKey instanceof b) e.serializeU32AsUleb128(0), this.publicKey.serialize(e);
        else throw new Error("Unknown public key type");
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return new n(b.deserialize(e));
            default:
                throw new Error(`Unknown variant index for EphemeralPublicKey: ${t}`);
        }
    }
    static isPublicKey(e) {
        return e instanceof n;
    }
}, Ne = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let t = e.constructor.name;
        switch(t){
            case C.name:
                this.signature = e;
                break;
            default:
                throw new Error(`Unsupported signature for EphemeralSignature - ${t}`);
        }
    }
    static fromHex(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e), r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t.toUint8Array());
        return n.deserialize(r);
    }
    serialize(e) {
        if (this.signature instanceof C) e.serializeU32AsUleb128(0), this.signature.serialize(e);
        else throw new Error("Unknown signature type");
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return new n(C.deserialize(e));
            default:
                throw new Error(`Unknown variant index for EphemeralSignature: ${t}`);
        }
    }
};
;
 //# sourceMappingURL=chunk-L72TIN7T.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UYVPNUH3.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-UYVPNUH3.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-5HXLZHDW.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-5HXLZHDW.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-G3MHXDYA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-G3MHXDYA.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NECL5FCQ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-NECL5FCQ.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4QMXOWHP.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-4QMXOWHP.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V3MBJJTL.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-V3MBJJTL.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ZP4DWSQA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>p),
    "b": (()=>x)
});
var p = ((e)=>(e[e.V1 = 0] = "V1", e[e.DerivableV1 = 1] = "DerivableV1", e))(p || {}), x = ((m)=>(m[m.V1 = 0] = "V1", m))(x || {});
;
 //# sourceMappingURL=chunk-ZP4DWSQA.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7ECCT6PK.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-7ECCT6PK.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HGLO5LDS.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-HGLO5LDS.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FZY4PMEE.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-FZY4PMEE.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FD6FGKYY.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-FD6FGKYY.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4WPQQPUF.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-4WPQQPUF.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2XQKGWHQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-2XQKGWHQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UYVPNUH3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UYVPNUH3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XKUIMGKU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XKUIMGKU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-N6YTF76Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-A5L76YP7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$I7XT6L7S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-I7XT6L7S.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$5HXLZHDW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-5HXLZHDW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$G3MHXDYA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-G3MHXDYA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JABP65XD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JABP65XD.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GOXRBEIJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-2PASUPUO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XJJVJOX5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XJJVJOX5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NECL5FCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NECL5FCQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4QMXOWHP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4QMXOWHP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EF4FA5I6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EF4FA5I6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WCMW2L3P.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WSR5EBJM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C3Q23D22.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QREVMGQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-QREVMGQZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V3MBJJTL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V3MBJJTL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ZP4DWSQA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ZP4DWSQA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FGFLPH5K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WHSTLR3F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WHSTLR3F.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$M3AO73ZL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-M3AO73ZL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6OWBKU7N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-AMXZQPUQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SJDCGNWU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UL777LTI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7ECCT6PK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7ECCT6PK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4AI7KQQ7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7EER7GWV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QP2BY4PK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-QP2BY4PK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HGLO5LDS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HGLO5LDS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$CW35YAMN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-CW35YAMN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6WDVDEQZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RCSJFTST$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RCSJFTST.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OLILO7VD.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7DQDJ2SA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HNBVYE3N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HNBVYE3N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FZY4PMEE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FZY4PMEE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Q4W3WJ2U.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TOBQ5UE6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TOBQ5UE6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MT2RJ7H3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ORMOQWWH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FD6FGKYY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FD6FGKYY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4WPQQPUF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4WPQQPUF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MCFQE4GC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MCFQE4GC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FLZPUYXQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IF4UU2MT.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$CIJA7ONS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-CIJA7ONS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KDMSOCZY.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2XQKGWHQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-2XQKGWHQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UYVPNUH3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UYVPNUH3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XKUIMGKU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XKUIMGKU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$N6YTF76Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-N6YTF76Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-A5L76YP7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$I7XT6L7S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-I7XT6L7S.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$5HXLZHDW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-5HXLZHDW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$G3MHXDYA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-G3MHXDYA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JABP65XD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JABP65XD.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GOXRBEIJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$2PASUPUO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-2PASUPUO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XJJVJOX5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XJJVJOX5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NECL5FCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NECL5FCQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4QMXOWHP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4QMXOWHP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EF4FA5I6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EF4FA5I6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WCMW2L3P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WCMW2L3P.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WSR5EBJM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C3Q23D22.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QREVMGQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-QREVMGQZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V3MBJJTL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V3MBJJTL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ZP4DWSQA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ZP4DWSQA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FGFLPH5K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FGFLPH5K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WHSTLR3F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WHSTLR3F.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$M3AO73ZL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-M3AO73ZL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6OWBKU7N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6OWBKU7N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$AMXZQPUQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-AMXZQPUQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SJDCGNWU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SJDCGNWU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UL777LTI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UL777LTI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7ECCT6PK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7ECCT6PK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4AI7KQQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4AI7KQQ7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7EER7GWV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7EER7GWV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$QP2BY4PK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-QP2BY4PK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HGLO5LDS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HGLO5LDS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$CW35YAMN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-CW35YAMN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6WDVDEQZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6WDVDEQZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RCSJFTST$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RCSJFTST.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OLILO7VD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OLILO7VD.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7DQDJ2SA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7DQDJ2SA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HNBVYE3N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HNBVYE3N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FZY4PMEE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FZY4PMEE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Q4W3WJ2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Q4W3WJ2U.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TOBQ5UE6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TOBQ5UE6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MT2RJ7H3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ORMOQWWH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ORMOQWWH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FD6FGKYY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FD6FGKYY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4WPQQPUF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4WPQQPUF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MCFQE4GC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MCFQE4GC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FLZPUYXQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IF4UU2MT.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$CIJA7ONS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-CIJA7ONS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KDMSOCZY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript) <export b as AccountAddress>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountAddress": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RGKRCZ36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RGKRCZ36.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export te as Aptos>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Aptos": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["te"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript) <export f as Network>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Network": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript) <export g as NetworkToChainId>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NetworkToChainId": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export F as AnyPublicKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnyPublicKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export Q as Ed25519PublicKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Ed25519PublicKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export K as MultiEd25519PublicKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MultiEd25519PublicKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export I as MultiKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MultiKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript) <export a as Serializable>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Serializable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MCFQE4GC.mjs [app-client] (ecmascript) <export J as SigningScheme>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SigningScheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MCFQE4GC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["J"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MCFQE4GC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MCFQE4GC.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RCSJFTST.mjs [app-client] (ecmascript) <export a as AptosConfig>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AptosConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RCSJFTST$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RCSJFTST$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RCSJFTST.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript) <export b as Hex>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Hex": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript) <export b as NetworkToNodeAPI>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NetworkToNodeAPI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export R as Ed25519PrivateKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Ed25519PrivateKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["R"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export Ya as MultiAgentTransaction>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MultiAgentTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ya"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export Xa as SimpleTransaction>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SimpleTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Xa"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export S as Ed25519Signature>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Ed25519Signature": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FLZPUYXQ.mjs [app-client] (ecmascript) <export a as Deserializer>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Deserializer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FLZPUYXQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FLZPUYXQ.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript) <export b as Serializer>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Serializer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$EBMEXURY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-EBMEXURY.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export V as AccountAuthenticator>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountAuthenticator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MT2RJ7H3.mjs [app-client] (ecmascript) <export a as FixedBytes>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FixedBytes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$MT2RJ7H3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-MT2RJ7H3.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export G as AnySignature>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnySignature": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export L as MultiEd25519Signature>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MultiEd25519Signature": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export va as deserializeFromScriptArgument>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deserializeFromScriptArgument": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["va"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export tb as parseTypeTag>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseTypeTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tb"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export ca as TypeTag>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TypeTag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ca"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export wa as TransactionPayload>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TransactionPayload": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wa"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export Ma as RawTransaction>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RawTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ma"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WSR5EBJM.mjs [app-client] (ecmascript) <export a as PublicKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PublicKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WSR5EBJM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WSR5EBJM.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export Pa as FeePayerRawTransaction>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FeePayerRawTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pa"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export _b as generateRawTransaction>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateRawTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export Wb as generateTransactionPayload>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateTransactionPayload": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wb"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export Xb as generateTransactionPayloadWithABI>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateTransactionPayloadWithABI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Xb"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript) <export Na as RawTransactionWithData>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RawTransactionWithData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Na"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$aptos$2d$labs$2b$ts$2d$sdk$40$5$2e$1$2e$0_got$40$11$2e$8$2e$6$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L72TIN7T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@aptos-labs+ts-sdk@5.1.0_got@11.8.6/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L72TIN7T.mjs [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=733f9_%40aptos-labs_ts-sdk_dist_esm_7d8181ea._.js.map