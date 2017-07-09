define({ "api": [
  {
    "type": "post",
    "url": "/permissions",
    "title": "Obtener las acciones y perfil del usuario",
    "name": "getPermissions",
    "group": "ACCIONES",
    "version": "0.1.0",
    "description": "<p>Su función es entregar un listado de acciones que le están permitidas al usuario dentro de la aplicación, según su rol.</p>",
    "sampleRequest": [
      {
        "url": "http://localhost:80/jwt/permissions"
      }
    ],
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>Credencial del usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de datos validos",
          "content": "{ \"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOiI0Iiwicm9sIjoiU3R1ZGVudCJ9.ittUMiwCtmpYRIUK5l1HOZ3FlKlHjrMBECAGb0u0PvI\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isValidToken",
            "description": "<p>Su valor determina si el jwt es válido o está corrupto.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>El perfil del usuario que puede ser: Administrativo, Alumno, Profesor o Administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "permissions",
            "description": "<p>La lista de acciones que puede realizar el usuario dentro de la aplicación.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>Tipo de usuario, nombre de usuario, e-mail.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Boolean",
            "optional": false,
            "field": "isValidToken",
            "description": "<p>Si el JWT ha sido adulterado, el valor de éste campo es 'false'.</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>No trae datos.</p>"
          }
        ]
      }
    },
    "filename": "server/jwt/documentation.js",
    "groupTitle": "ACCIONES"
  },
  {
    "type": "post",
    "url": "/getsurveyslist",
    "title": "Traer la lista de encuestas",
    "name": "getSurveysList",
    "group": "ENCUESTAS",
    "version": "0.1.0",
    "description": "<p>Trae el listado de encuestas.</p>",
    "sampleRequest": [
      {
        "url": "http://localhost:80/jwt/getsurveyslist"
      }
    ],
    "filename": "server/jwt/documentation.js",
    "groupTitle": "ENCUESTAS"
  },
  {
    "type": "post",
    "url": "/modifysurvey",
    "title": "Modificar una encuesta",
    "name": "modifySurvey",
    "group": "ENCUESTAS",
    "version": "0.1.0",
    "description": "<p>Su función es modificar una encuesta.</p>",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>Credencial del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "survey",
            "description": "<p>La estructura de éste objeto se encuentra detallada en '/newsurvey'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Ejemplo de Success-Response 200",
          "content": "{ \n   \"isValidToken\":true,\n   \"code\":\"Teacher\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Ejemplo de Error-Response 404",
          "content": "{ \n   \"isValidToken\":false,\n   \"code\":\"\"\n}",
          "type": "json"
        },
        {
          "title": "Ejemplo de Error-Response 404",
          "content": "{ \n   \"isValidToken\":true,\n   \"code\":\"Administrative\",\n   \"error\": \"No se pudo modificar la encuesta\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/jwt/documentation.js",
    "groupTitle": "ENCUESTAS"
  },
  {
    "type": "post",
    "url": "/newsurvey",
    "title": "Crear una encuesta",
    "name": "newSurvey",
    "group": "ENCUESTAS",
    "version": "0.1.0",
    "description": "<p>Su función es crear una nueva encuesta.</p>",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>Credencial del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "survey",
            "description": "<p>La encuesta tiene la siguiente estructura: <br>- title: título de la encuesta. <br>- surveyId: ID de la encuesta. <br>- creationDate: Fecha de creación de la encuesta. <br>- endDate: Fecha de finalización. <br>- ownerid: ID del creador de la encuesta. <br>- wasEliminated: Indica si la encuesta fué eliminada. <br>- surveyTypeId: ID según el tipo de encuesta. <br>- question: Es un objeto que representa la pregunta de la encuesta. <br>- options: Es un array de objetos Option, que representan posibles respuestas a la pregunta.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de datos validos",
          "content": "{\n   \"survey\": {\n       \"title\": \"Titulo de la encuesta\",\n       \"surveyId\": 0,\n       \"creationDate\": \"\",\n       \"endDate\": \"2017-07-28\",\n       \"question\": {\n           \"questionId\": 0,\n           \"text\": \"¿Pregunta de la encuesta?\",\n           \"surveyId\": 0,\n           \"options\": [\n               {\n                   \"optionId\": 0,\n                   \"text\": \"A\",\n                   \"isRight\": true,\n                   \"questionId\": 0\n               },\n               {\n                   \"optionId\": 0,\n                   \"text\": \"B\",\n                   \"isRight\": false,\n                   \"questionId\": 0\n               }\n           ]\n       },\n       \"ownerid\": 0,\n       \"wasEliminated\": false,\n       \"surveyTypeId\": 2\n   },\n   \"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOjIsInJvbCI6IlRlYWNoZXIifQ.4OS6r4Zf39OUJYlWA9KlTytNWjyU299m3cyXptnwzko\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isValidToken",
            "description": "<p>Su valor determina si el jwt es válido o está corrupto.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>El perfil del usuario que puede ser: Administrativo, Alumno, Profesor o Administrador.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Success-Response 200",
          "content": "{ \n   \"isValidToken\":true,\n   \"code\":\"Teacher\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Boolean",
            "optional": false,
            "field": "isValidToken",
            "description": "<p>Si el JWT ha sido adulterado, el valor de éste campo es 'false'.</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>No trae datos.</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Mensaje que informa sobre un error no referido a la validación del jwt.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Error-Response 404",
          "content": "{ \n   \"isValidToken\":false,\n   \"code\":\"\"\n}",
          "type": "json"
        },
        {
          "title": "Ejemplo de Error-Response 404",
          "content": "{ \n   \"isValidToken\":true,\n   \"code\":\"Administrative\",\n   \"error\": \"No se pudo guardar la encuesta\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/jwt/documentation.js",
    "groupTitle": "ENCUESTAS"
  },
  {
    "type": "post",
    "url": "/statisticsforsurveytypefreeanswer",
    "title": "Trae datos estadisticos 1",
    "name": "statisticsForSurveyTypeFreeAnswer",
    "group": "ESTADISTICAS",
    "version": "0.1.0",
    "description": "<p>Obtiene las respuestas de los usuarios según el ID de la encuesta.<br>Se utiliza sobre encuestas con preguntas que fueron respondidas por medio de un textfield.</p>",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>Credencial del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "surveyid",
            "description": "<p>ID de una encuesta existente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de datos validos",
          "content": "{\n    \"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOiI0Iiwicm9sIjoiU3R1ZGVudCJ9.ittUMiwCtmpYRIUK5l1HOZ3FlKlHjrMBECAGb0u0PvI\",\n    \"surveyid\": \"62\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:80/jwt/statisticsforsurveytypefreeanswer"
      }
    ],
    "filename": "server/jwt/documentation.js",
    "groupTitle": "ESTADISTICAS"
  },
  {
    "type": "post",
    "url": "/token",
    "title": "Obtener JSON Web Token",
    "name": "getToken",
    "group": "JWT",
    "version": "0.1.0",
    "description": "<p>Su función es entregar la credencial al usuario y dar información sobre su rol.</p>",
    "sampleRequest": [
      {
        "url": "http://localhost:80/jwt/token"
      }
    ],
    "permission": [
      {
        "name": "ninguno"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Ejemplo",
          "content": "{ \"email\": \"nicolascabrera@yahoo.com.ar\", \"password\": \"123456\"}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>Contiene el JWT que debería ser almacenado en el cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rol",
            "description": "<p>El perfil del usuario que puede ser: Administrativo, Alumno, Profesor o Administrador.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Contiene el mensaje de error en caso de no encontrar al usuario.</p>"
          }
        ]
      }
    },
    "filename": "server/jwt/documentation.js",
    "groupTitle": "JWT"
  },
  {
    "type": "post",
    "url": "/newuser",
    "title": "Crear usuarios",
    "name": "newUser",
    "group": "USUARIOS",
    "version": "0.1.0",
    "description": "<p>Su función es crear un nuevo usuario.</p>",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>Credencial del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>El usuario tiene la siguiente estructura: <br>- username: nick del usuario. <br>- email: correo electrónico del usuario. <br>- password: contraseña del nuevo usuario. <br>- rol: Administrador, Alumno, Administrativo o Profesor. <br>- firstname: nombre del usuario. <br>- lastname: apellido del usuario. <br>- street: calle. <br>- number: altura. <br>- city: localidad. <br>- floor: piso. <br>- department: departamento. <br>- clarification: aclaración.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de datos validos",
          "content": "{\n    \"user\": {\n        \"username\": \"Nombre de usuario\",\n        \"email\": \"email@email.com\",\n        \"password\": \"123456\",\n        \"rol\": \"Student\",\n        \"firstname\": \"Nombre\",\n        \"lastname\": \"Apellido\",\n        \"filenumber\": \"555555\",\n        \"street\": \"Calle\",\n        \"number\": \"121\",\n        \"city\": \"Localidad\",\n        \"floor\": \"3\",\n        \"department\": \"A\",\n        \"clarification\": \"Aclaración\"\n    },\n    \"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOjMsInJvbCI6IkFkbWluaXN0cmF0aXZlIn0.KYofapbmBFAFzpI07ro6vRCbVRH1ikJt_uYlo09-XTc\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isValidToken",
            "description": "<p>Su valor determina si el jwt es válido o está corrupto.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>El perfil del usuario que puede ser: Administrativo, Alumno, Profesor o Administrador.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Success-Response 200",
          "content": "{ \n   \"isValidToken\":true,\n   \"code\":\"Teacher\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Boolean",
            "optional": false,
            "field": "isValidToken",
            "description": "<p>Si el JWT ha sido adulterado, el valor de éste campo es 'false'.</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>No trae datos.</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Mensaje que informa sobre un error no referido a la validación del jwt.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Error-Response 404",
          "content": "{ \n   \"isValidToken\":false,\n   \"code\":\"\"\n}",
          "type": "json"
        },
        {
          "title": "Ejemplo de Error-Response 404",
          "content": "{ \n   \"isValidToken\":true,\n   \"code\":\"Administrative\",\n   \"error\": \"No se pudo guardar la encuesta\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/jwt/documentation.js",
    "groupTitle": "USUARIOS"
  }
] });
