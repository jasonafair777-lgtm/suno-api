---
name: advanced-master-skill
description: A comprehensive skill for end-to-end content creation and monetization, integrating research, writing, KDP formatting, Gumroad, Stripe, marketing and ad optimization, visuals, video, audio review, connector scanning, and API routing. This skill incorporates evolution.ai and predictive.ai principles for enhanced performance. Use this skill for generating, optimizing, and publishing digital content across various platforms.
---

# Advanced Master Skill

This skill provides a holistic framework for digital content creation, optimization, and monetization. It is designed to streamline workflows from initial research to final publication and marketing, leveraging advanced AI principles for superior results.

## Core Capabilities

This skill encompasses the following key areas:

-   **Research & Writing**: Comprehensive content generation, fact-checking, and multi-chapter article creation.
-   **KDP Formatting**: Guidance and workflows for Kindle Direct Publishing (KDP) formatting to ensure professional book presentation.
-   **E-commerce Integration**: Workflows for Gumroad and Stripe to facilitate product sales and payment processing.
-   **Marketing & Ad Optimization**: Strategies and logic for marketing campaigns and advertising optimization.
-   **Visuals & Media**: Generation and editing of images, videos, and audio content.
-   **Connector Management**: Logic for scanning and enabling/disabling connectors to external services.
-   **API Routing**: Rules for selecting and routing API keys for various integrations.

## Principles of Operation

This skill operates on the principles of `evolution.ai` and `predictive.ai` to continuously learn, adapt, and optimize its performance. This includes:

-   **Evolutionary Optimization**: Iterative refinement of content and strategies based on performance data.
-   **Predictive Analytics**: Forecasting trends and user behavior to inform content creation and marketing efforts.

## Usage Guidelines

To effectively utilize this skill, follow these guidelines:

### Connector Scanning and API Routing

-   **Connector Scanning Logic**: Before initiating tasks that require external services, the skill will automatically scan for available connectors. Refer to `references/connectors.md` for details on how connectors are managed and enabled.
-   **API-Key Selection Rules**: The skill employs intelligent routing to select the most appropriate API key for a given task. Consult `references/api-map.md` for a comprehensive overview of API routing and selection criteria.

### Content Creation and Publishing

-   **KDP Formatting**: For publishing on Amazon Kindle Direct Publishing, refer to `references/kdp-formatting.md` for detailed instructions and best practices.
-   **Gumroad & Stripe Workflows**: For e-commerce and payment processing, the skill integrates with Gumroad and Stripe. Detailed workflows can be found in `references/gumroad.md` and `references/stripe.md` respectively.

### Marketing and Financial Management

-   **Marketing Optimization Logic**: For marketing campaigns and ad optimization, refer to `references/marketing.md` for strategies and implementation details.
-   **Financial Modeling Support**: For financial analysis and modeling, consult `references/finance.md`.

## Bundled Resources

This skill includes the following reference files:

-   `references/connectors.md`: Details on connector scanning and management.
-   `references/api-map.md`: Information on API key selection and routing.
-   `references/kdp-formatting.md`: KDP formatting guidelines.
-   `references/gumroad.md`: Gumroad integration workflows.
-   `references/stripe.md`: Stripe integration workflows.
-   `references/marketing.md`: Marketing and ad optimization strategies.
-   `references/finance.md`: Financial modeling support.

These resources are loaded as needed to keep the context window efficient. Always refer to these documents for specific procedural knowledge and domain expertise.

This skill includes example resource directories that demonstrate how to organize different types of bundled resources:

### scripts/
Executable code (Python/Bash/etc.) that can be run directly to perform specific operations.

**Examples from other skills:**
- PDF skill: `fill_fillable_fields.py`, `extract_form_field_info.py` - utilities for PDF manipulation
- DOCX skill: `document.py`, `utilities.py` - Python modules for document processing

**Appropriate for:** Python scripts, shell scripts, or any executable code that performs automation, data processing, or specific operations.

**Note:** Scripts may be executed without loading into context, but can still be read by Manus for patching or environment adjustments.

### references/
Documentation and reference material intended to be loaded into context to inform Manus's process and thinking.

**Examples from other skills:**
- Product management: `communication.md`, `context_building.md` - detailed workflow guides
- BigQuery: API reference documentation and query examples
- Finance: Schema documentation, company policies

**Appropriate for:** In-depth documentation, API references, database schemas, comprehensive guides, or any detailed information that Manus should reference while working.

### templates/
Files not intended to be loaded into context, but rather used within the output Manus produces.

**Examples from other skills:**
- Brand styling: PowerPoint template files (.pptx), logo files
- Frontend builder: HTML/React boilerplate project directories
- Typography: Font files (.ttf, .woff2)

**Appropriate for:** Templates, boilerplate code, document templates, images, icons, fonts, or any files meant to be copied or used in the final output.

---

**Any unneeded directories can be deleted.** Not every skill requires all three types of resources.
