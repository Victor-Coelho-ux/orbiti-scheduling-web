<script setup>
import { ref } from "vue";
import ButtonOrb from "../../../components/Button/ButtonOrb.vue";
import InputOrb from "../../../components/Input/InputOrb.vue";

const email = ref("");
const password = ref("");

const submitLogin = () => {
  console.log("Email:", email.value);
  console.log("Senha:", password.value);
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-10 p-6">
      <div class="text-center gap-4 flex flex-col items-center">
        <img
          class="mx-auto h-10 w-auto"
          src="../../../assets/img/logo-01.png"
          alt="Logo Orbiti"
        />
        <p class="text-gray-100 text-sm">
          O serviço que você precisa na palma da sua mão.
        </p>
      </div>
      <form class="mt-8 space-y-2" @submit.prevent="submitLogin">
        <InputOrb v-model="email" placeholder="Email" type="email" />
        <InputOrb v-model="password" placeholder="Senha" type="password" />

        <div class="flex space-x-4 pt-4">
          <ButtonOrb variant="secondary" class="w-full"> Cancelar </ButtonOrb>
          <ButtonOrb type="submit" class="w-full"> Entrar </ButtonOrb>
        </div>
      </form>
    </div>
  </div>
</template>
