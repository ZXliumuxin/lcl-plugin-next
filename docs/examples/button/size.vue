<template>
  <div>
    <l-button size="large">large Default</l-button>
    <l-button size="medium">medium Default</l-button>
    <l-button size="small">small Default</l-button>
  </div>
  <div>
    <l-button size="large" type="primary">large primary</l-button>
    <l-button size="medium" type="primary">medium primary</l-button>
    <l-button size="small" type="primary">small primary</l-button>
  </div>
  <div>
    <l-button size="large" type="success">large success</l-button>
    <l-button size="medium" type="success">medium success</l-button>
    <l-button size="small" type="success">small success</l-button>
  </div>
  <div>
    <l-button size="large" type="warning">large warning</l-button>
    <l-button size="medium" type="warning">medium warning</l-button>
    <l-button size="small" type="warning">small warning</l-button>
  </div>
  <div>
    <l-button size="large" type="danger">large danger</l-button>
    <l-button size="medium" type="danger">medium danger</l-button>
    <l-button size="small" type="danger">small danger</l-button>
  </div>
</template>
<style>
.l-button + .l-button {
  margin-left: 8px;
}
div + div {
  margin-top: 8px;
}
</style>
