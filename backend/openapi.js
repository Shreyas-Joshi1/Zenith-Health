export const openapi = {
  "openapi": "3.0.0",
  "info": {
    "title": "Clinic Management System Backend - Syed Waseem",
    "description": "The Clinic Management System's backend, meticulously crafted by Syed Waseem of CodeSurgery Squad, is a robust and sophisticated solution designed to streamline and optimize the operations of healthcare clinics. This comprehensive system comprises two integral modules: the Doctor Module and the Receptionist Module.\n\n1. **Doctor Module:**\n    \n    - _Patient Management:_ Enables doctors to efficiently manage patient records, including medical history, appointments, and treatment plans.\n        \n    - _Appointment Scheduling:_ Facilitates the scheduling of appointments, ensuring a well-organized and timely patient-doctor interaction.\n        \n    - _Prescription Management:_ Allows doctors to manage prescriptions, enhancing accuracy and accessibility of patient medication information.\n        \n    - Patient's report's storage : The storage and management of patient reports are seamlessly integrated, ensuring the secure and efficient handling of crucial medical information.EndFragment  \n        \n2. **Receptionist Module:**\n    \n    - _Appointment Booking:_ Streamlines the process of scheduling appointments, providing an easy-to-use interface for receptionists to manage the clinic's calendar efficiently.\n        \n    - _Patient Registration:_ Simplifies the registration of new patients, capturing essential demographic and contact information.\n        \n    - _Billing and Invoicing:_ Manages financial transactions, including billing patients and generating invoices for services rendered.\n        \n\nIn essence, the Clinic Management System's backend, developed by Syed Waseem and the CodeSurgery Squad, is a cutting-edge solution that empowers healthcare providers to deliver more efficient and patient-centered care.",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://localhost:8000"
    }
  ],
  "tags": [
    {
      "name": "User",
      "description": "The User Folder in the Clinic Management System (CMS) is a centralized repository that houses common backend APIs (Application Programming Interfaces) tailored for both doctor and receptionist."
    },
    {
      "name": "Receptionist",
      "description": "The Receptionist Folder in the Clinic Management System (CMS) is a centralized repository that houses backend APIs (Application Programming Interfaces) tailored for receptionist."
    },
    {
      "name": "Doctor",
      "description": "The Receptionist Folder in the Clinic Management System (CMS) is a centralized repository that houses backend APIs (Application Programming Interfaces) tailored for doctor."
    }
  ],
  "paths": {
    "/api/v1/users/register": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Register User",
        "description": "Registers the user.",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "fullname": {
                    "type": "string",
                    "example": "Dr. Syed Waseem"
                  },
                  "username": {
                    "type": "string",
                    "example": "waseem"
                  },
                  "mobile_no": {
                    "type": "integer",
                    "example": "9764512890"
                  },
                  "role": {
                    "type": "string",
                    "example": "doctor"
                  },
                  "email": {
                    "type": "string",
                    "example": "swaseem@gmail.com"
                  },
                  "password": {
                    "type": "string",
                    "example": "sw123456"
                  },
                  "avatar": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "74"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"4a-FOtbtivurwsEA5oS9bxIWbEYlBE\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Tue, 27 Feb 2024 09:09:00 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "message": "User registered successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/login": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Login user",
        "description": "Used for logging in the user by generating and setting cookies generated by jsonwebtoken.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "username": "thewaseem",
                  "role": "doctor",
                  "password": "sw123456"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "http://localhost:5173"
                }
              },
              "Vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Set-Cookie": {
                "schema": {
                  "type": "string",
                  "example": "refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRkYTZhYzc3ZTY5NjdiYzEwYTcxNDAiLCJpYXQiOjE3MTE3MDQ3NTIsImV4cCI6MTcxMzAwMDc1Mn0.UW3fRYYEE4xsiUepXDcRvgFVH8wFJ7U39oBfDkwwJBQ; Max-Age=1296000; Path=/; Expires=Sat, 13 Apr 2024 09:32:33 GMT; HttpOnly; Secure"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "422"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"1a6-LrqLl+u4hbPRbOs6h1YA5SKGeA4\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Fri, 29 Mar 2024 09:32:33 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65dda6ac77e6967bc10a7140",
                    "username": "thewaseem",
                    "fullname": "Dr. Syed Waseem07",
                    "mobile_no": "9764512890",
                    "role": "doctor",
                    "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1711621419/m2jawgxkkxe5ile5qnfg.avif",
                    "email": "swaseem@gmail.com",
                    "createdAt": "2024-02-27T09:09:00.613Z",
                    "updatedAt": "2024-03-29T09:32:32.997Z",
                    "__v": 0
                  },
                  "message": "User Logged in successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/logout": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Logout user",
        "description": "User for logging out user by clearing and refreshing cookies (which was set when logged in).",
        "requestBody": {
          "content": {}
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Set-Cookie": {
                "schema": {
                  "type": "string",
                  "example": "refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "84"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"54-cRDQCqHHs/PqDsd/ZqsWF4q4TZs\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Fri, 23 Feb 2024 17:18:57 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {},
                  "message": "User logged out successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/appointments": {
      "get": {
        "tags": [
          "User"
        ],
        "summary": "Get All Appointments",
        "description": "Gives all appointments booked till now.",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "452"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"1c4-hSVZr/k9tqSMAtA1D29vtxRdPSo\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sat, 24 Feb 2024 05:30:47 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": [
                    {
                      "_id": "65d9794a9f4c9dc773479410",
                      "patient_name": "patient1 surname1",
                      "mobile_no": "9801234567",
                      "age": 32,
                      "gender": "Male",
                      "date_of_app": "24-2-2024",
                      "time_of_app": "11:15 AM",
                      "__v": 0
                    },
                    {
                      "_id": "65d979c886fc77a28a477326",
                      "patient_name": "patient2 surname2",
                      "mobile_no": "9801234567",
                      "age": 40,
                      "gender": "Female",
                      "date_of_app": "24-2-2024",
                      "time_of_app": "11:40 AM",
                      "__v": 0
                    }
                  ],
                  "message": "All Appointments fetched successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/allPatientDetails": {
      "get": {
        "tags": [
          "User"
        ],
        "summary": "Get All Visited Patient Details",
        "description": "Gives details all patient's who visited the clinic till now.",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "http://localhost:5173"
                }
              },
              "Vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "3790"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"ece-4Hb6uXJdiuH2fpy3F7m4kRAWQZA\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Fri, 29 Mar 2024 09:34:05 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": [
                    {
                      "_id": "65ddb80aceaf91eece42890a",
                      "patient_name": "Ramesh Patil",
                      "prescriptions": [],
                      "mobile_no": "9970543214",
                      "age": 34,
                      "weight": 72,
                      "gender": "Male",
                      "symptoms": "Cold,Cough",
                      "report": [],
                      "createdAt": "2024-02-27T10:23:06.230Z",
                      "updatedAt": "2024-02-28T17:35:23.725Z",
                      "__v": 0,
                      "last_visited": "2024-02-28T00:00:00.000Z"
                    },
                    {
                      "_id": "65ddb859ceaf91eece42890e",
                      "patient_name": "Digvijay Kale",
                      "prescriptions": [],
                      "mobile_no": "9771234567",
                      "age": 26,
                      "weight": 55,
                      "gender": "Male",
                      "symptoms": "Cold",
                      "report": [],
                      "createdAt": "2024-02-27T10:24:25.233Z",
                      "updatedAt": "2024-02-27T10:24:25.233Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ddb8c2ceaf91eece428912",
                      "patient_name": "Anjali Jadhav",
                      "prescriptions": [],
                      "mobile_no": "9865234567",
                      "age": 25,
                      "weight": 50,
                      "gender": "Female",
                      "symptoms": "Cold,Fever",
                      "report": [],
                      "createdAt": "2024-02-27T10:26:10.815Z",
                      "updatedAt": "2024-02-27T10:26:10.815Z",
                      "__v": 0
                    },
                    {
                      "_id": "65df6fb736dc639fe4b2e1ce",
                      "patient_name": "Shahrukh Patel",
                      "prescriptions": [],
                      "mobile_no": "9761234567",
                      "age": 28,
                      "weight": 52,
                      "gender": "Male",
                      "symptoms": "Fever,Vomit",
                      "report": [],
                      "last_visited": "2024-02-28T00:00:00.000Z",
                      "createdAt": "2024-02-28T17:39:03.923Z",
                      "updatedAt": "2024-02-28T17:39:03.923Z",
                      "__v": 0
                    },
                    {
                      "_id": "65df78607ad7afd1f2a6163c",
                      "patient_name": "Rekha Survase",
                      "prescriptions": [],
                      "mobile_no": "9801234567",
                      "age": 23,
                      "weight": 41,
                      "gender": "Female",
                      "symptoms": "Cold,Cough",
                      "report": [],
                      "last_visited": "2024-02-19T00:00:00.000Z",
                      "createdAt": "2024-02-28T18:16:00.542Z",
                      "updatedAt": "2024-02-28T18:16:00.542Z",
                      "__v": 0
                    },
                    {
                      "_id": "6602a773e17baf8e3bed8fb2",
                      "patient_name": "name surname",
                      "prescriptions": [],
                      "mobile_no": "1234567890",
                      "age": 11,
                      "weight": 45,
                      "gender": "Male",
                      "symptoms": "Dehydration",
                      "report": [],
                      "last_visited": "2024-03-26T00:00:00.000Z",
                      "createdAt": "2024-03-26T10:46:11.494Z",
                      "updatedAt": "2024-03-26T10:46:11.494Z",
                      "__v": 0
                    },
                    {
                      "_id": "6602b6da525b16c2a1de37c2",
                      "patient_name": "hello world",
                      "prescriptions": [],
                      "mobile_no": "956549564569856985689573873475",
                      "age": 10,
                      "weight": 10,
                      "gender": "Male",
                      "symptoms": "4niu n4iufi4ubyfiu5 b4oiu5ybi4ub",
                      "report": [],
                      "last_visited": "2024-03-26T00:00:00.000Z",
                      "createdAt": "2024-03-26T11:51:54.174Z",
                      "updatedAt": "2024-03-26T11:51:54.174Z",
                      "__v": 0
                    },
                    {
                      "_id": "6602b861525b16c2a1de37f0",
                      "patient_name": "Samarth Mule",
                      "prescriptions": [],
                      "mobile_no": "1234564568",
                      "age": 20,
                      "weight": 65,
                      "gender": "Male",
                      "symptoms": "Cold",
                      "report": [],
                      "last_visited": "2024-03-26T00:00:00.000Z",
                      "createdAt": "2024-03-26T11:58:25.984Z",
                      "updatedAt": "2024-03-26T11:58:25.984Z",
                      "__v": 0
                    },
                    {
                      "_id": "6603a423779255e9ed8522f3",
                      "patient_name": "John Doe",
                      "prescriptions": [],
                      "mobile_no": "9527343353",
                      "age": 25,
                      "weight": 65,
                      "gender": "Male",
                      "symptoms": "Cough, High Fever",
                      "report": [],
                      "last_visited": "2024-03-19T00:00:00.000Z",
                      "createdAt": "2024-03-27T04:44:19.708Z",
                      "updatedAt": "2024-03-27T04:44:19.708Z",
                      "__v": 0
                    },
                    {
                      "_id": "6603bd794c6dd19c219fef4d",
                      "patient_name": "abcd efg",
                      "prescriptions": [],
                      "mobile_no": "1234567890",
                      "age": 20,
                      "weight": 50,
                      "gender": "Male",
                      "symptoms": "Cold",
                      "report": [],
                      "last_visited": "2024-03-18T00:00:00.000Z",
                      "createdAt": "2024-03-27T06:32:25.580Z",
                      "updatedAt": "2024-03-27T06:32:25.580Z",
                      "__v": 0
                    },
                    {
                      "_id": "6603be122c79c532e9165cd3",
                      "patient_name": "dfgdfgfd",
                      "prescriptions": [],
                      "mobile_no": "35356356346",
                      "age": 345,
                      "weight": 345345,
                      "gender": "Male",
                      "symptoms": "34534534 34 tthrth rt363 ",
                      "report": [],
                      "last_visited": "2024-03-26T00:00:00.000Z",
                      "createdAt": "2024-03-27T06:34:58.189Z",
                      "updatedAt": "2024-03-27T06:34:58.189Z",
                      "__v": 0
                    },
                    {
                      "_id": "66041aa7ca6c1b4a907c7bda",
                      "patient_name": "Hello World",
                      "prescriptions": [],
                      "mobile_no": "343553",
                      "age": 55,
                      "weight": 55,
                      "gender": "Male",
                      "symptoms": "dfgdfg fdgd fdg",
                      "report": [],
                      "last_visited": "2024-03-27T00:00:00.000Z",
                      "createdAt": "2024-03-27T13:09:59.948Z",
                      "updatedAt": "2024-03-27T13:09:59.948Z",
                      "__v": 0
                    }
                  ],
                  "message": "All Visited patients details fetched successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/allPayments": {
      "get": {
        "tags": [
          "User"
        ],
        "summary": "All Payment Details",
        "description": "Gives details all payments paid by visited patients till now.",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "http://localhost:5173"
                }
              },
              "Vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "1571"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"623-GemMkrq7cmvUTAzGSWJfQYfbn4g\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Fri, 29 Mar 2024 09:34:32 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": [
                    {
                      "_id": "65ddba12ceaf91eece42892d",
                      "patient_name": "Ramesh Patil",
                      "amount": 100,
                      "date": "2024-02-27",
                      "createdAt": "2024-02-27T10:31:46.914Z",
                      "updatedAt": "2024-02-27T10:31:46.914Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ddba38ceaf91eece428930",
                      "patient_name": "Digvijay Kale",
                      "amount": 100,
                      "date": "2024-02-27",
                      "createdAt": "2024-02-27T10:32:24.063Z",
                      "updatedAt": "2024-02-27T10:32:24.063Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ddba48ceaf91eece428933",
                      "patient_name": "Anjali Jadhav",
                      "amount": 100,
                      "date": "2024-02-25",
                      "createdAt": "2024-02-27T10:32:40.695Z",
                      "updatedAt": "2024-02-27T10:32:40.695Z",
                      "__v": 0
                    },
                    {
                      "_id": "65df6fcf36dc639fe4b2e1d3",
                      "patient_name": "Shahrukh Patel",
                      "amount": 100,
                      "date": "2024-02-28",
                      "createdAt": "2024-02-28T17:39:27.270Z",
                      "updatedAt": "2024-02-28T17:39:27.270Z",
                      "__v": 0
                    },
                    {
                      "_id": "66014ae8c010f230435227a8",
                      "patient_name": "Patient1 name1",
                      "amount": 100,
                      "date": "2024-03-26",
                      "createdAt": "2024-03-25T09:59:04.370Z",
                      "updatedAt": "2024-03-25T09:59:04.370Z",
                      "__v": 0
                    },
                    {
                      "_id": "66015dae30d235baaf718bdb",
                      "patient_name": "Samarth Mule",
                      "amount": 123,
                      "date": "2024-03-25",
                      "createdAt": "2024-03-25T11:19:10.322Z",
                      "updatedAt": "2024-03-25T11:19:10.322Z",
                      "__v": 0
                    },
                    {
                      "_id": "66015daf016d6094fa019e06",
                      "patient_name": "Dhanraj Trivedi",
                      "amount": 200,
                      "date": "2024-03-26",
                      "createdAt": "2024-03-25T11:19:11.718Z",
                      "updatedAt": "2024-03-25T11:19:11.718Z",
                      "__v": 0
                    },
                    {
                      "_id": "66015e0b5dc42973d11315ef",
                      "patient_name": "Dhanraj",
                      "amount": 100,
                      "date": "2024-03-25",
                      "createdAt": "2024-03-25T11:20:43.091Z",
                      "updatedAt": "2024-03-25T11:20:43.091Z",
                      "__v": 0
                    }
                  ],
                  "message": "All Payment details fetched successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/details/patient2 surname2": {
      "get": {
        "tags": [
          "User"
        ],
        "summary": "Get single patient details",
        "description": "Gives details of a specified patient who has visited the clinic.",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "1076"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"434-AhI/ON7aayoCRL9r8C7EsPga0ss\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Tue, 27 Feb 2024 06:56:43 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65dd877743c1a97dd801c64e",
                    "patient_name": "patient2 surname2",
                    "prescriptions": [
                      {
                        "_id": "65dd861a43c1a97dd801c63d",
                        "patient_name": "patient2 surname2",
                        "medicine_name": "medicine133",
                        "dosage": "Morning Night",
                        "__v": 0
                      },
                      {
                        "_id": "65dd862843c1a97dd801c641",
                        "patient_name": "patient2 surname2",
                        "medicine_name": "medicine100",
                        "dosage": "Morning",
                        "__v": 0
                      }
                    ],
                    "mobile_no": "9801234567",
                    "age": 40,
                    "weight": 68,
                    "gender": "Female",
                    "symptoms": "Cold Cough Fever Vomit",
                    "report": [
                      {
                        "_id": "65dd864243c1a97dd801c644",
                        "patient_name": "patient2 surname2",
                        "report_name": "blood test",
                        "url": "http://res.cloudinary.com/dlolgpv91/image/upload/v1709016642/nszdhckb5gvoqu7o38nr.png",
                        "__v": 0
                      },
                      {
                        "_id": "65dd864b43c1a97dd801c647",
                        "patient_name": "patient2 surname2",
                        "report_name": "sugar test",
                        "url": "http://res.cloudinary.com/dlolgpv91/image/upload/v1709016651/qoolbxn4sjgowe1pykpn.png",
                        "__v": 0
                      }
                    ],
                    "payment_details": [
                      {
                        "_id": "65dd85ad43c1a97dd801c632",
                        "patient_name": "patient2 surname2",
                        "amount": 100,
                        "date": "27-2-2024",
                        "__v": 0
                      }
                    ]
                  },
                  "message": "Patient Details Fetched Successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/getCurrentUser": {
      "get": {
        "tags": [
          "User"
        ],
        "summary": "Get Current User",
        "description": "Gives currently logged in user.",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "http://localhost:5173"
                }
              },
              "Vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "436"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"1b4-YgaMQX1qwWzmdTd/hYG+hb0y5WI\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Fri, 29 Mar 2024 09:36:38 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65dda6ac77e6967bc10a7140",
                    "username": "thewaseem",
                    "fullname": "Dr. Syed Waseem07",
                    "mobile_no": "9764512890",
                    "role": "doctor",
                    "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1711621419/m2jawgxkkxe5ile5qnfg.avif",
                    "email": "swaseem@gmail.com",
                    "createdAt": "2024-02-27T09:09:00.613Z",
                    "updatedAt": "2024-03-29T09:35:59.419Z",
                    "__v": 0
                  },
                  "message": "Current User details fetched successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/changePassword": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Change Password",
        "description": "Changes the user password.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "oldPassword": "ns1123456",
                  "newPassword": "nschanged"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "85"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"55-CyGJCaxqcCXrzMloar9z7m95mvk\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Tue, 27 Feb 2024 06:30:11 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {},
                  "message": "Password changed successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/changeAvatar": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Change Avatar",
        "description": "Changes the user avatar.",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "avatar": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "http://localhost:5173"
                }
              },
              "Vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "418"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"1a2-XGM8izab16iwrrhQgGc99AE1fEA\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Fri, 29 Mar 2024 09:43:20 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65dda6ac77e6967bc10a7140",
                    "username": "thewaseem",
                    "fullname": "Dr. Syed Waseem",
                    "mobile_no": "9701234568",
                    "role": "doctor",
                    "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1711705400/ycw4a0dlnntsngjmgp67.avif",
                    "email": "name2@gmail.com",
                    "createdAt": "2024-02-27T09:09:00.613Z",
                    "updatedAt": "2024-03-29T09:43:20.607Z",
                    "__v": 0
                  },
                  "message": "Avatar updated successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/updateProfile": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Update User Profile",
        "description": "Used to update user details.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "username": "receptionist",
                  "fullname": "Ashish Vaidya",
                  "mobile_no": "9701234568",
                  "role": "receptionist",
                  "email": "name2@gmail.com"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "http://localhost:5173"
                }
              },
              "Vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "434"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"1b2-kvj+14VNRkvFEWgprrZr3biKQh4\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Fri, 29 Mar 2024 09:38:13 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65dda6ac77e6967bc10a7140",
                    "username": "thewaseem",
                    "fullname": "Dr. Syed Waseem",
                    "mobile_no": "9701234568",
                    "role": "doctor",
                    "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1711621419/m2jawgxkkxe5ile5qnfg.avif",
                    "email": "name2@gmail.com",
                    "createdAt": "2024-02-27T09:09:00.613Z",
                    "updatedAt": "2024-03-29T09:38:13.610Z",
                    "__v": 0
                  },
                  "message": "Account details updated successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/dailyAppointments": {
      "get": {
        "tags": [
          "User"
        ],
        "summary": "Get Daily Appointments",
        "description": "Gives appointments which are booked today.",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "894"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"37e-oKSQnceGgKig1AcQq5q/DhoqtJQ\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Tue, 27 Feb 2024 10:13:15 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": [
                    {
                      "_id": "65ddb50cad7910a53eae1bfc",
                      "patient_name": "Ramesh Patil",
                      "mobile_no": "9801234567",
                      "age": 35,
                      "gender": "Male",
                      "date_of_app": "2024-02-27T00:00:00.000Z",
                      "time_of_app": "7:10 PM",
                      "createdAt": "2024-02-27T10:10:20.887Z",
                      "updatedAt": "2024-02-27T10:10:20.887Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ddb548ad7910a53eae1c01",
                      "patient_name": "Digvijay Kale",
                      "mobile_no": "9771234567",
                      "age": 26,
                      "gender": "Male",
                      "date_of_app": "2024-02-27T00:00:00.000Z",
                      "time_of_app": "7:50 PM",
                      "createdAt": "2024-02-27T10:11:20.190Z",
                      "updatedAt": "2024-02-27T10:11:20.190Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ddb56cad7910a53eae1c06",
                      "patient_name": "Kushi Bhosle",
                      "mobile_no": "9567234567",
                      "age": 22,
                      "gender": "Female",
                      "date_of_app": "2024-02-27T00:00:00.000Z",
                      "time_of_app": "8:30 PM",
                      "createdAt": "2024-02-27T10:11:56.978Z",
                      "updatedAt": "2024-02-27T10:11:56.978Z",
                      "__v": 0
                    }
                  ],
                  "message": "Daily Appointments fetched sucessfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/refreshAccessToken": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Refresh Access Token",
        "requestBody": {
          "content": {}
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Set-Cookie": {
                "schema": {
                  "type": "string",
                  "example": "refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRkYTZhYzc3ZTY5NjdiYzEwYTcxNDAiLCJpYXQiOjE3MTA4Njg2NjUsImV4cCI6MTcxMTczMjY2NX0.Pz9hQHK6RASfPK4CmccHGmkjDY7eCevpJwR5XrMHnRw; Max-Age=864000; Path=/; Expires=Fri, 29 Mar 2024 17:17:45 GMT; HttpOnly; Secure"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "90"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"5a-CLOMe86CGpO4gcqjs43MnHjt1KU\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Tue, 19 Mar 2024 17:17:45 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": "Tokens updated successfully",
                  "message": "Success",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/receptionist/addAppointment": {
      "post": {
        "tags": [
          "Receptionist"
        ],
        "summary": "Add Appointment",
        "description": "Used for adding the appointment in db.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "patient_name": "Ramesh Patil",
                  "mobile_no": "9801234567",
                  "age": 35,
                  "gender": "Male",
                  "date_of_app": "2024-02-27",
                  "time_of_app": "7:10 PM"
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "350"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"15e-OHEV3OsG+rmi+Hsy0Tsbv3bETYM\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Tue, 27 Feb 2024 10:10:21 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65ddb50cad7910a53eae1bfc",
                    "patient_name": "Ramesh Patil",
                    "mobile_no": "9801234567",
                    "age": 35,
                    "gender": "Male",
                    "date_of_app": "2024-02-27T00:00:00.000Z",
                    "time_of_app": "7:10 PM",
                    "createdAt": "2024-02-27T10:10:20.887Z",
                    "updatedAt": "2024-02-27T10:10:20.887Z",
                    "__v": 0
                  },
                  "message": "Appointment booked successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/receptionist/addPaymentDetails": {
      "post": {
        "tags": [
          "Receptionist"
        ],
        "summary": "Add Payment Details",
        "description": "Used for adding payment details in db.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "patient_name": "Ramesh Patil",
                  "amount": "100",
                  "date": "2024-02-27"
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "271"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"10f-wGnYVuM+om+v3cTxLJAQfwf7jyk\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Tue, 27 Feb 2024 10:31:46 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "patient_name": "Ramesh Patil",
                    "amount": 100,
                    "date": "2024-02-27",
                    "_id": "65ddba12ceaf91eece42892d",
                    "createdAt": "2024-02-27T10:31:46.914Z",
                    "updatedAt": "2024-02-27T10:31:46.914Z",
                    "__v": 0
                  },
                  "message": "Payment Deatils added successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/receptionist/addMedicine": {
      "post": {
        "tags": [
          "Receptionist"
        ],
        "summary": "Add Medicine",
        "description": "Used for adding medicine details of visited patients in db.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "patient_name": "Ramesh Patil",
                  "medicine_name": "medicine 107",
                  "dosage": "Morning"
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "281"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"119-l7DABiSucjYjebGqBBtpjPSrQ4I\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Tue, 27 Feb 2024 10:29:54 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "patient_name": "Ramesh Patil",
                    "medicine_name": "medicine 107",
                    "dosage": "Morning",
                    "_id": "65ddb9a2ceaf91eece42892a",
                    "createdAt": "2024-02-27T10:29:54.079Z",
                    "updatedAt": "2024-02-27T10:29:54.079Z",
                    "__v": 0
                  },
                  "message": "Medicine Added Successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/receptionist/addReport": {
      "post": {
        "tags": [
          "Receptionist"
        ],
        "summary": "Add Report",
        "description": "Used for adding report of visited pateint in db.",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "report_name": {
                    "type": "string",
                    "example": "Malaria Report"
                  },
                  "reportFile": {
                    "type": "string",
                    "format": "binary"
                  },
                  "patient_name": {
                    "type": "string",
                    "example": "Ramesh Patil"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "354"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"162-Rzh+x9cSFdU6gGKg7MCc8pXlR4I\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Tue, 27 Feb 2024 10:28:40 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "patient_name": "Ramesh Patil",
                    "report_name": "Malaria Report",
                    "url": "http://res.cloudinary.com/dlolgpv91/image/upload/v1709029720/aw2w6qojrfxvshvozmlz.png",
                    "_id": "65ddb957ceaf91eece428922",
                    "createdAt": "2024-02-27T10:28:39.687Z",
                    "updatedAt": "2024-02-27T10:28:39.687Z",
                    "__v": 0
                  },
                  "message": "Report Added Successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/receptionist/addPatientDetails": {
      "post": {
        "tags": [
          "Receptionist"
        ],
        "summary": "Add Patient Details",
        "description": "Used for adding patient details in db.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "patient_name": "Rekha Survase",
                  "mobile_no": "9801234567",
                  "age": 23,
                  "weight": 41,
                  "gender": "Female",
                  "symptoms": "Cold,Cough",
                  "last_visited": "2024-02-19"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "337"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"151-CMX3XPQWM5fPn6mhHvwTuV02cCk\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 28 Feb 2024 18:16:00 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65df78607ad7afd1f2a6163c",
                    "patient_name": "Rekha Survase",
                    "prescriptions": [],
                    "mobile_no": "9801234567",
                    "age": 23,
                    "weight": 41,
                    "gender": "Female",
                    "symptoms": "Cold,Cough",
                    "report": [],
                    "last_visited": "2024-02-19T00:00:00.000Z",
                    "payment_details": []
                  },
                  "message": "Patient details fetched successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/receptionist/updatePatientDetails": {
      "post": {
        "tags": [
          "Receptionist"
        ],
        "summary": "Update Patient Details",
        "description": "Used for update patient details in db.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "patient_name": "Ramesh Patil",
                  "mobile_no": "9970543214",
                  "age": 34,
                  "weight": 72,
                  "symptoms": "Cold,Cough",
                  "last_visited": "2024-02-28"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "1743"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"6cf-D7Gd9+5vdpNVLP110Ku67pp+hYE\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 28 Feb 2024 17:35:24 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65ddb80aceaf91eece42890a",
                    "patient_name": "Ramesh Patil",
                    "prescriptions": [
                      {
                        "_id": "65ddb996ceaf91eece428926",
                        "patient_name": "Ramesh Patil",
                        "medicine_name": "medicine 100",
                        "dosage": "Morning,Night",
                        "createdAt": "2024-02-27T10:29:42.736Z",
                        "updatedAt": "2024-02-27T10:29:42.736Z",
                        "__v": 0
                      },
                      {
                        "_id": "65ddb9a2ceaf91eece42892a",
                        "patient_name": "Ramesh Patil",
                        "medicine_name": "medicine 107",
                        "dosage": "Morning",
                        "createdAt": "2024-02-27T10:29:54.079Z",
                        "updatedAt": "2024-02-27T10:29:54.079Z",
                        "__v": 0
                      }
                    ],
                    "mobile_no": "9970543214",
                    "age": 34,
                    "weight": 72,
                    "gender": "Male",
                    "symptoms": "Cold,Cough",
                    "report": [
                      {
                        "_id": "65ddb8eeceaf91eece428916",
                        "patient_name": "Ramesh Patil",
                        "report_name": "blood test",
                        "url": "http://res.cloudinary.com/dlolgpv91/image/upload/v1709029615/owgemup6szyvtoozfykc.png",
                        "createdAt": "2024-02-27T10:26:54.907Z",
                        "updatedAt": "2024-02-27T10:26:54.907Z",
                        "__v": 0
                      },
                      {
                        "_id": "65ddb8f8ceaf91eece428919",
                        "patient_name": "Ramesh Patil",
                        "report_name": "Sugar test",
                        "url": "http://res.cloudinary.com/dlolgpv91/image/upload/v1709029625/ht5lehib2ujmqdniym7a.png",
                        "createdAt": "2024-02-27T10:27:04.959Z",
                        "updatedAt": "2024-02-27T10:27:04.959Z",
                        "__v": 0
                      },
                      {
                        "_id": "65ddb957ceaf91eece428922",
                        "patient_name": "Ramesh Patil",
                        "report_name": "Malaria Report",
                        "url": "http://res.cloudinary.com/dlolgpv91/image/upload/v1709029720/aw2w6qojrfxvshvozmlz.png",
                        "createdAt": "2024-02-27T10:28:39.687Z",
                        "updatedAt": "2024-02-27T10:28:39.687Z",
                        "__v": 0
                      }
                    ],
                    "last_visited": "2024-02-28T00:00:00.000Z",
                    "payment_details": [
                      {
                        "_id": "65ddba12ceaf91eece42892d",
                        "patient_name": "Ramesh Patil",
                        "amount": 100,
                        "date": "2024-02-27",
                        "createdAt": "2024-02-27T10:31:46.914Z",
                        "updatedAt": "2024-02-27T10:31:46.914Z",
                        "__v": 0
                      }
                    ]
                  },
                  "message": "Patient details updated successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/doctor/revenueInfo": {
      "get": {
        "tags": [
          "Doctor"
        ],
        "summary": "Get daily,weekly and monthly Revenue",
        "description": "Used for getting revenue of clinic.",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "174"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"ae-33/Ont25CJ8swo3ygRFz5k4mDJI\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 28 Feb 2024 18:51:54 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "dailyRevenue": 100,
                    "weeklyRevenue": 400,
                    "monthlyRevenue": 400
                  },
                  "message": "Daily, Weekly and monthly patient count fetched sucessfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/doctor/patientCountInfo": {
      "get": {
        "tags": [
          "Doctor"
        ],
        "summary": "Get daily,weekly,monthly patient count Response",
        "description": "Used for getting number of patients visiting the clinic.",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "182"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"b6-fnUCSHPQH1tKrzHxvgSAQgwmBWY\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 28 Feb 2024 18:23:51 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "dailyPatientCount": 2,
                    "weeklyPatientCount": 2,
                    "monthlyPatientCount": 3
                  },
                  "message": "Daily, Weekly and monthly patient countfetched sucessfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/users/doctor/averageAppointments": {
      "get": {
        "tags": [
          "Doctor"
        ],
        "summary": "Get average appointments per day",
        "description": "Used to get average appoinments booked by patients per day",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "123"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"7b-OR9qIjffttpaRCk+WZMwgYaoOp0\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Thu, 29 Feb 2024 06:41:04 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "avgAppointments": 1
                  },
                  "message": "Average appointments per day fetched sucessfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    }
  }
}
