# S2H4 Deployment Instructions

## Step 1: Create New GitHub Repository

1. Go to https://github.com/new
2. **Repository name**: `S2H4` (or `s2h4`)
3. **Description**: "Smokeless Wellness Inhalers - Natural aromatherapy for a healthier life"
4. **Visibility**: Public (or Private if preferred)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push Code to New Repository

After creating the repository, GitHub will show you instructions. We'll use these commands:

```bash
cd /Users/hardeep/Downloads/website

# Remove old remote
git remote remove origin

# Add new remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/S2H4.git

# OR if using the exact username from before:
git remote add origin https://github.com/Hardeep-vt/S2H4.git

# Push to new repository
git push -u origin main
```

## Step 3: Add Your Images

1. Place your images in the appropriate folders:
   - Logo: `public/images/logo/s2h4-logo.png`
   - Main product: `public/images/products/main-product.png`
   - Flavor photos: `public/images/products/[flavor-name].png`

2. See `IMAGE_GUIDE.md` for detailed naming conventions

## Step 4: Deploy to Vercel

### Option A: Automatic Deploy (Recommended)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your new `S2H4` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live at `s2h4.vercel.app` (or custom domain)

### Option B: CLI Deploy

```bash
cd /Users/hardeep/Downloads/website
npx vercel --prod
```

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `s2h4.com`)
4. Follow DNS configuration instructions

## Notes

- The old h2s4 repository can be archived or deleted
- All branding has been updated from H2S4 to S2H4
- Images folder structure is ready for your photos
- The website will automatically use images when you add them to the public folder

## Troubleshooting

If git push fails:
```bash
gh auth login  # Re-authenticate with GitHub
git push -u origin main
```

If you need to force push (be careful!):
```bash
git push -u origin main --force
```

