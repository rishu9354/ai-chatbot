import { defineStore } from "pinia";
import { useGeminiAi } from "~/composables/useGeminiAi";

export const useChatStore = defineStore('chat',() =>{
// state
const messages = reactive([
    {
        role:'',
        content:'',
    }
]);
const isLoading = ref(false);
const {fetchResult} = useGeminiAi();

const finalContent = ref('Hi! I’m CodeCraft AI. How can I help you today? 🤖')

// actions
function addMessage(msg:{role:string; content:string}){
    messages.push(msg);
    console.log(msg);
    
    getAnswers(msg);
}

async function getAnswers(msg:{role:string; content:string}){
    if(msg.role === 'user'){
        isLoading.value = true;
        const reply = await fetchResult(msg.content);
        messages.push({role:'assistant',content:reply});
        isLoading.value= false; 
    }
}


    return { messages, finalContent,addMessage}
})
