<script setup>
import { ref } from "vue";
import LoginView from "../view/loginView.vue";
import ButtonOrb from "../../../components/Button/ButtonOrb.vue";
import InputOrb from "../../../components/Input/InputOrb.vue";
import { loginSchema } from "../../../validations/auth/loginValidation";

const email = ref("");
const password = ref("");

const submitLogin = () => {
  const result = loginSchema.safeParse({
    email: email.value,
    password: password.value,
  });

  if (result.success) {
    console.log("Email:", email.value);
    console.log("Senha:", password.value);

    email.value = "";
    password.value = "";
  } else {
  }
};
</script>

<template>
  <LoginView>
    <template #header>
      <img
        class="mx-auto h-10 w-auto"
        src="../../../assets/img/logo-01.png"
        alt="Logo Orbiti"
      />
      <p class="text-gray-100 text-sm w-2/3">
        O serviço que você precisa na palma da sua mão.
      </p>
    </template>

    <template #main>
      <form class="mt-8 space-y-2" @submit.prevent="submitLogin">
        <InputOrb
          v-model="email"
          placeholder="Email"
          type="email"
          :validation-schema="loginSchema"
          field-name="email"
        />

        <InputOrb
          v-model="password"
          placeholder="Senha"
          type="password"
          :validation-schema="loginSchema"
          field-name="password"
        />

        <div class="flex">
          <a href="#" class="text-primary-500 hover:underline text-sm">
            Esqueci minha senha
          </a>
        </div>
        <div class="flex space-x-4 pt-4">
          <ButtonOrb variant="secondary" class="w-full">Cancelar</ButtonOrb>
          <ButtonOrb type="submit" class="w-full">Entrar</ButtonOrb>
        </div>
      </form>
    </template>

    <template #footer>
      <p class="text-gray-100 text-sm">
        Não tem uma conta?
        <a href="#" class="text-primary-500 hover:underline"> Cadastre-se </a>
      </p>
    </template>
  </LoginView>
</template>
