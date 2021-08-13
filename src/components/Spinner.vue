<template>
  <div class="spinner">
    <div class="loadingio-spinner-double-ring-s72gmr7fvg loading m-auto">
      <div class="ldio-y5vozik55pb">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Spinner'
}
</script>

<style scoped>

.spinner {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 4;
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

@keyframes ldio-y5vozik55pb {
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(360deg)
  }
}

.ldio-y5vozik55pb div {
  box-sizing: border-box !important
}

.ldio-y5vozik55pb > div {
  position: absolute;
  width: 115.08000000000001px;
  height: 115.08000000000001px;
  top: 10.96px;
  left: 10.96px;
  border-radius: 50%;
  border: 5.48px solid #000;
  border-color: #3d7ec0 transparent #3d7ec0 transparent;
  animation: ldio-y5vozik55pb 1.8518518518518516s linear infinite;
}

.ldio-y5vozik55pb > div:nth-child(2), .ldio-y5vozik55pb > div:nth-child(4) {
  width: 101.38000000000001px;
  height: 101.38000000000001px;
  top: 17.810000000000002px;
  left: 17.810000000000002px;
  animation: ldio-y5vozik55pb 1.8518518518518516s linear infinite reverse;
}

.ldio-y5vozik55pb > div:nth-child(2) {
  border-color: transparent #cc4545 transparent #cc4545
}

.ldio-y5vozik55pb > div:nth-child(3) {
  border-color: transparent
}

.ldio-y5vozik55pb > div:nth-child(3) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}

.ldio-y5vozik55pb > div:nth-child(3) div:before, .ldio-y5vozik55pb > div:nth-child(3) div:after {
  content: "";
  display: block;
  position: absolute;
  width: 5.48px;
  height: 5.48px;
  top: -5.48px;
  left: 49.32000000000001px;
  background: #3d7ec0;
  border-radius: 50%;
  box-shadow: 0 109.60000000000001px 0 0 #3d7ec0;
}

.ldio-y5vozik55pb > div:nth-child(3) div:after {
  left: -5.48px;
  top: 49.32000000000001px;
  box-shadow: 109.60000000000001px 0 0 0 #3d7ec0;
}

.ldio-y5vozik55pb > div:nth-child(4) {
  border-color: transparent;
}

.ldio-y5vozik55pb > div:nth-child(4) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}

.ldio-y5vozik55pb > div:nth-child(4) div:before, .ldio-y5vozik55pb > div:nth-child(4) div:after {
  content: "";
  display: block;
  position: absolute;
  width: 5.48px;
  height: 5.48px;
  top: -5.48px;
  left: 42.470000000000006px;
  background: #cc4545;
  border-radius: 50%;
  box-shadow: 0 95.9px 0 0 #cc4545;
}

.ldio-y5vozik55pb > div:nth-child(4) div:after {
  left: -5.48px;
  top: 42.470000000000006px;
  box-shadow: 95.9px 0 0 0 #cc4545;
}

.loadingio-spinner-double-ring-s72gmr7fvg {
  width: 137px;
  height: 137px;
  display: inline-block;
  overflow: hidden;
  background: rgba(0, 0, 0, 0);
}

.ldio-y5vozik55pb {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.ldio-y5vozik55pb div {
  box-sizing: content-box;
}
</style>