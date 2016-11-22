#!/usr/bin/env /usr/local/bin/python2

from flask import Flask, render_template, jsonify, make_response, request, current_app
from gevent import monkey
from gevent import wsgi
import app

monkey.patch_all()
app = Flask(__name__, static_folder='build', static_url_path='')

@app.route('/')
def root():
  return app.send_static_file('index.html')
 
@app.route('/peoples', methods=['GET', 'OPTIONS'])
def get_persons():
  return jsonify({
    "status" : "success",
    "output" : [
      {
        "id": "1",
        "name" : "Chintan Kotadia",
        "username" :"chintankotadia13@gmail.com",
        "company" : "ish",
        "company_role" :"html/css coder",
        "phone" :"49874646",
        "notes" :"My notes",
        "mobile" :"9497654654"
      },
      {
        "id": "2",
        "name" : "Marcus Hodgson",
        "username" :"marcus@ish.com",
        "company" : "ish",
        "company_role" :"developer",
        "phone" :"987897544",
        "notes" :"Not available",
        "mobile" :"9797464876"
      },
      {
        "id": "3",
        "name" : "Stephen McIlwaine",
        "username" :"Stephen@ish.com",
        "company" : "ish",
        "company_role" :"java developer",
        "phone" :"5464979646",
        "notes" :"Busy",
        "mobile" :"9797464797"
      },
      {
        "id": "4",
        "name" : "Aristedes Maniatis",
        "username" :"ari@ish.com.au",
        "company" : "ish",
        "company_role" :"developer",
        "phone" :"554879645",
        "notes" :"employees scrum",
        "mobile" :"9849476469"
      }
    ]
  })

@app.route('/data/people/view/<int:id>')
def view_person(id):
  return jsonify(
  {
    "status": "success",
    "output": {
    "people": {
      "id": id,
      "name": "Chintan Kotadia",
      "username":"chintankotadia13@gmail.com",
      "company": "ish",
      "company_role":"html/css coder",
      "phone":"49874646",
      "notes":"My notes",
      "mobile":"9497654654"
    }
    }
  }
  )

@app.route('/data/people/update/<int:id>')
def update_person(id):
  return jsonify(
  {
    "status": "success",
    "output": {
    "message": "People updated successfully",
    "people": {
      "id": "1",
      "name": "Chintan Kotadia",
      "username":"chintankotadia13@gmail.com",
      "company": "ish",
      "company_role":"html/css coder",
      "phone":"49874646",
      "notes":"My notes",
      "mobile":"9497654654"
    }
    }
  }
  )

@app.route('/data/people/delete/<int:id>')
def delete_person(id):
  return jsonify(  { 'status':"success",
    'output':{
    'message':"People deleted successfully"
  }})

@app.route('/data/company/get/<search>')
def search_company(search):
  return jsonify(
  {
    "status": "success",
    "output": {
    "message": "Companies fetched successfully",
    "output": [
      {
      "id": "1",
      "name": "ish"
      },
      {
      "id": "2",
      "name": "weasydney"
      }
    ]
    }
  }
  )



server = wsgi.WSGIServer(('203.29.62.211', 5050), app)
server.serve_forever()
