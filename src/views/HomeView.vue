<template>
  <div class="home">
    <div class="container">
      <div v-if="uyeMi" class="login">
        <Login @login="chatBasla" />
        <p>Kaydolmak için <span @click="uyeMi = false">kaydol</span> sayfasına gidiniz</p>
      </div>
      <div v-else>
        <Register @register="chatBasla" class="login" />
        <p>Giriş yapmak için <span @click="uyeMi = true">giriş</span> sayfasına gidiniz</p>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "../components/Register"
import Login from "@/components/Login.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    Login,
    Register
  },
  setup() {
    const uyeMi = ref(true)
    const router = useRouter();

    const chatBasla = () => {
      router.push({ name: "ChatOda" });
    }
    return { uyeMi, chatBasla }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

}

.login {
  margin: 10px auto;
}
</style>