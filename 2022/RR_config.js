var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022flwp",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Qualifiers<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "IGNORE THIS": {
        "code":"i",
        "title": "Auto Start Position",
        "type":"bool",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Preload": {
        "code":"Preload",
        "title": "Preload?",
        "type":"bool"
      },
      "Tarmac": {
        "code":"Left Tarmac?",
        "title": "Left Tarmac??",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"Upper Cargo Scored",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"Lower Cargo Scored",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Human Player Shooting": {
        "code":"Human Player Shooting?",
        "title": "Human Player Shooting?",
        "type":"bool"
      }
    },
    "teleop": {
      "Cargo Gathered ": {
        "code":"Cargo Gathered",
        "title": "Cargo Gathered",
        "type":"counter"
      },
      "Lower Hub Attempts": {
        "code":"Lower Cargo Attempts",
        "title": "Lower Cargo Attempts",
        "type":"counter"
      },
      "Upper Hub Attempts": {
        "code":"Upper Cargo Attempts",
        "title": "Upper Cargo Attempts",
        "type":"counter"
      },
      "Lower Hub Scored": {
        "code":"Lower Cargo Scored",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Upper Hub Scored": {
        "code":"Upper Cargo Scored",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Launchpad": {
        "code":"Uses Launchpad?",
        "title": "Uses Launchpad?",
        "type":"bool"
      },
      "Cargo Loading": {
        "code":"Pick up Cargo where",
        "title": "Pick up Cargo where",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "IGNORE THIS": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"Bool",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Climb": {
        "code":"Climb",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "f":"Attempted but Failed<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Started Climb before Endgame": {
        "code":"Started Climb before Endgame",
        "title": "Started climb before EndGame",
        "type":"bool"
      },
      "Num of Robots Climbed": {
        "code":"Num of Robots Climbed",
        "title": "# of alliance bots climbed",
        "type":"counter"
      }
    },
    "postmatch": {
      "Defense Rating": {
        "code":"Defense Rating",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Tipped": {
        "code":"Tipped",
        "title": "Tipped Over",
        "type":"bool"
      },
      "Card Foul": {
        "code":"Card Foul",
        "title": "Yellow/Red Card",
        "type":"bool"
      },
      "Comments": {
        "code":"Comments",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      }
    }
  }
}`;
