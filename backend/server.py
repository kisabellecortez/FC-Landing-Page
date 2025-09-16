from  flask import Flask, jsonify
import boto3
import os

from flask_cors import CORS
app = Flask(__name__)
CORS(app)

BUCKET_NAME = "fashion-for-change"

@app.route("/")
def home():
    return "Backend is running!", 200

@app.route("/get-photos", methods=["GET"])

def get_photos():
    try:
        s3 = boto3.client(
            "s3", 
            region_name="us-east-2", 
            aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"), 
            aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY")
        )
        
        response = s3.list_objects_v2(Bucket=BUCKET_NAME)

        urls = []

        for obj in response.get("Contents", []):
            key = obj["Key"]

            url = s3.generate_presigned_url(
                "get_object", 
                Params={"Bucket": BUCKET_NAME, "Key": key}, 
                ExpiresIn = 60,
            )

            urls.append(url)

        return jsonify({"urls": urls})

    except Exception as e:
        print("Error: ", e)
        return jsonify({"error": str(e)}), 500
    
# if __name__ == "__main__": 
#     port = int(os.environ.get("PORT", 4000))
#     app.run(host="0.0.0.0", debug="True")