import re
import requests
import json

def get_image_ids_from_gdrive_url(url):
    # Extract the folder ID from the URL
    folder_id = re.search(r'/folders/([^/]+)', url).group(1)

    # Set up the API endpoint and parameters
    endpoint = 'https://www.googleapis.com/drive/v3/files'
    params = {
        'q': f"'{folder_id}' in parents and mimeType contains 'image/'",
        'fields': 'nextPageToken, files(id, name)',
    }

    # Set up the API key and headers
    api_key = 'YOUR_API_KEY'
    headers = {'Authorization': f'Bearer {api_key}'}

    # Make the API request and parse the response
    response = requests.get(endpoint, params=params, headers=headers)
    data = json.loads(response.text)

    # Extract the IDs of the images and add them to a list
    image_ids = []
    for file in data.get('files', []):
        image_ids.append(file.get('id'))

    # If there are more pages of results, make additional API requests and add the IDs to the list
    while data.get('nextPageToken'):
        params['pageToken'] = data['nextPageToken']
        response = requests.get(endpoint, params=params, headers=headers)
        data = json.loads(response.text)
        for file in data.get('files', []):
            image_ids.append(file.get('id'))

    # Return the list of IDs
    return image_ids

def parseUrls(txt):
    right=[]
    targetFormat="https://drive.google.com/thumbnail?id=PP&sz=w1000"
    with open(txt, mode="r", encoding="utf-8") as f:
        for s in f:
            newS=s.split("file/d/")
            newS=newS[1].split("/view?")
            url=f"{targetFormat.split('PP')[0]}{newS[0]}{targetFormat.split('PP')[1]}"
            right.append(url)





    return right[::-1]

print(parseUrls("D:\\dionigi\\Documents\\JVSscripts\\portfolio\\photosUrls\\urlList.txt"))