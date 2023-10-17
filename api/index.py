from flask import Flask
from pathlib import Path
import json
app = Flask(__name__)

# Grabbing current directory
CUR_DIR = Path(__file__).parent.absolute()

# Opening JSON file
# returns JSON object as 
# a dictionary
f = open(CUR_DIR / "data/index/en/light_cones.json")
light_cone_data = json.load(f)
f = open(CUR_DIR / "data/index/en/characters.json")
character_data = json.load(f)

# Closing file
f.close()

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/calculator")
def test_route():
    return "test route"

@app.route("/api/lightcone")
def lightcone():
    return light_cone_data

@app.route("/api/character")
def character():
    return character_data