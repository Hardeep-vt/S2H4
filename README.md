# S2H4 - Smokeless Wellness Inhalers

A modern, responsive website for S2H4, showcasing natural smokeless inhalers that promote wellness through pure aromatherapy.

## Features

- 🌿 **Wellness-Focused Design** - Clean, natural aesthetic that reflects the brand's commitment to health
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed and SEO
- 🎨 **Modern UI/UX** - Beautiful gradients, animations, and interactive elements
- 🛍️ **Product Showcase** - Elegant product display with ratings and reviews
- 📧 **Contact Integration** - Newsletter signup and contact information

## Tech Stack

- **Framework**: Next.js 14 with App Router (Static Export)
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Cloudflare Pages

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

This project is configured for Cloudflare Pages deployment:

### **Deploy to Cloudflare Pages:**

1. **Push your code to GitHub** (already done)
2. Go to https://dash.cloudflare.com
3. Navigate to **Workers & Pages** → **Pages**
4. Click **Create application** → **Connect to Git**
5. Select your **S2H4** repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
7. Click **Save and Deploy**

### **Custom Domain:**
- Add your custom domain in Cloudflare Pages settings
- Cloudflare will automatically configure DNS

### **Build Configuration:**
The project uses Next.js static export (`output: 'export'`) which generates static HTML files perfect for Cloudflare Pages.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About/features section
│   ├── Products.tsx         # Product showcase
│   ├── Benefits.tsx         # Benefits and testimonials
│   └── Footer.tsx           # Footer with links and contact
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## Brand Story

S2H4 represents the future of wellness through innovative smokeless inhaler technology. Our products deliver pure, natural oil flavors that refresh your senses and uplift your spirit, promoting a healthier lifestyle without harmful substances.

## Images

For instructions on adding your product photos and logo, see [IMAGE_GUIDE.md](IMAGE_GUIDE.md)

## Live Site

Visit our website at your custom domain or Cloudflare Pages URL!

---

Built with ❤️ for wellness and innovation.
Deployed on Cloudflare Pages.
