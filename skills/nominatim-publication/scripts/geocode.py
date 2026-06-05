import requests
import sys
import json
import time

def geocode(query):
    url = "https://nominatim.openstreetmap.org/search"
    params = {
        "q": query,
        "format": "jsonv2",
        "addressdetails": 1,
        "limit": 1
    }
    headers = {
        "User-Agent": "ManusPublicationSkill/1.0"
    }
    
    try:
        response = requests.get(url, params=params, headers=headers)
        response.raise_for_status()
        data = response.json()
        if data:
            return data[0]
        return None
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        return None

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 geocode.py <query>")
        sys.exit(1)
    
    query = " ".join(sys.argv[1:])
    result = geocode(query)
    if result:
        print(json.dumps(result, indent=2))
    else:
        print("No results found.")
