<template>
    <div class="flex flex-col gap-4 w-full relative">
        <!-- bg welcome txt msg -->
        <div
            class="absolute top-4 left-4 text-gray-500 dark:text-gray-600 text-2xl text-center italic pointer-events-none select-none z-0">
            {{ finalContent }}
        </div>
        <div class="relative z-10 flex flex-col gap-3 pt-10">

            <div v-for="(msg, index) in messages" :key="index"
                :class="['max-w-xl p-3 rounded-xl shadow transition-all duration-300', msg.role === 'user' ? 'self-end bg-blue-500 text-white' : 'self-start bg-gray-800 text-white']">
                <!-- Typewriter for last assistant msg -->
                <template v-if="index === messages.length - 1 && msg.role === 'assistant'">
                    {{ typedMessage }}
                </template>
                <template v-else>
                    {{ msg.content }}
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useChatStore } from '~/stores/chat'
const typedMessage = ref('');

const chat = useChatStore();
const { messages } = storeToRefs(chat);
const { finalContent } = storeToRefs(chat)

// Watch for new assistant message
watch(
  () => messages.value.length,
  async (newLen, oldLen) => {
    const newMsg = messages.value[newLen - 1]
    if (newMsg?.role === 'assistant') {
      typeWriter(newMsg.content)
    }
  }
)

function typeWriter(text) {
  typedMessage.value = ''
  let i = 0
  const speed = 20
  const interval = setInterval(() => {
    if (i < text.length) {
      typedMessage.value += text.charAt(i)
      i++
    } else {
      clearInterval(interval)
    }
  }, speed)
}

</script>