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
* @api {post} /eliminatesurvey Eliminar una encuesta
* @apiName eliminateSurvey
* @apiGroup ENCUESTAS
* @apiVersion 0.1.0
* @apiDescription Su función es eliminar una encuesta
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Number} surveyid ID de la encuesta a eliminar
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
*    "error": "No se pudo eliminar la encuesta"
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
* @api {post} /getsurveybyid Traer una encuesta
* @apiName getSurveyById
* @apiGroup ENCUESTAS
* @apiVersion 0.1.0
* @apiDescription Trae una encuesta por su ID.
* @apiParam {Number} surveyid ID de la encuesta
* @apiSampleRequest http://localhost:80/jwt/getsurveybyid
*/

/**
* @api {post} /saveanswer Registrar una respuesta
* @apiName saveAnswer
* @apiGroup ENCUESTAS
* @apiVersion 0.1.0
* @apiDescription Su función es guardar una respuesta.
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Object} answer La respuesta tiene la siguiente estructura: 
* <br>- answerId: ID de la respuesta. 
* <br>- text: En caso de responder con un textarea, el valor se almacena en éste campo. 
* <br>- userId: ID del usuario que responde. 
* <br>- optionIds: Array de IDs de las respuestas predefinidas, cuando se responde mediante checkboxes o radiobuttons. 
* <br>- questionId: ID de la pregunta. 
* <br>- surveyId: ID de la encuesta. 
* <br>- chooseNothing: Booleano que debe ser seteado en 'true' en el caso que el usuario no haya seleccionado ninguna respuesta. 
* @apiParamExample {json} Ejemplo de datos validos
* {"answer":
* 	{"answerId":-1,
* 	 "text":"",
* 	 "userId":-1,
* 	 "optionIds":
* 	 [65,66,67],
* 	 "questionId":67,
* 	 "surveyId":65,
* 	 "chooseNothing":false
* 	 },
*  "jwt":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOjQsInJvbCI6IlN0dWRlbnQifQ.8-AOeHe8lKHUkeyzT4_pEgvq7JM-V76I3r9UFkYn8dg"
* }
*/

/**
* @api {post} /statisticsforsurveytypefreeanswer Encuestas Tipo 1
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
* @api {post} /getAssist Faltas y asistencias
* @apiName getAssist
* @apiGroup ESTADISTICAS
* @apiVersion 0.1.0
* @apiDescription Obtiene las faltas y asistencias de un alumno, segun una asignatura seleccionada
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Number} classid ID de una clase
* @apiParamExample {json} Ejemplo de datos validos
* {
*     "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOiI0Iiwicm9sIjoiU3R1ZGVudCJ9.ittUMiwCtmpYRIUK5l1HOZ3FlKlHjrMBECAGb0u0PvI",
*     "classid": "1"
* }
* @apiSuccessExample {json} Ejemplo de Success-Response 200
* { 
*    "present": "5",
*    "absent":"1"
* }
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
*    "error": "No se pudo guardar el usuario"
* }
*/

/**
* @api {post} /studentslistbydivisionandsubject Alumnos por división y materia
* @apiName subjectsListByDivisionId
* @apiGroup ASISTENCIA
* @apiVersion 0.1.0
* @apiDescription Obtiene los alumnos por división y materia
* @apiSampleRequest http://localhost:80/jwt/studentslistbydivisionandsubject
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Number} divisionid ID de una división
* @apiParam {Number} subjectid ID de una materia
* @apiParamExample {json} Ejemplo de datos validos
* {
*     "divisionid":"1",
*     "subjectid":"4",
*     "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOjMsInJvbCI6IkFkbWluaXN0cmF0aXZlIn0.KYofapbmBFAFzpI07ro6vRCbVRH1ikJt_uYlo09-XTc"
* }
*/

/**
* @api {post} /saveattendancelist Tomar lista
* @apiName subjectsListByDivisionId
* @apiGroup ASISTENCIA
* @apiVersion 0.1.0
* @apiDescription Guarda la lista de asistencia
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Object} attendancelist Lista de asistencia
* @apiParamExample {json} Ejemplo de datos validos
*{"jwt":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdHRlbmRhbmNlLWxpc3QiLCJhdWQiOiJodHRwOlwvXC9leGFtcGxlLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJ1aWQiOjMsInJvbCI6IkFkbWluaXN0cmF0aXZlIn0.KYofapbmBFAFzpI07ro6vRCbVRH1ikJt_uYlo09-XTc",
* "attendancelist":
*        {"attendancelistid":-1,
*         "classid":1,
*         "creationdate":"",
*         "ownerid":-1,
*         "attendancelistitems":
*              [
*               {
*                "attendancelistitemid":-1,
*                "studentid":12,"present":true
*               },
*               {
*                "attendancelistitemid":-1,
*                "studentid":4,
*               "present":false}
*              ]
*          }
*}
*
*/

/**
* @api {post} /divisionslist Obtener las divisiones
* @apiName getDivisionsList
* @apiGroup MISCELANEAS
* @apiVersion 0.1.0
* @apiDescription Traer una lista de divisiones existentes.
* @apiSampleRequest http://localhost:80/jwt/divisionslist
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
*/

/**
* @api {post} /getsubjectslist Obtener las materias
* @apiName getSubjectsList
* @apiGroup MISCELANEAS
* @apiVersion 0.1.0
* @apiDescription Traer una lista de materias existentes.
* @apiSampleRequest http://localhost:80/jwt/getsubjectslist
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
*/

/**
* @api {post} /subjectslistbydivisionid Obtener las materias de una división
* @apiName subjectsListByDivisionId
* @apiGroup MISCELANEAS
* @apiVersion 0.1.0
* @apiDescription Traer una lista de asignaturas pertenecientes a una división.
* @apiSampleRequest http://localhost:80/jwt/subjectslistbydivisionid
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Number} divisionid ID de una división
*/

/**
* @api {post} /divisionslistbysubjectid Obtener las divisiones donde se dicta una materia
* @apiName divisionsListBySubjectId
* @apiGroup MISCELANEAS
* @apiVersion 0.1.0
* @apiDescription Traer una lista de divisiones en donde se dicta una materia.
* @apiSuccessExample {json} Ejemplo de Success-Response 200
* {
*     "divisions": [
*         {
*             "divisionid": 1,
*             "name": "1 A"
*         },
*         {
*             "divisionid": 2,
*             "name": "1 B"
*         },
*         {
*             "divisionid": 3,
*             "name": "1 C"
*         }
*     ]
* }
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Number} subjectid ID de una materia
*/

/**
* @api {post} /subjectslistbydivisionid Obtener las materias de una división
* @apiName subjectsListByDivisionId
* @apiGroup MISCELANEAS
* @apiVersion 0.1.0
* @apiDescription Traer una lista de asignaturas pertenecientes a una división.
* @apiSampleRequest http://localhost:80/jwt/subjectslistbydivisionid
* @apiPermission jwt
* @apiParam {String} jwt Credencial del usuario
* @apiParam {Number} divisionid ID de una división
*/


