export const useViewport = () => {
    const height = ref(0);

    const updateHeight = () => {
        height.value = window.innerHeight
    }

    onMounted(() => {
        updateHeight()
        window.addEventListener('resize', updateHeight);
        console.log(updateHeight);
        
    })

    onUnmounted(() => {
        window.removeEventListener('resize', updateHeight);
    })

    return { height }
}