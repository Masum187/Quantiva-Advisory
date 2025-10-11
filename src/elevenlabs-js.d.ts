// Type declarations for elevenlabs-js
declare module 'elevenlabs-js' {
  export interface VoiceSettings {
    stability?: number;
    similarity_boost?: number;
    style?: number;
    use_speaker_boost?: boolean;
  }

  export interface TextToSpeechOptions {
    text: string;
    model_id?: string;
    output_format?: string;
    voice_settings?: VoiceSettings;
  }

  export class ElevenLabsClient {
    constructor(config: { apiKey: string });
    textToSpeech: {
      convert(
        voiceId: string,
        options: TextToSpeechOptions
      ): Promise<AsyncIterable<Uint8Array>>;
    };
  }
}

