# Multi-Platform Publishing Workflow

## Amazon KDP (Kindle Direct Publishing)

### Print-Ready PDF Preparation

**Specifications:**
- Trim size: 6x9 inches (standard trade paperback)
- Resolution: 300 DPI minimum
- Color space: CMYK (for color) or Grayscale
- Bleed: 0.125 inches on all sides
- Margins: 0.5 inches minimum
- Font embedding: All fonts must be embedded

**File Format:**
- PDF/X-1a or PDF/X-4 (print-safe)
- Single PDF file (not multiple files)
- No security restrictions

**Content Requirements:**
- Front matter: Title page, copyright, table of contents
- Body: Main manuscript text
- Back matter: Author bio, acknowledgments, index
- Page numbers: All pages numbered
- Headers/footers: Consistent throughout

**Metadata:**
- Title: Exact title matching cover
- Author: Jason Andrew Fair
- ISBN: Obtain from KDP or use their free ISBN
- Language: English
- Category: Science, Botany, Cannabis Studies
- Keywords: 7 keywords maximum

### Kindle eBook (EPUB) Preparation

**Specifications:**
- Format: EPUB 3.0
- Resolution: 72 DPI (screen resolution)
- Color space: RGB
- Font: Embed custom fonts or use system fonts
- Images: Inline or referenced

**File Structure:**
- EPUB file (ZIP archive with specific structure)
- Content.opf (metadata)
- toc.ncx (table of contents)
- XHTML files (content chapters)
- CSS (styling)
- Images folder (all images)

**Content Requirements:**
- Proper heading hierarchy (H1, H2, H3)
- Semantic markup (not just formatting)
- No page breaks (reflowable text)
- Responsive images
- Proper chapter breaks

**Metadata:**
- Title, author, language
- ISBN (if available)
- Publication date
- Description (2000 characters max)
- Keywords (7 maximum)

### KDP Upload Process

1. Create KDP account (kdp.amazon.com)
2. Create new title (paperback + ebook)
3. Enter book details (title, author, description)
4. Upload print PDF
5. Upload EPUB file
6. Set pricing ($9.99-$19.99 recommended)
7. Select distribution channels
8. Review and publish
9. Wait 24-48 hours for approval

### KDP Optimization

**Title:** Include keywords (e.g., "Phytoacoustic Flux: The Science of Plant Vibration")  
**Description:** 2000 characters, include keywords, compelling hook  
**Keywords:** Research, botany, cannabis, science, plants, bioacoustics, consciousness  
**Category:** Science > Botany, Science > Plant Science  
**Price:** $14.99-$19.99 (balances affordability and perception of value)

## Gumroad Publishing

### Product Setup

**Product Information:**
- Title: "Phytoacoustic Flux: Complete Edition"
- Description: 500-1000 characters, compelling and detailed
- Price: $19.99 (Standard), $34.99 (Deluxe), $59.99 (Researcher's)
- Product type: Digital product
- License: Choose appropriate license (personal use, commercial, etc.)

### Product Tiers

**Standard Edition ($19.99):**
- EPUB file (for e-readers)
- PDF file (for printing/reading)
- High-res book cover image
- Delivery: Immediate download

**Deluxe Edition ($34.99):**
- Everything in Standard
- All 4 scientific diagrams (high-res PNG)
- Presentation slides (PDF)
- Author bio and press kit
- Delivery: Immediate download

**Researcher's Complete Set ($59.99):**
- Everything in Deluxe
- Manuscript source (DOCX format)
- Research citations database (spreadsheet)
- Cinematic video teaser (MP4)
- Exclusive research updates (email list)
- Delivery: Immediate + email updates

### Gumroad Upload Process

1. Create Gumroad account (gumroad.com)
2. Create new product
3. Enter product details and description
4. Upload product files
5. Set pricing and tier structure
6. Configure email delivery (optional)
7. Set up license terms
8. Publish product
9. Share product link

### Gumroad Optimization

**Description Template:**
"Phytoacoustic Flux: [Tier Name]

Experience the groundbreaking science of plant vibration, chemistry, and consciousness through this premium publication by Jason Andrew Fair.

This edition includes:
- [Feature 1]
- [Feature 2]
- [Feature 3]

Perfect for: [Target audience]

Includes: [File types and quantities]"

**Tags:** Research, Science, Botany, Cannabis, Consciousness, Bioacoustics, Plants

## Stripe Payment Processing

### Account Setup

1. Create Stripe account (stripe.com)
2. Verify business information
3. Set up bank account for payouts
4. Configure payment settings
5. Enable email receipts

### Product Configuration

1. Create products in Stripe Dashboard
2. Set prices for each tier
3. Add metadata (tier, features, downloads)
4. Create payment links or embed checkout

### Webhook Configuration

**Webhook URL:** Your website's `/api/webhooks/stripe`

**Events to listen for:**
- `payment_intent.succeeded` - Payment successful
- `charge.refunded` - Refund processed
- `customer.subscription.updated` - Subscription changed

**Webhook Handler:**
1. Verify webhook signature
2. Extract order information
3. Create order record
4. Generate download URLs
5. Send confirmation email
6. Log transaction

## Email Delivery System

### Automated Email Workflow

**Trigger:** Payment successful

**Email 1: Order Confirmation (immediate)**
- Thank you message
- Order details (amount, tier, date)
- Download links (with expiration time)
- Support contact information

**Email 2: Download Reminder (24 hours)**
- Reminder to download files
- Direct download links
- Expiration warning

**Email 3: Follow-up (7 days)**
- Request for feedback/review
- Link to leave review
- Offer for future releases
- Exclusive subscriber content

### Email Template

```
Subject: Your Phytoacoustic Flux Purchase - Download Your Files

Dear [Customer Name],

Thank you for purchasing Phytoacoustic Flux: [Tier Name]!

Your download links are ready:

[Product Files with direct links]

⏰ Important: These links expire in 7 days. Download now to ensure you have access.

Questions? Contact us at [support email]

Best regards,
Jason Andrew Fair
```

## Distribution Timeline

| Platform | Submission Date | Approval Time | Launch Date |
|----------|-----------------|---------------|-------------|
| Amazon KDP | Day 1 | 24-48 hours | Day 3-4 |
| Gumroad | Day 1 | Immediate | Day 1 |
| Stripe | Day 1 | Immediate | Day 1 |
| Apple Books | Day 5 | 1-2 weeks | Day 12-19 |
| Google Play | Day 5 | 1-2 weeks | Day 12-19 |

## Post-Launch Optimization

**Week 1:**
- Monitor sales and conversion rates
- Respond to customer inquiries
- Collect feedback and reviews
- Fix any technical issues

**Week 2-4:**
- Optimize product descriptions based on feedback
- Launch marketing campaign
- Gather testimonials
- Plan next release

**Month 2+:**
- Track sales trends
- Update pricing if needed
- Plan sequel or companion products
- Build email list for future launches
