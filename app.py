from flask import Flask, render_template, request, jsonify
from data import websites

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/search")
def search():
    query = request.args.get("q", "").lower()
    results = []

    for site in websites:
        if query in site["category"] or query in site["name"].lower():
            results.append(site)

    return jsonify(results)

@app.route("/help")
def help_page():
    return render_template("help.html")

if __name__ == "__main__":
    app.run(debug=True)
