<template>
  <div
    class="l-button"
    :class="{
      [`l-button-${props.type}`]: props.type,
      [`l-button-${props.size}`]: props.size,
      'l-button-disabled': props.disabled,
    }"
  >
    <slot name="leftIcon"></slot>
    <span class="l-button-text"><slot></slot></span>
    <slot name="rightIcon"></slot>
  </div>
</template>

<script>
export default {
  name: "l-button",
};
</script>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
    validator: (value) => {
      return ["default", "primary", "danger", "success", "warning"].includes(
        value
      );
    },
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => {
      return ["small", "medium", "large"].includes(value);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.l-button {
  display: inline-block;
  border: 1px solid #e6e6e6;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.l-button-default {
  background-color: #fff;
  border-color: #d9d9d9;
  color: #000;
  &:hover {
    color: #4096ff;
    border-color: #4096ff;
  }
  &:active {
    color: #0958d9;
    border-color: #0958d9;
  }
}
.l-button-primary {
  background-color: #1677ff;
  color: #fff;
  &:hover {
    color: #fff;
    background-color: #4096ff;
  }
  &:active {
    color: #fff;
    background-color: #0958d9;
  }
}
.l-button-danger {
  border-color: #ff4d4f;
  color: #ff4d4f;
  &:hover {
    color: #ff7875;
    border-color: #ffa39e;
  }
  &:active {
    color: #d9363e;
    border-color: #d9363e;
  }
}
.l-button-success {
  border-color: #389e0d;
  color: #389e0d;
  &:hover {
    color: #95d475;
    border-color: #95d475;
  }
  &:active {
    color: #67c23a;
    border-color: #67c23a;
  }
}
.l-button-warning {
  border-color: #e6a23c;
  color: #e6a23c;
  &:hover {
    color: #f3d19e;
    border-color: #f3d19e;
  }
  &:active {
    color: #eebe77;
    border-color: #eebe77;
  }
}
.l-button-small {
  padding: 4px 8px;
  font-size: 12px;
}
.l-button-medium {
  padding: 6px 12px;
  font-size: 14px;
}
.l-button-large {
  padding: 8px 16px;
  font-size: 16px;
}
.l-button-disabled {
  cursor: not-allowed;
  border-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.04);
  box-shadow: none;
  &:hover {
    color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.04);
    border-color: #d9d9d9;
  }
  &:active {
    color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.04);
    border-color: #d9d9d9;
  }
}
.l-button-text {
  margin-left: 2px;
  margin-right: 2px;
}
</style>
