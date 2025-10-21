# ElevenLabs API Setup Guide

## 🎤 Ultra-Realistic AI Voice Integration

Die Karriere-Seite verwendet jetzt ElevenLabs für extrem realistische, menschliche Stimmen.

---

## 📋 Schnellstart (5 Minuten)

### 1. ElevenLabs Account erstellen (Kostenlos)

1. Gehe zu: https://elevenlabs.io/
2. Klicke auf **"Sign Up"**
3. Registriere dich mit E-Mail (keine Kreditkarte nötig)

### 2. API-Key erhalten

1. Nach dem Login: Klicke auf dein **Profilbild** (oben rechts)
2. Wähle **"Profile Settings"**
3. Navigiere zu **"API Keys"**
4. Klicke auf **"Generate API Key"**
5. Kopiere den Key (beginnt mit `sk_...`)

### 3. API-Key einrichten

**Option A: Direkt auf der Website (für Tests)**
1. Öffne: https://www.quantivaadvisory.com/de/karriere
2. Klicke auf **⚙️ Settings-Button**
3. Aktiviere **"Premium KI-Stimmen"** (Toggle)
4. Füge deinen API-Key im Feld ein
5. Teste die Stimme!

**Option B: Serverseitig (Production - empfohlen)**

Siehe unten: **Production Setup**

---

## 💰 Preismodell

### **Free Tier** (Empfohlen für Start)
```
✅ 10.000 Zeichen/Monat
✅ Alle Premium-Stimmen
✅ Kommerzielle Nutzung
✅ Keine Kreditkarte nötig

Reicht für: ~100-150 Voice-Plays pro Monat
```

### **Starter Plan** ($5/Monat)
```
✅ 30.000 Zeichen/Monat
✅ Alle Features
✅ Priority Support

Reicht für: ~300-450 Voice-Plays
```

### **Creator Plan** ($22/Monat)
```
✅ 100.000 Zeichen/Monat
✅ Voice Cloning
✅ Commercial License

Reicht für: ~1.000-1.500 Voice-Plays
```

---

## 🚀 Production Setup (Empfohlen)

Für die Production-Website sollte der API-Key **nicht** im Frontend eingegeben werden.

### Schritt 1: Environment Variable in Vercel

1. Öffne: https://vercel.com/masum187s-projects/quantiva-advisory
2. Gehe zu: **Settings → Environment Variables**
3. Füge hinzu:
   ```
   Name:  REACT_APP_ELEVENLABS_KEY
   Value: sk_IHR_ECHTER_KEY_HIER
   Target:
     ✅ Production
     ✅ Preview
     ⬜ Development
   ```
4. Klicke **"Save"**
5. Redeploy die App

### Schritt 2: Code-Update (Optional)

Aktuell wird ein Demo-Key verwendet. Für Production:

```typescript
// In CareerPage.tsx, Zeile ~123:
const apiKey = process.env.REACT_APP_ELEVENLABS_KEY || elevenLabsKey || '';
```

**Oder:** Ich erstelle eine Serverless Function (empfohlen für Sicherheit)

---

## 🎛️ Verfügbare Stimmen

### Deutsche Stimmen

| Voice ID | Name | Beschreibung | Empfohlen für |
|----------|------|--------------|---------------|
| `EXAVITQu4vr4xnSDxMaL` | Sarah | Warm, professionell | Karriere-Seiten ✅ |
| `pNInz6obpgDQGcFmaJgB` | Adam | Tief, autoritativ | CEO-Messages |
| `onwK4e9ZLuTAKqWW03F9` | Daniel | Klar, freundlich | Tutorials |

### Englische Stimmen

| Voice ID | Name | Beschreibung | Empfohlen für |
|----------|------|--------------|---------------|
| `21m00Tcm4TlvDq8ikWAM` | Rachel | Professional, clear | Corporate ✅ |
| `pNInz6obpgDQGcFmaJgB` | Adam | Deep, authoritative | Leadership |
| `onwK4e9ZLuTAKqWW03F9` | Daniel | Clear, friendly | Casual |

---

## 🔧 Erweiterte Konfiguration

### Voice Settings (bereits optimiert)

```javascript
voice_settings: {
  stability: 0.5,          // Konsistenz (0-1)
  similarity_boost: 0.75,  // Stimmen-Ähnlichkeit
  style: 0.5,              // Stil-Intensität
  use_speaker_boost: true  // Audio-Qualität
}
```

### Model: `eleven_multilingual_v2`
- ✅ Beste Qualität für DE/EN
- ✅ Natürliche Intonation
- ✅ Emotionale Nuancen

---

## 🆘 Troubleshooting

### Problem: "API error" / Voice spielt nicht

**Lösung 1: API-Key prüfen**
```bash
# Test in Terminal:
curl -H "xi-api-key: IHR_KEY" https://api.elevenlabs.io/v1/voices

# Sollte Liste von Stimmen zurückgeben
```

**Lösung 2: Fallback verwenden**
- Toggle "Premium KI-Stimmen" aus
- Nutzt dann Browser-TTS als Backup

### Problem: "Rate Limit Exceeded"

**Lösung:**
- Free Tier: 10.000 Zeichen/Monat erreicht
- Upgrade zu Starter Plan ($5/Monat)
- Oder: Warte bis nächster Monat

### Problem: Stimme klingt robotisch

**Lösung:**
- Stelle sicher, dass "Premium KI-Stimmen" **aktiviert** ist
- Prüfe, ob API-Key korrekt eingegeben wurde
- Teste verschiedene Stimmen (Sarah empfohlen)

---

## 📊 Usage Monitoring

### In ElevenLabs Dashboard:

1. Login auf https://elevenlabs.io/
2. Gehe zu: **"Usage"**
3. Sieh:
   - Verbrauchte Zeichen diesen Monat
   - Verbleibende Zeichen
   - Character/Call History

### Auto-Tracking:
```javascript
// Unser Text hat ~100 Zeichen
"Du bist derjenige, der dieses Unternehmen mitgestalten kann..."

1 Play = ~100 Zeichen
→ Free Tier reicht für ~100 Plays/Monat
```

---

## 🎯 Best Practices

### ✅ DO's:
- Aktiviere Premium-Stimmen für Karriere-Seite
- Nutze Sarah (weiblich) für professionellen Ton
- Speichere API-Key in Environment Variables
- Monitor Usage in ElevenLabs Dashboard

### ❌ DON'Ts:
- API-Key nicht im Code committen
- Nicht öffentlich teilen
- Nicht auf Client-Seite hardcoden

---

## 🔐 Sicherheit

### Production-Setup mit Serverless Function:

```typescript
// /api/tts.ts (Vercel Serverless Function)
export default async function handler(req, res) {
  const { text, voiceId } = req.body;
  
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: 'POST',
      headers: {
        'xi-api-key': process.env.ELEVENLABS_KEY, // Sicher!
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    }
  );
  
  const audio = await response.blob();
  res.status(200).send(audio);
}
```

**Vorteil:** API-Key bleibt serverseitig, nie im Client sichtbar!

---

## 📞 Support

**ElevenLabs:**
- Docs: https://elevenlabs.io/docs
- Support: support@elevenlabs.io
- Discord: https://discord.gg/elevenlabs

**Quantiva (uns):**
- Frage mich einfach! 😊

---

## ✅ Checkliste

- [ ] ElevenLabs Account erstellt
- [ ] API-Key generiert
- [ ] Key in Vercel Environment Variables gespeichert
- [ ] Website neu deployed
- [ ] Premium-Stimmen getestet
- [ ] Sarah als Standardstimme ausgewählt
- [ ] Usage Monitoring eingerichtet

---

**Status:** 🟢 Ready to deploy!

**Next Step:** API-Key in Vercel hinzufügen (siehe Production Setup oben)




