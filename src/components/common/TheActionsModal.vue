<script setup lang="ts"></script>

<template>
  <div class="action-modal__container">
    <slot>
      <div class="class">дефолт</div>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.action-modal {
  &__container {
    position: absolute;
    border-radius: 7px;
    border: 1px solid var(--GrayFonCompas, #919cb8);
    background: var(--WhiteCompas, #fff);
    right: -70px;
		top: -20px;
		// overflow: hidden;
  }
}
</style>
<style lang="scss">
.action-modal__container {
	& > div {
    padding: 5px;

	}
  & > div:hover {
    background: #4b73db;
		color:  #fff;

  }
}
</style>
