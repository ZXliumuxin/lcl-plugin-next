import { openBlock as d, createElementBlock as i, normalizeClass as p, renderSlot as c, createElementVNode as r } from "vue";
const _ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, u] of t)
    n[s] = u;
  return n;
}, m = { class: "l-button-text" }, f = {
  name: "l-button"
}, v = /* @__PURE__ */ Object.assign(f, {
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "danger", "success", "warning"].includes(
        e
      )
    },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, s) => (d(), i("div", {
      class: p(["l-button", {
        [`l-button-${t.type}`]: t.type,
        [`l-button-${t.size}`]: t.size,
        "l-button-disabled": t.disabled
      }])
    }, [
      c(n.$slots, "leftIcon", {}, void 0, !0),
      r("span", m, [
        c(n.$slots, "default", {}, void 0, !0)
      ]),
      c(n.$slots, "rightIcon", {}, void 0, !0)
    ], 2));
  }
}), a = /* @__PURE__ */ _(v, [["__scopeId", "data-v-971cb04c"]]);
a.install = (e) => (e.component(a.name, a), e);
const g = { class: "l-input" }, y = ["value"], b = {
  name: "l-input"
}, h = /* @__PURE__ */ Object.assign(b, {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  emits: ["update:value", "input"],
  setup(e, { emit: t }) {
    const n = t, s = (o) => {
      n("update:value", o.target.value);
    }, u = (o) => {
      n("input", o.target.value);
    };
    return (o, $) => (d(), i("div", g, [
      r("input", {
        onChange: s,
        onInput: u,
        value: e.value,
        class: "l-input-inner",
        type: "text"
      }, null, 40, y)
    ]));
  }
}), l = /* @__PURE__ */ _(h, [["__scopeId", "data-v-e846aee8"]]);
l.install = (e) => (e.component(l.name, l), e);
const x = [a, l], z = (e) => {
  for (const t of x)
    console.log(t.name), e.component(t.name, t);
};
export {
  a as LButton,
  l as LInput,
  z as default
};
