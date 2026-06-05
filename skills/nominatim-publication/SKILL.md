---
name: nominatim-publication
description: "Geocoding and location data enrichment for publication workflows. Use for: verifying geographic facts in manuscripts, generating location metadata for articles, and enriching digital publications with precise coordinates or address details using OpenStreetMap data."
---

# Nominatim Publication Skill

This skill integrates Nominatim geocoding into publication workflows to ensure geographic accuracy and enrich content with location-based metadata.

## Core Workflows

### 1. Fact-Checking Geographic Locations
When a manuscript mentions a specific place, use this skill to verify its existence and correct spelling.
- **Action**: Run `scripts/geocode.py` with the place name.
- **Verification**: Check the `display_name` and `type` in the returned JSON to ensure it matches the context of the publication.

### 2. Enriching Metadata for Digital Products
For digital publications (ebooks, interactive articles), add precise coordinates or structured address data.
- **Action**: Use the coordinates (`lat`, `lon`) from the geocoding result to embed map links or metadata.
- **Reference**: See `references/nominatim_api.md` for details on the `addressdetails` parameter to get structured data like city, state, and country.

### 3. Generating Map References
Convert text-based addresses into data suitable for map generation or location-based services.
- **Action**: Extract the bounding box (`boundingbox`) from the geocoding result to define the view area for maps.

## Usage Guidelines

- **Rate Limiting**: Respect the 1 request per second limit. For batch processing, implement a `time.sleep(1)` between calls.
- **Attribution**: Always include the attribution: "Data © OpenStreetMap contributors" in the publication's credits or metadata.
- **User-Agent**: The provided script uses a default User-Agent. If building a custom integration, ensure a descriptive User-Agent is sent.

## Resources

- **Scripts**:
  - `scripts/geocode.py`: A simple CLI tool for forward geocoding.
- **References**:
  - `references/nominatim_api.md`: Detailed API documentation and endpoint descriptions.
