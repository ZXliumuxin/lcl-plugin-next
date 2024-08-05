<template>
  <div>
    <l-button disabled>Default</l-button>

    <l-button type="primary" disabled>primary</l-button>

    <l-button type="success" disabled>success</l-button>

    <l-button type="warning" disabled>warning</l-button>

    <l-button type="danger" disabled>danger</l-button>
  </div>
</template>
<style>
.l-button + .l-button {
  margin-left: 8px;
}
</style>
