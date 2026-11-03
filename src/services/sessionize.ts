export interface SessionizeSpeaker {
  firstName: string;
  lastName: string;
  tagline: string;
  bio: string;
  speakerProfileUrl: string;
  photoUrl: string;
  photoLargeUrl: string;
}

export interface SessionizeSession {
  id: number;
  title: string;
  description: string;
  sessionUrl: string;
  languageCode: string;
  language: string;
}

export interface SessionizeEvent {
  id: number;
  name: string;
  eventStartDate: string;
  eventEndDate: string;
  location: string;
  website: string;
}

export interface SessionizeProfile {
  speaker: SessionizeSpeaker;
  sessions: SessionizeSession[];
  events: SessionizeEvent[];
}

export const SESSIONIZE_API_URL = "https://sessionize.com/api/speaker/json/ojs5ww8cum";

export async function getSessionizeProfile(): Promise<SessionizeProfile> {
  const response = await fetch(SESSIONIZE_API_URL, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Não foi possível carregar o perfil do palestrante (${response.status}).`);
  }

  return response.json();
}
