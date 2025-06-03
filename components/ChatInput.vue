<template>
    <form @submit.prevent="send" class="flex items-center gap-2 w-full">
        <input type="text" v-model="input" placeholder="Ask something..." class="flex-1 px-4 py-3 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white outline-none text-base" autofocus>
        <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">Send</button>
    </form>
</template>

<script setup> 
import { useChatStore } from '~/stores/chat';
const input = ref('');
const chat = useChatStore();

const send = ()=>{

    const message = input.value.trim();
    if(!message) return;

        chat.addMessage({role:'user',content:message})

        setTimeout(()=>{
            chat.addMessage({
                role:'assistant',
                content:`🤖 AI Response to: ${message}`,
            })
        },500)
        input.value = ''
    }

</script>