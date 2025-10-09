#!/bin/bash

# Deploy script for Quantiva Advisory Website
# This script builds the project and prepares it for deployment

echo "🚀 Starting deployment process..."

# Build the project (includes sitemap generation via postbuild)
echo "📦 Building project..."
npm run build

# Verify build output
echo "✅ Verifying build output..."
if [ -f "build/sitemap.xml" ]; then
    echo "✅ Sitemap generated successfully"
    echo "📊 Sitemap contains $(grep -c '<url>' build/sitemap.xml) URLs"
    echo "🌐 Languages: DE, EN with proper hreflang alternates"
else
    echo "❌ Sitemap not found!"
    exit 1
fi

if [ -f "build/robots.txt" ]; then
    echo "✅ Robots.txt found"
    echo "🔗 Sitemap URL: $(grep 'Sitemap:' build/robots.txt)"
else
    echo "❌ Robots.txt not found!"
    exit 1
fi

echo "🎉 Build completed successfully!"
echo "📁 Build files ready in ./build directory"
echo "🌐 Domain: https://quantivaadvisory.com"
echo ""
echo "Next steps:"
echo "1. Upload build/ directory to your web server"
echo "2. Ensure sitemap.xml is accessible at https://quantivaadvisory.com/sitemap.xml"
echo "3. Submit sitemap to Google Search Console"
