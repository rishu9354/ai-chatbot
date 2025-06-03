import { GoogleGenerativeAI } from "@google/generative-ai";


export const useGeminiAi = ()=>{
    const config = useRuntimeConfig();
    const ai = new GoogleGenerativeAI(config.public.geminiKey);
    const fetchResult = async (question:string)=>{
        try {
            const model = ai.getGenerativeModel({model:"gemini-2.0-flash"})
            const result = await model.generateContent(question);
            const response = result.response;
            const text = response.text();
            return text;
        } catch (error) {
            console.error("Gemini Error : ",error);
            return '❌ Failed to get response from Gemini.'
        }
    }
    return {fetchResult}
}
