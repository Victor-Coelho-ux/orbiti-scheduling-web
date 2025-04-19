<template>
  <div class="relative">
    <label
      v-if="label"
      class="block text-sm font-medium text-gray-700 mb-2 text-left"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      :class="[inputClasses]"
    />
    <p v-if="internalError" class="mt-1 text-sm text-danger text-left">
      {{ internalError }}
    </p>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { z } from "zod";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  validationSchema: {
    type: Object,
    default: null,
  },
  fieldName: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
const internalError = ref("");

const validate = (value) => {
  if (!props.validationSchema || !props.fieldName) return;

  try {
    props.validationSchema.shape[props.fieldName].parse(value);
    internalError.value = "";
  } catch (err) {
    if (err instanceof z.ZodError) {
      internalError.value = err.issues[0]?.message || "Inválido";
    }
  }
};

const onInput = (event) => {
  const value = event.target.value;
  emit("update:modelValue", value);
  validate(value);
};

watch(
  () => props.modelValue,
  (newVal) => {
    validate(newVal);
  }
);

const inputClasses = computed(() => [
  "w-full px-4 py-2 border border-gray-100 rounded-md h-12",
  "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
  "placeholder-gray-400 transition duration-150 ease-in-out",
  internalError.value || props.error ? "border-red-400" : "",
]);
</script>
