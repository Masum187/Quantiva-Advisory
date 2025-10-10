# 🔑 SSH-Key Setup für GitHub (Schnellanleitung)

## 1. SSH-Key generieren

```bash
# Ed25519 Key (modern, empfohlen)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Drücken Sie 3x Enter (Standard-Speicherort, kein Passwort)
```

## 2. SSH-Key zu GitHub hinzufügen

```bash
# Key anzeigen und kopieren (macOS)
cat ~/.ssh/id_ed25519.pub | pbcopy

# Oder manuell anzeigen:
cat ~/.ssh/id_ed25519.pub
```

**Dann:**
1. Öffnen Sie: https://github.com/settings/keys
2. Klicken Sie auf "New SSH key"
3. Title: `Mac - Quantiva Development`
4. Key: Fügen Sie den kopierten Key ein (beginnt mit `ssh-ed25519`)
5. Klicken Sie auf "Add SSH key"

## 3. SSH-Verbindung testen

```bash
ssh -T git@github.com
```

**Erwartete Ausgabe:**
```
Hi Masum187! You've successfully authenticated, but GitHub does not provide shell access.
```

## 4. Remote auf SSH umstellen

```bash
cd /Users/herijeanmasum/Developer/quantiva-website
git remote set-url origin git@github.com:Masum187/Quantiva-Advisory.git
```

## 5. Push mit SSH

```bash
git push -u origin main
```

✅ Kein Token mehr nötig!

---

**Vorteil von SSH:**
- Keine Token-Verwaltung
- Keine Passwort-Eingabe
- Sicherer und bequemer
- Einmalige Einrichtung

