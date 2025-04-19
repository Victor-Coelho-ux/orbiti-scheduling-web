<template>
  <button
    :type="type"
    :class="[
      'rounded-full px-8 py-3 text-center transition-all duration-300',
      fullWidth ? 'w-full' : 'inline-block',
      disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
      variantClasses,
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: { type: String, default: "button" },
  variant: { type: String, default: "primary" },
  fullWidth: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  onClick: { type: Function, default: () => {} },
});

const variantClasses = computed(() => {
  return (
    {
      primary:
        "bg-gradient-to-r from-primary-500 to-secondary-400 hover:secondary-500 hover:to-primary-500 text-white",
      secondary:
        "hover:bg-secondary-500 text-gray-100 border border-gray-100 hover:border-secondary-400 hover:text-secondary-400",
      danger: "bg-danger hover:bg-red-700 text-white",
    }[props.variant] || "bg-primary-500"
  );
});
</script>
