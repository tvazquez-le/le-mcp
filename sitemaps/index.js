const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question1",
            "title": "gender",
            "choices": [
              {
                "value": "Item 1",
                "text": "male"
              },
              {
                "value": "Item 2",
                "text": "female"
              }
            ]
          }
        ]
      },
      {
        "name": "page2",
        "title": "page 2",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question2",
            "title": "age range",
            "choices": [
              {
                "value": "Item 1",
                "text": "under24"
              },
              {
                "value": "Item 2",
                "text": "25-34"
              },
              {
                "value": "Item 3",
                "text": "35-49"
              },
              {
                "value": "Item 4",
                "text": "50+"
              }
            ]
          }
        ]
      },
      {
        "name": "page3",
        "title": "Page 3",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question3",
            "title": "primaryConcern",
            "choices": [
              {
                "value": "Item 1",
                "text": "Dry skin"
              },
              {
                "value": "Item 2",
                "text": "Dull skin"
              },
              {
                "value": "Item 3",
                "text": "Oily skin or clogged pores"
              },
              {
                "value": "Item 4",
                "text": `Crow’s feet and smile lines`
              },
              {
                "value": "Item 5",
                "text": "Fine lines and wrinkles"
              },
              {
                "value": "Item 6",
                "text": "Uneven tone or age spots"
              },
              {
                "value": "Item 7",
                "text": "Loss of firmness"
              },
              {
                "value": "Item 8",
                "text": "Maintaining healthy-looking skin"
              },
              {
                "value": "Item 9",
                "text": "Dark circles under eyes"
              },
              {
                "value": "Item 10",
                "text": "Grooming"
              }
            ]
          }
        ]
      },
      {
        "name": "page4",
        "title": "Page 4",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question4",
            "title": "additionalConcern",
            "choicesFromQuestion": "question3",
            "choices": [
              {
                "value": "Item 1",
                "text": "Dry skin"
              },
              {
                "value": "Item 2",
                "text": "Dull skin"
              },
              {
                "value": "Item 3",
                "text": "Oily skin or clogged pores"
              },
              {
                "value": "Item 4",
                "text": "Crow’s feet and smile lines"
              },
              {
                "value": "Item 5",
                "text": "Fine lines and wrinkles"
              },
              {
                "value": "Item 6",
                "text": "Uneven tone or age spots"
              },
              {
                "value": "Item 7",
                "text": "Loss of firmness"
              },
              {
                "value": "Item 8",
                "text": "Maintaining healthy-looking skin"
              },
              {
                "value": "Item 9",
                "text": "Dark circles under eyes"
              },
              {
                "value": "Item 10",
                "text": "Grooming"
              }
            ],
            "choicesFromQuestionMode": "unselected"
          }
        ]
      },
      {
        "name": "page5",
        "title": "Page 5",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question5",
            "title": "multivitamin",
            "choices": [
              {
                "value": "Item 1",
                "text": "yes"
              },
              {
                "value": "Item 2",
                "text": "no"
              },
              "Item 3"
            ]
          }
        ]
      },
      {
        "name": "page6",
        "title": "Page 6",
        "elements": [
          {
            "type": "text",
            "name": "question6",
            "isRequired": true,
            "inputType": "email"
          }
        ]
      }
    ],
    "showProgressBar": true,
    "firstPageIsStartPage": true,
    "headerView": "advanced"
  }

const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
survey.render(document.getElementById("surveyElement"));