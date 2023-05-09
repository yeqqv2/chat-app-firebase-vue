<template>
    <form>
        <input placeholder="Mesaj yaz..." @keypress.enter.prevent="gonder" v-model="mesaj" />
    </form>
</template>

<script>
import getUser from '../composables/getUser'
import { tarih } from '../firebase/config'
import { ref } from 'vue'
import useCollection from '../composables/useCollection'
export default {
    setup() {
        const { kullanici } = getUser();
        const mesaj = ref('');
        const { belgeEkle, hata } = useCollection('mesajlar')
        const gonder = async () => {
            const chat = {
                kullanici: kullanici.value.displayName,
                mesaj: mesaj.value,
                olusturulmaTarihi: tarih()
            }
            await belgeEkle(chat);
            if (!hata.value) {
                mesaj.value = ''
            }
            else {
                mesaj.value = hata.value
            }
        }
        return { mesaj, gonder }
    }
}
</script>

<style>
form {
    flex-wrap: nowrap;
}

input {
    width: 100%;
    color: #e76f51;
    word-wrap: break-word;
    word-break: break-all;
    padding: 10px;
}
</style>