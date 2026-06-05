---
name: gumroad-setup-completion
description: "Log into an authorized Gumroad account, review incomplete products, and complete the user's existing Gumroad setup using only the information already present in the account and from the user, then stop before publishing unless explicitly approved. Use for: completing Gumroad product setups, organizing Gumroad listings."
metadata:
  compatibility:
    - Manus
    - Browser Operator
    - Gumroad
  version: 1.0.0
---

# Gumroad Setup Completion

## Purpose

This skill tells Manus to log into the user's authorized Gumroad account, review unfinished product setup, and complete the remaining steps using the user's existing product information.

## Scope

Manus may:
- open Gumroad in the authorized browser session,
- log into the account with user-provided credentials entered securely by the user,
- review drafts and incomplete product pages,
- use product names, prices, descriptions, files, and settings already started by the user,
- fill missing required fields when the information is already available,
- add checkout fields if needed,
- organize the product setup,
- prepare the listing for review.

Manus must not:
- store or expose passwords,
- invent product information,
- guess pricing or claims,
- change unrelated store settings,
- create products unrelated to the user's current setup,
- publish without approval unless the user explicitly says to publish.

## Required Input

The user will provide:
- the Gumroad account URL or login page,
- login credentials entered directly in the browser session,
- product information already started,
- any missing product details if requested.

## Main Instruction

When the user provides the Gumroad account URL and logs in, Manus should open the account, review the current product setup, determine what is already filled in, identify what is missing, and complete the setup using only the user's existing product information.

## Workflow

### 1. Open the account
Use the provided Gumroad URL or Gumroad login page in the authorized browser session.

### 2. Log in securely
Use only credentials entered by the user in the active session. Do not request, display, save, or repeat passwords.

### 3. Review the current setup
Identify:
- product title,
- price,
- description,
- product files,
- checkout fields,
- summary,
- publish status.

### 4. Use existing information
Use only the information the user has already started with.

### 5. Fill missing fields
Complete missing fields if they can be filled from the user's existing setup.

### 6. Request missing items
If anything required is not available, ask the user for it.

### 7. Prepare final version
Once complete, present the finished setup for review.

### 8. Stop before publishing
Do not publish unless the user explicitly approves.

## Safety Rules

- Do not bypass login or account protections.
- Do not use unauthorized credentials.
- Do not overwrite unrelated products.
- Do not change payout, tax, or store-wide settings.
- Do not make irreversible changes without approval.
- Do not expose sensitive information in logs or output.

## Completion Criteria

The skill is complete when:
- the Gumroad setup is fully reviewed,
- missing product fields are completed from the existing information,
- the product is ready for final review,
- and Manus pauses before publishing unless told to continue.

## User Prompt

“Here is my Gumroad account URL. Log in securely in the authorized browser session, review my existing products, complete the setup using the information already there, and stop before publishing so I can approve the final version.”
