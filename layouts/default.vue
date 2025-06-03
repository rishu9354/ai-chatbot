<template>
    <div class="dark">

        <div
            class="min-h-screen bg-[#0F0F0F] text-white font-sans flex flex-col transition-colors duration-300">
            <!-- header -->
            <header class="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 p-4 sm:px-8 border-b border-gray-700 sticky top-0 z-50 bg-[#0F0F0F]">
                <h1 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-purple-400 text-center sm:text-left">
                    <span class="text-3xl">🤖</span>
                    <span>CodeCraft AI Chat</span>
                </h1>
               
            </header>
            <!-- page content -->
            <main class="flex-1 w-full px-4 sm:px-8 py-4">
                <NuxtPage />

            </main>
            <!-- footer -->
            <footer class="p-4 text-center text-sm text-gray-500 sm:px-8">
                Powered by <a href="https://gemini.google.com/app" target="_blank">Gemini</a> <br>
                © 2025 CodeCraft. All rights reserved.
            </footer>
        </div>
    </div>

</template>

<script setup>
import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode();
const theme = computed(() => colorMode.value)

// const toggleBg = () => {
//     colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
// }
</script>