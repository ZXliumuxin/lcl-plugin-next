<template>
  <div class="l-input">
    <input
      @change="handleChange"
      @input="handleInput"
      :value="value"
      class="l-input-inner"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: "l-input",
};
</script>

<script setup>
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["update:value", "input"]);

const handleChange = (event) => {
  emits("update:value", event.target.value);
};
const handleInput = (event) => {
  emits("input", event.target.value);
};
</script>

<style lang="scss" scoped>
.l-input {
  .l-input-inner {
    box-sizing: border-box;
    margin: 0;
    padding: 4px 12px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    list-style: none;
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    background-color: #ffffff;
    background-image: none;
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
    border-radius: 6px;
    transition: all 0.2s;
  }
}
</style>
