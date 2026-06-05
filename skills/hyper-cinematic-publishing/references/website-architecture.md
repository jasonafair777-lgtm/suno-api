# Website Architecture & Build Guide

## Tech Stack

**Frontend:** React 19, Tailwind CSS 4, Framer Motion, Three.js/WebGL  
**Backend:** Express.js, tRPC, Node.js  
**Database:** MySQL/TiDB with Drizzle ORM  
**Payments:** Stripe API, Gumroad API  
**Storage:** S3 (for images, PDFs, downloads)  
**Hosting:** Manus (built-in) or Vercel/Railway

## Page Architecture

### 1. Hero Section
- Full-screen cinematic background (8K image or video)
- Animated particle system (WebGL canvas)
- Centered headline with animated typography
- Two CTAs: "Purchase Now" + "Preview"
- Scroll indicator with animation

**Key Components:**
- Canvas-based particle system (React hook)
- Parallax background effect
- Animated text reveal (Framer Motion)
- Smooth scroll navigation

### 2. Scientific Gallery
- 4-column grid (responsive: 1-2-4 columns)
- Interactive cards with hover effects
- Modal lightbox for full-size viewing
- Annotations and metadata display
- Smooth transitions and animations

**Key Components:**
- Gallery grid with responsive layout
- Card component with hover state
- Modal/Dialog component
- Image lazy loading

### 3. Manuscript Excerpt Reader
- Split layout: Image + Text
- Chapter navigation (prev/next buttons)
- Progress indicator (dots)
- Two distinct text sections: Scientific + Lyrical
- "Read Full Book" CTA

**Key Components:**
- Excerpt data structure (TypeScript interface)
- Navigation controls
- Text styling (serif for lyrical, sans for scientific)
- Image display with captions

### 4. Product Shop
- 3-tier pricing display
- Feature comparison table
- Stripe checkout integration
- Quantity selector
- Order confirmation

**Key Components:**
- Product card component
- Pricing tier selector
- Feature list component
- Stripe payment form

### 5. Author Bio & Press Kit
- Author photo and biography
- Book synopsis
- High-res cover download
- Publication guide download
- Media kit PDF
- Contact information

**Key Components:**
- Bio card layout
- Download button component
- Media kit display

### 6. Slides Viewer
- Embedded presentation (9 slides)
- Navigation controls (prev/next, thumbnails)
- Full-screen mode
- Slide counter

**Key Components:**
- Slides embed component
- Navigation controls
- Thumbnail strip

## Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Black | #0A0A0A | Background, text |
| Charcoal | #1A1A1A | Secondary background |
| Gold | #D4AF37 | Primary accent, CTAs |
| Soft Gold | #E8C547 | Secondary accent, hover |
| Light Gray | #D3D3D3 | Body text |
| Soft Gold Text | #F0E68C | Lyrical sections |

### Typography

**Serif (Headlines):** Georgia, Garamond, serif  
**Sans-Serif (Body):** Inter, Helvetica, sans-serif  
**Sizes:** 12px (small), 16px (body), 24px (heading), 48px (hero)

### Spacing System

- 4px, 8px, 16px, 24px, 32px, 48px, 64px

### Component Library

**Buttons:**
- Primary (gold background, black text)
- Secondary (gold border, transparent background)
- Hover state (soft gold, scale 1.05)

**Cards:**
- Border: 2px gold
- Background: charcoal
- Padding: 24px
- Hover: shadow effect

**Inputs:**
- Border: 1px gold
- Background: black
- Text: light gray
- Focus: gold outline

## Performance Optimization

### Image Optimization
- Use WebP format with JPG fallback
- Lazy load images below fold
- Responsive images (srcset)
- Compression: 70-85% quality

### Code Splitting
- Separate route bundles
- Lazy load gallery images
- Defer non-critical JavaScript

### Caching
- Browser cache: 1 year for static assets
- CDN cache: 24 hours for dynamic content
- Service worker for offline support

### Metrics Targets
- Lighthouse Performance: >90
- Core Web Vitals: All green
- Time to Interactive: <3s
- Cumulative Layout Shift: <0.1

## Stripe Integration

### Product Setup
1. Create 3 products in Stripe: Standard, Deluxe, Researcher's Complete
2. Set pricing: $19.99, $34.99, $59.99
3. Add metadata: tier, downloads, features
4. Create payment links for each product

### Checkout Flow
1. User selects product tier
2. Click "Purchase Now"
3. Redirect to Stripe checkout
4. Payment processing
5. Webhook triggers fulfillment
6. Email delivery with download links

### Webhook Handling
- Listen for `payment_intent.succeeded`
- Create order record in database
- Generate time-limited download URLs
- Send confirmation email with links

## Database Schema

```sql
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  stripePaymentId VARCHAR(255) UNIQUE,
  userEmail VARCHAR(255),
  productTier ENUM('standard', 'deluxe', 'researchers_complete'),
  amount DECIMAL(10, 2),
  status ENUM('pending', 'completed', 'failed'),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expiresAt TIMESTAMP
);

CREATE TABLE downloads (
  id INT PRIMARY KEY AUTO_INCREMENT,
  orderId INT,
  fileType ENUM('epub', 'pdf', 'diagrams', 'video'),
  downloadUrl VARCHAR(500),
  expiresAt TIMESTAMP,
  FOREIGN KEY (orderId) REFERENCES orders(id)
);
```

## Deployment Checklist

- [ ] All images optimized (WebP, <500KB)
- [ ] Code splitting implemented
- [ ] Lighthouse score >90
- [ ] Core Web Vitals green
- [ ] Stripe keys configured
- [ ] Email service configured
- [ ] Database migrations applied
- [ ] SSL certificate installed
- [ ] CDN configured
- [ ] Analytics tracking enabled
- [ ] 404 page customized
- [ ] Robots.txt and sitemap.xml created
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility tested
- [ ] Accessibility audit passed
