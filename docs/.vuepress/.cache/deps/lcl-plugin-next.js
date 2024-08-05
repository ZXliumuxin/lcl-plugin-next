import {
  createBaseVNode,
  createElementBlock,
  normalizeClass,
  openBlock,
  renderSlot
} from "./chunk-574YRH25.js";

// node_modules/lcl-plugin-next/lcl-plugin-next.js
var _ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, u] of t)
    n[s] = u;
  return n;
};
var m = { class: "l-button-text" };
var f = {
  name: "l-button"
};
var v = Object.assign(f, {
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
      default: false
    }
  },
  setup(e) {
    const t = e;
    return (n, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["l-button", {
        [`l-button-${t.type}`]: t.type,
        [`l-button-${t.size}`]: t.size,
        "l-button-disabled": t.disabled
      }])
    }, [
      renderSlot(n.$slots, "leftIcon", {}, void 0, true),
      createBaseVNode("span", m, [
        renderSlot(n.$slots, "default", {}, void 0, true)
      ]),
      renderSlot(n.$slots, "rightIcon", {}, void 0, true)
    ], 2));
  }
});
var a = _(v, [["__scopeId", "data-v-971cb04c"]]);
a.install = (e) => (e.component(a.name, a), e);
var g = { class: "l-input" };
var y = ["value"];
var b = {
  name: "l-input"
};
var h = Object.assign(b, {
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
    return (o, $) => (openBlock(), createElementBlock("div", g, [
      createBaseVNode("input", {
        onChange: s,
        onInput: u,
        value: e.value,
        class: "l-input-inner",
        type: "text"
      }, null, 40, y)
    ]));
  }
});
var l = _(h, [["__scopeId", "data-v-e846aee8"]]);
l.install = (e) => (e.component(l.name, l), e);
var x = [a, l];
var z = (e) => {
  for (const t of x)
    console.log(t.name), e.component(t.name, t);
};
export {
  a as LButton,
  l as LInput,
  z as default
};
//# sourceMappingURL=lcl-plugin-next.js.map
