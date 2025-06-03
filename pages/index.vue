<template>
<div class="flex flex-col bg-black text-white rounded-xl" :style="{ height: `${height - 160}px` }">
  <div class="flex-1 p-4 overflow-y-auto" >

    <ChatWindow />
  </div>
  <div class="p-4 border-t border-gray-700">
    <ChatInput />
  </div>
</div>

</template>

<script setup>
import { useViewport } from '~/composables/useViewport';
const { height } = useViewport();
</script>