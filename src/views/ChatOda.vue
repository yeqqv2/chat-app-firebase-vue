<template>
    <div class="container">
        <div class="navbar">
            <Navbar />
            <div class="chat">
                <ChatWindow />
                <ChatForm />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ChatForm from '@/components/ChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
export default {
    components: {
        Navbar,
        ChatForm,
        ChatWindow
    }
}
</script>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
}

.chat {
    width: 70%;
}
</style>