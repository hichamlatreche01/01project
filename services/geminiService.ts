
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { COURSE_TEXT, SYSTEM_INSTRUCTION } from "../constants";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export class EvaluationService {
  private chat: Chat;

  constructor() {
    this.chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `${SYSTEM_INSTRUCTION}\n\nVOICI LE TEXTE DE RÉFÉRENCE :\n${COURSE_TEXT}`,
        temperature: 0.7,
      },
    });
  }

  async startEvaluation(): Promise<string> {
    const response = await this.chat.sendMessage({ message: "Bonjour, je suis prêt pour l'évaluation. Peux-tu commencer ?" });
    return response.text || "Erreur de démarrage.";
  }

  async sendAnswer(answer: string): Promise<string> {
    const response = await this.chat.sendMessage({ message: answer });
    return response.text || "Erreur de communication.";
  }
}
