import { ref } from "vue";
import { auth } from "@/firebase/config";

const hata = ref(null)

const signup = async (email, parola, kullaniciAd) => {
    hata.value = null;
    try {
        if (kullaniciAd.trim() === '') {
            throw new Error('Kullanıcı adı giriniz.')
        }
        const res = await auth.createUserWithEmailAndPassword(email, parola);

        if (!res) {
            throw new Error('Kayıt işlemi gerçekleşemedi')
        }
        await res.user.updateProfile({ displayName: kullaniciAd })

        hata.value = null;
        return res;
    } catch (error) {
        hata.value = error.message;
    }
}

const useRegister = () => {
    return { hata, signup }
}

export default useRegister