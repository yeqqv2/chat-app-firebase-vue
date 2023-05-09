<template>
    <div class="log">
        <form @submit.prevent="girisYap">
            <h2>Giriş Yap</h2>
            <div>Hesabınızı kullanın.</div>
            <input type="email" placeholder="E-mail" v-model="email">
            <input type="password" placeholder="Parola" v-model="parola">
            <button>Giriş yap</button>
        </form>
    </div>
    <div class="error">
        {{ hata }}
    </div>
</template>

<script>
import { ref } from "vue"
import useLogin from "../composables/useLogin"
export default {
    setup(props, context) {
        const email = ref('')
        const parola = ref('')

        const { hata, login } = useLogin()

        const girisYap = async () => {
            login(email.value, parola.value);
            if (!hata.value) {
                context.emit('login')
            }
        }
        return { email, parola, girisYap, hata }
    }
}
</script>

<style>
form {
    display: block;
    justify-content: center;
    align-items: center;
}
</style>