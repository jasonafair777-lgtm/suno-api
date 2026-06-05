# Nominatim API Reference

Nominatim is a tool to search OpenStreetMap data by name and address (geocoding) and to generate addresses from geographic coordinates (reverse geocoding).

## Base URL
`https://nominatim.openstreetmap.org`

## Endpoints

### 1. Search (Forward Geocoding)
Look up a location by name or address.

**Path:** `/search`
**Parameters:**
- `q`: Query string (e.g., "Boston")
- `format`: Output format. Use `jsonv2` for detailed results.
- `addressdetails`: (0 or 1) Include a breakdown of the address into elements.
- `limit`: Maximum number of results to return.

**Example:**
`GET https://nominatim.openstreetmap.org/search?q=Boston&format=jsonv2`

### 2. Reverse Geocoding
Look up an address from a latitude and longitude.

**Path:** `/reverse`
**Parameters:**
- `lat`: Latitude
- `lon`: Longitude
- `format`: Output format (e.g., `jsonv2`)
- `zoom`: Level of detail (0-18). 18 is building level.

**Example:**
`GET https://nominatim.openstreetmap.org/reverse?lat=42.3601&lon=-71.0589&format=jsonv2`

## Usage Policy
- **User-Agent Required:** You must provide a valid User-Agent identifying your application.
- **Rate Limit:** 1 request per second.
- **Attribution:** Must attribute OpenStreetMap.
