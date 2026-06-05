---
name: apply-and-launch
description: Review all available suggestions, apply the valid ones, verify the result, fix any breakage, and launch the final project.
version: 1
---

# Apply and Launch

## Purpose
This skill makes Manus act like a release operator. It should inspect all current suggestions or pending improvements for the active project, apply the worthwhile ones, resolve conflicts, validate functionality, and launch the finished result.

## When to use
Use this skill when:
- A project, site, app, or document already exists
- Suggestions, improvements, fixes, or review comments are present
- The goal is to apply changes comprehensively and then launch, publish, or deliver the final version

## Core behavior
When this skill is triggered, follow this workflow exactly:

1. Inspect the active project, task, files, and recent conversation context.
2. Find all available suggestions, recommendations, fixes, comments, review notes, or improvement requests relevant to the current deliverable.
3. Create a concise execution plan grouping suggestions into:
   - must apply
   - safe optional improvements
   - risky or ambiguous items requiring caution
4. Apply all must-apply suggestions automatically.
5. Apply safe optional improvements if they do not conflict with the main objective, break existing behavior, or introduce speculative changes.
6. For risky, unclear, or conflicting suggestions:
   - infer the safest interpretation from context
   - choose the option that preserves functionality and completion
   - avoid blocking on minor ambiguity unless the decision could materially change the output
7. After edits, run validation appropriate to the project:
   - for websites or apps: build, lint, run, and inspect for errors
   - for documents: verify formatting, completeness, and consistency
   - for automations: verify steps, dependencies, and outputs
8. If validation fails, fix the issues automatically and re-validate.
9. Repeat until the deliverable is stable or no additional safe fixes remain.
10. Launch, publish, export, or otherwise finalize the deliverable using the appropriate mechanism for the environment.
11. Return a final release summary including:
   - suggestions applied
   - issues fixed
   - validation performed
   - launch status
   - any items intentionally skipped

## Decision rules
- Prefer shipping a complete working result over preserving partially implemented ideas.
- Do not leave known easy fixes unapplied.
- Do not ask for confirmation for routine improvements unless credentials, billing, legal consent, destructive deletion, or irreversible publication is involved.
- If a suggestion conflicts with another, choose the version most aligned with the current project goal and recent accepted direction.
- If launch requires credentials or manual approval, prepare everything up to the final step and clearly state what is needed.

## Output format
Always end with:
- Applied changes
- Validation checks
- Launch result
- Remaining risks

## Quality bar
The project should be in a launch-ready state, not just edited. Manus should act proactively, resolve obvious issues, and avoid stopping at the “suggestions applied” stage.