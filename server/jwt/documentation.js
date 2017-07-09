/**
* @api {post} /token Obtener JSON Web Token
* @apiName getToken
* @apiGroup JWT
* @apiVersion 0.1.0
* @apiDescription Su función es entregar la credencial al usuario y dar información sobre su rol.
* @apiSampleRequest http://localhost:80/jwt/token
* @apiPermission ninguno
* @apiParamExample {json} Ejemplo
* { "email": "nicolascabrera@yahoo.com.ar", "password": "123456"}
* @apiParam {String} email E-mail del usuario
* @apiParam {String} password  Contraseña del usuario
* @apiSuccess (Success 200) {String} jwt Contiene el JWT que debería ser almacenado en el cliente.
* @apiSuccess (Success 200) {String} rol El perfil del usuario que puede ser: Administrativo, Alumno, Profesor o Administrador.
* @apiSuccess (Error 404) {String} error Contiene el mensaje de error en caso de no encontrar al usuario.
*/

/**
* @api {post} /permissions Obtener las acciones y perfil del usuario
* @apiName getPermissions
* @apiGroup ACCIONES
* @apiVersion 0.1.0
* @apiDescription Su función es entregar un listado de acciones que le están permitidas al usuario dentro de la aplicación, según su rol.
* @apiSampleRequest http://localhost:80/jwt/permissions
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParamExample {json} Ejemplo de datos validos
*                 { "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOiI0Iiwicm9sIjoiU3R1ZGVudCJ9.ittUMiwCtmpYRIUK5l1HOZ3FlKlHjrMBECAGb0u0PvI" }
* @apiSuccess (Success 200) {Boolean} isValidToken Su valor determina si el jwt es válido o está corrupto.
* @apiSuccess (Success 200) {String} code El perfil del usuario que puede ser: Administrativo, Alumno, Profesor o Administrador.
* @apiSuccess (Success 200) {String[]} permissions La lista de acciones que puede realizar el usuario dentro de la aplicación.
* @apiSuccess (Success 200) {Object} profile Tipo de usuario, nombre de usuario, e-mail.
* @apiError (Error 404) {Boolean} isValidToken Si el JWT ha sido adulterado, el valor de éste campo es 'false'.
* @apiError (Error 404) {String} code No trae datos.
*/

/**
* @api {post} /newsurvey Crear una encuesta
* @apiName newSurvey
* @apiGroup ENCUESTAS
* @apiVersion 0.1.0
* @apiDescription Su función es crear una nueva encuesta.
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Object} survey La encuesta tiene la siguiente estructura: 
* <br>- title: título de la encuesta. 
* <br>- surveyId: ID de la encuesta. 
* <br>- creationDate: Fecha de creación de la encuesta. 
* <br>- endDate: Fecha de finalización. 
* <br>- ownerid: ID del creador de la encuesta. 
* <br>- wasEliminated: Indica si la encuesta fué eliminada. 
* <br>- surveyTypeId: ID según el tipo de encuesta. 
* <br>- question: Es un objeto que representa la pregunta de la encuesta. 
* <br>- options: Es un array de objetos Option, que representan posibles respuestas a la pregunta.
* @apiParamExample {json} Ejemplo de datos validos
* {
*    "survey": {
*        "title": "Titulo de la encuesta",
*        "surveyId": 0,
*        "creationDate": "",
*        "endDate": "2017-07-28",
*        "question": {
*            "questionId": 0,
*            "text": "¿Pregunta de la encuesta?",
*            "surveyId": 0,
*            "options": [
*                {
*                    "optionId": 0,
*                    "text": "A",
*                    "isRight": true,
*                    "questionId": 0
*                },
*                {
*                    "optionId": 0,
*                    "text": "B",
*                    "isRight": false,
*                    "questionId": 0
*                }
*            ]
*        },
*        "ownerid": 0,
*        "wasEliminated": false,
*        "surveyTypeId": 2
*    },
*    "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOjIsInJvbCI6IlRlYWNoZXIifQ.4OS6r4Zf39OUJYlWA9KlTytNWjyU299m3cyXptnwzko"
*}
* @apiSuccess (Success 200) {Boolean} isValidToken Su valor determina si el jwt es válido o está corrupto.
* @apiSuccess (Success 200) {String} code El perfil del usuario que puede ser: Administrativo, Alumno, Profesor o Administrador.
* @apiError (Error 404) {Boolean} isValidToken Si el JWT ha sido adulterado, el valor de éste campo es 'false'.
* @apiError (Error 404) {String} code No trae datos.
* @apiError (Error 404) {String} error Mensaje que informa sobre un error no referido a la validación del jwt.
* @apiSuccessExample {json} Ejemplo de Success-Response 200
* { 
*    "isValidToken":true,
*    "code":"Teacher"
* }
* @apiErrorExample {json} Ejemplo de Error-Response 404
* { 
*    "isValidToken":false,
*    "code":""
* }
* @apiErrorExample {json} Ejemplo de Error-Response 404
* { 
*    "isValidToken":true,
*    "code":"Administrative",
*    "error": "No se pudo guardar la encuesta"
* }
*/

/**
* @api {post} /modifysurvey Modificar una encuesta
* @apiName modifySurvey
* @apiGroup ENCUESTAS
* @apiVersion 0.1.0
* @apiDescription Su función es modificar una encuesta.
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Object} survey La estructura de éste objeto se encuentra detallada en '/newsurvey'
* @apiSuccessExample {json} Ejemplo de Success-Response 200
* { 
*    "isValidToken":true,
*    "code":"Teacher"
* }
* @apiErrorExample {json} Ejemplo de Error-Response 404
* { 
*    "isValidToken":false,
*    "code":""
* }
* @apiErrorExample {json} Ejemplo de Error-Response 404
* { 
*    "isValidToken":true,
*    "code":"Administrative",
*    "error": "No se pudo modificar la encuesta"
* }
*/

/**
* @api {post} /getsurveyslist Traer la lista de encuestas
* @apiName getSurveysList
* @apiGroup ENCUESTAS
* @apiVersion 0.1.0
* @apiDescription Trae el listado de encuestas.
* @apiSampleRequest http://localhost:80/jwt/getsurveyslist
*/


/**
* @api {post} /statisticsforsurveytypefreeanswer Trae datos estadisticos 1
* @apiName statisticsForSurveyTypeFreeAnswer
* @apiGroup ESTADISTICAS
* @apiVersion 0.1.0
* @apiDescription Obtiene las respuestas de los usuarios según el ID de la encuesta.<br>Se utiliza sobre encuestas con preguntas que fueron respondidas por medio de un textfield.
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Number} surveyid ID de una encuesta existente
* @apiParamExample {json} Ejemplo de datos validos
* {
*     "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOiI0Iiwicm9sIjoiU3R1ZGVudCJ9.ittUMiwCtmpYRIUK5l1HOZ3FlKlHjrMBECAGb0u0PvI",
*     "surveyid": "62"
* }
* @apiSampleRequest http://localhost:80/jwt/statisticsforsurveytypefreeanswer
*/

/**
* @api {post} /newuser Crear usuarios
* @apiName newUser
* @apiGroup USUARIOS
* @apiVersion 0.1.0
* @apiDescription Su función es crear un nuevo usuario.
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Object} user El usuario tiene la siguiente estructura: 
* <br>- username: nick del usuario. 
* <br>- email: correo electrónico del usuario. 
* <br>- password: contraseña del nuevo usuario. 
* <br>- rol: Administrador, Alumno, Administrativo o Profesor. 
* <br>- firstname: nombre del usuario. 
* <br>- lastname: apellido del usuario. 
* <br>- street: calle. 
* <br>- number: altura. 
* <br>- city: localidad. 
* <br>- floor: piso. 
* <br>- department: departamento. 
* <br>- clarification: aclaración.
* @apiParamExample {json} Ejemplo de datos validos
* {
*     "user": {
*         "username": "Nombre de usuario",
*         "email": "email@email.com",
*         "password": "123456",
*         "rol": "Student",
*         "firstname": "Nombre",
*         "lastname": "Apellido",
*         "filenumber": "555555",
*         "street": "Calle",
*         "number": "121",
*         "city": "Localidad",
*         "floor": "3",
*         "department": "A",
*         "clarification": "Aclaración"
*     },
*     "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOjMsInJvbCI6IkFkbWluaXN0cmF0aXZlIn0.KYofapbmBFAFzpI07ro6vRCbVRH1ikJt_uYlo09-XTc"
* }
* @apiSuccess (Success 200) {Boolean} isValidToken Su valor determina si el jwt es válido o está corrupto.
* @apiSuccess (Success 200) {String} code El perfil del usuario que puede ser: Administrativo, Alumno, Profesor o Administrador.
* @apiError (Error 404) {Boolean} isValidToken Si el JWT ha sido adulterado, el valor de éste campo es 'false'.
* @apiError (Error 404) {String} code No trae datos.
* @apiError (Error 404) {String} error Mensaje que informa sobre un error no referido a la validación del jwt.
* @apiSuccessExample {json} Ejemplo de Success-Response 200
* { 
*    "isValidToken":true,
*    "code":"Teacher"
* }
* @apiErrorExample {json} Ejemplo de Error-Response 404
* { 
*    "isValidToken":false,
*    "code":""
* }
* @apiErrorExample {json} Ejemplo de Error-Response 404
* { 
*    "isValidToken":true,
*    "code":"Administrative",
*    "error": "No se pudo guardar la encuesta"
* }
*/