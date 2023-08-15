class ClarifaiImageApiReq {

    static request = (imageUrl) => {

        const PAT = '74c1c733e3c84ff98bffd4cf7c21f666';
        const USER_ID = 'omer908';       
        const APP_ID = 'face-recognition-brain';
        const MODEL_ID = 'general-image-recognition';
        const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    
        const IMAGE_URL = imageUrl;

        const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + PAT
            },
            body: raw
        };

        return fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
            .then(response => response.json())
            .then(result => {
                return result; // Return the parsed JSON data
            })
            .catch(error => {
                throw error; // Rethrow the error to handle it in the calling code
            });
    }
}

export default ClarifaiImageApiReq;