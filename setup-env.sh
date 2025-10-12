#!/bin/bash
# Quick setup script for environment variables

cat > .env.local << 'ENVEOF'
# Unsplash API Configuration
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=wYFqPnH3EJa-ZKFD_BteK9VtXrKKagNg7vb7J8WQFNA
UNSPLASH_SECRET_KEY=2qO47jco6Gl3CKAKSzr7_urQ2DF-QfYHb1uj-cxMVF0
ENVEOF

echo "✅ .env.local created with Unsplash API keys"
echo "⚠️  Remember to regenerate these keys after testing!"
