<template>
  <div class="avatar" v-click-outside="onClose">
    <div class="head">
      <h3>Image</h3>
      <button class="close"
              @click="onClose">x
      </button>
    </div>
    <div class="content">
      <img :src="avatar" alt="avatar">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarPopup',
  props: {
    avatar: {
      type: String,
      required: true
    }
  },

  directives: {
    'click-outside': {
      beforeMount(el, binding, vnode) {
        el.eventSetDrag =  () => {
          el.setAttribute('data-dragging', 'yes');
        }
        el.eventClearDrag =  () => {
          el.removeAttribute('data-dragging');
        }
        el.eventOnClick = (event) => {
          const dragging = el.getAttribute('data-dragging');
          // Check that the click was outside the el and its children, and wasn't a drag
          if (!(el == event.target || el.contains(event.target)) && !dragging) {
            // call method provided in attribute value
            binding.value(event);
          }
        };
        document.addEventListener('touchstart', el.eventClearDrag);
        document.addEventListener('touchmove', el.eventSetDrag);
        document.addEventListener('click', el.eventOnClick);
        document.addEventListener('touchend', el.eventOnClick);
      },
      unmounted(el) {
        document.removeEventListener('touchstart', el.eventClearDrag);
        document.removeEventListener('touchmove', el.eventSetDrag);
        document.removeEventListener('click', el.eventOnClick);
        document.removeEventListener('touchend', el.eventOnClick);
        el.removeAttribute('data-dragging');
      }
    }
  },
  methods: {
    onClose() {
      this.$emit('close-avatar');
    }
  }
}
</script>

<style scoped>
.avatar {
  width: 350px;
  height: max-content;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 1;
  transform: translateY(40vh);
}

.head {
  background: #dad8d8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
}

.close {
  background: unset;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.content {
  padding: 8px;
  height: 350px;
  background: #fff;
  border: 1px solid #dad8d8;
}

.content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>