# PR Creation Setup Guide

## 🚀 **Complete Setup Instructions**

### **Step 1: Install Dependencies**
```bash
cd /Users/herijeanmasum/Developer/quantiva-Advisory
npm install -D @octokit/rest
```

### **Step 2: GitHub Token Setup**

#### **A) Create GitHub Personal Access Token**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Set expiration (recommended: 1 year)
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `contents:write` (Write repository contents)
   - ✅ `pull_requests:write` (Write pull requests)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)

#### **B) Alternative: GitHub App (Recommended for Teams)**
For production teams, consider using a GitHub App instead of a personal token:
- Better security and permissions management
- Team-wide access control
- Easier token rotation
- More granular permissions

### **Step 3: Vercel Environment Variables**

#### **A) Set Environment Variables**
In your Vercel project dashboard:

1. Go to Project Settings → Environment Variables
2. Add these variables:

```env
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
GITHUB_OWNER=Masum187
GITHUB_REPO=Quantiva-Advisory
GITHUB_BASE_BRANCH=main
```

#### **B) Environment Variable Details**
- **GITHUB_TOKEN**: Your GitHub Personal Access Token
- **GITHUB_OWNER**: Your GitHub username or organization name
- **GITHUB_REPO**: Repository name (without .git)
- **GITHUB_BASE_BRANCH**: Base branch for PRs (usually "main")

### **Step 4: Deploy to Vercel**

#### **A) Deploy via Vercel CLI**
```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Deploy to production
vercel --prod
```

#### **B) Deploy via GitHub Integration**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push to main
3. Environment variables are set in Vercel dashboard

### **Step 5: Test the Feature**

#### **A) Local Testing**
```bash
# Start development server (Next.js)
npm run dev

# Optional: Vercel dev server (emulates cloud)
vercel dev
```

#### **B) Production Testing**
1. Go to your deployed admin dashboard: `https://your-domain.com/admin`
2. Make a small change to a case
3. Click "Änderungen als PR" button
4. Verify PR is created in GitHub
5. Check that CI/CD pipeline runs on the PR

### **Step 6: Verify CI/CD Integration**

#### **A) Check GitHub Actions**
1. Go to your GitHub repository
2. Click "Actions" tab
3. Verify that PRs trigger the build workflow
4. Check that validation passes

#### **B) Check PR Content**
1. Open the created PR
2. Verify `app/lib/data/cases.json` is updated
3. Check that sitemap and OG images are generated
4. Confirm validation passes

## 🔧 **Configuration Files**

### **A) Vercel Configuration (`vercel.json`)**
```json
{
  "version": 2,
  "framework": "nextjs",
  "installCommand": "npm ci --legacy-peer-deps",
  "buildCommand": "npm run build",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### **B) API Function (`api/create-pr.ts`)**
The API function handles:
- GitHub authentication
- Branch creation
- File commits
- Pull request creation
- Error handling

### **C) Admin Dashboard Integration**
The admin dashboard includes:
- PR creation button
- Loading states
- Success/error handling
- PR link display

## 🧪 **Testing Checklist**

### **A) Local Development**
- [ ] Admin dashboard loads correctly
- [ ] PR creation button is visible
- [ ] Button shows loading state when clicked
- [ ] Error handling works for invalid requests
- [ ] Success message shows PR number and link

### **B) Production Deployment**
- [ ] Environment variables are set correctly
- [ ] API function responds to requests
- [ ] GitHub token has correct permissions
- [ ] PR creation works end-to-end
- [ ] CI/CD pipeline runs on PRs

### **C) GitHub Integration**
- [ ] Branches are created with unique names
- [ ] Files are committed correctly
- [ ] Pull requests have proper titles and descriptions
- [ ] PRs can be merged successfully
- [ ] CI validation passes on PRs

## 🚨 **Troubleshooting**

### **Common Issues**

#### **1. 403 Forbidden Error**
**Cause**: GitHub token permissions insufficient
**Solution**: 
- Check token scopes in GitHub settings
- Ensure token has `repo` and `pull_requests:write` permissions
- Verify token is not expired

#### **2. Reference Already Exists**
**Cause**: Branch name collision
**Solution**:
- This is rare with timestamp-based naming
- Check for existing branches with same prefix
- Try different branch prefix in API call

#### **3. 409 Conflict Error**
**Cause**: File was modified since last fetch
**Solution**:
- Update base branch and retry
- Check for concurrent changes
- Ensure working from latest main branch

#### **4. Rate Limit Exceeded**
**Cause**: GitHub API rate limiting
**Solution**:
- Wait and retry
- Check rate limit headers in response
- Consider using GitHub App for higher limits

### **Debug Steps**

#### **1. Check Environment Variables**
```bash
vercel env ls
```

#### **2. Test GitHub Token**
```bash
curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user
```

#### **3. Test Repository Access**
```bash
curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/$GITHUB_OWNER/$GITHUB_REPO
```

#### **4. Test API Function Locally**
```bash
vercel dev
# Test with curl or Postman
curl -X POST http://localhost:3000/api/create-pr \
  -H "Content-Type: application/json" \
  -d '{"content":"{\"test\":\"data\"}"}'
```

## 🎯 **Production Readiness**

### **Security Checklist**
- [ ] GitHub token stored in environment variables
- [ ] Token has minimal required permissions
- [ ] API function validates input properly
- [ ] Error messages don't expose sensitive data
- [ ] HTTPS enforced for all requests

### **Performance Checklist**
- [ ] API function responds quickly
- [ ] Loading states provide user feedback
- [ ] Error handling is graceful
- [ ] PR creation is reliable
- [ ] CI/CD pipeline is efficient

### **Monitoring Checklist**
- [ ] Vercel function logs are monitored
- [ ] GitHub API rate limits are tracked
- [ ] PR creation success rate is monitored
- [ ] Error rates are tracked
- [ ] User feedback is collected

## 🎉 **Success!**

Once everything is set up correctly, you'll have:

- ✅ **Seamless PR creation** from admin dashboard
- ✅ **Automated CI/CD** integration
- ✅ **Secure token handling** 
- ✅ **Production-ready** workflow
- ✅ **Team collaboration** through PRs
- ✅ **Data quality assurance** through validation
- ✅ **Version control** with proper Git history

**Your admin dashboard is now fully integrated with your development workflow!** 🚀
