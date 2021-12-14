import flask
import os
import requests
import json
import base64

app = flask.Flask(__name__)

search_history = []


# Bypass school's firewall which blocks certain images' CDN.
def UrlToBase64Img(url):
    response = requests.get(url)
    return base64.b64encode(response.content).decode("utf-8")

# Manual Static Service
@app.route("/")
def index():
    return flask.send_from_directory('./build',"index.html")
@app.route('/<path:path>')
def index_file(path):
    return flask.send_from_directory('./build',"index.html")
@app.route("/static/js/<path:path>")
def staticjs_file(path):
    return flask.send_from_directory('./build/static/js',path)
@app.route("/static/css/<path:path>")
def staticcss_file(path):
    return flask.send_from_directory('./build/static/css',path)
@app.route("/images/<path:path>")
def staticimg_file(path):
    return flask.send_from_directory('./build/images',path)
# Actual API lmao
@app.route('/api/search', methods=['POST'])
def api_test():
    req_data = flask.request
    user_keyword = req_data.get_json()['keyword']
    # Make search request using google's overpriced API ($5 for 1K searches is pretty dogshit but at least they have 100 free search per day right?)
    google_res = requests.get(f"https://www.googleapis.com/customsearch/v1?key={os.getenv('GOOGLE_API','')}&safe=active&q={user_keyword}&cx={os.getenv('GOOGLE_CX','')}&num=8&searchType=image&start=1")
    tmp_data = {}
    tmp_data['data'] = []
    google_res = json.loads(google_res.content.decode("utf-8"))
    # Organize the response into a shorter one
    if(int(google_res['searchInformation']['totalResults']) > 0):
        for i in google_res['items']:
            tmp_data['data'].append({
                "title": i['title'],
                "imgurl": UrlToBase64Img(i['link']), # Convert link to base64 image to render image for client even if their firewall is blocking it
                "contexturl": i['image']['contextLink'],
                "thumbnail": {
                    "url": i['image']['thumbnailLink'],
                    "width": i['image']['thumbnailWidth'],
                    "height": i['image']['thumbnailHeight']
                }
            })
    if(len(search_history) > 10):
        search_history.pop(len(search_history)-1)
        search_history.insert(0,user_keyword)
    else:
        search_history.append(user_keyword)
    tmp_data['history'] = search_history
    response = flask.make_response(json.dumps(tmp_data), 200)
    response.mimetype = 'application/json'
    return response
@app.route('/api/search/history', methods=['GET'])
def api_search_history():
    response = flask.make_response(json.dumps(search_history), 200)
    response.mimetype = 'application/json'
    return response


if __name__ == "__main__":
    print("backend executed")
    print("API INIT KEY: ",os.getenv('GOOGLE_API',''),os.getenv('GOOGLE_CX',''))
    cert = os.getenv('SSL_CERT',None)
    key = os.getenv('SSL_KEY',None)
    if(cert is not None and key is not None): # Use TLS if cert and key are provided in the environment variables
        print("Certificate Detected, initializing TLS Context")
        app.run(host="0.0.0.0", port=443, ssl_context=(cert,key))
    else:
        print("No Certificate is Detected, initializing Plaintext Context")
        app.run(host='0.0.0.0', port=80)

