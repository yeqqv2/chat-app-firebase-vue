<template>
    <div class="log">
        <form @submit.prevent="uyeOl">
            <h2>Hesap oluşturun.</h2>
            <div>E-mailinizi kullanarak bir hesap oluşturun</div>
            <input type="text" placeholder="Kullanıcı adı" v-model="kullaniciAd">
            <input type="email" placeholder="E-mail" v-model="email">
            <input type="password" placeholder="Parola" v-model="parola">
            <button>Kaydol</button>
        </form>
    </div>
    <div class="error">
        {{ hata }}
    </div>
</template>

<script>
import { ref } from "vue"
import useRegister from "../composables/useRegister"
export default {
    setup(props, context) {
        const kullaniciAd = ref('')
        const email = ref('')
        const parola = ref('')

        const { hata, signup } = useRegister()

        const uyeOl = async () => {
            await signup(email.value, parola.value, kullaniciAd.value);
            if (!hata.value) {
                context.emit('register')
            }
        }
        return { kullaniciAd, email, parola, uyeOl, hata }
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