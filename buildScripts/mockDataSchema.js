export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users"]
};


// export const schema = {
//   type: 'object',
//   properties: {
//     user: {
//       type: 'object',
//       properties: {
//         id: {
//           $ref: '#/definitions/positiveInt'
//         },
//         name: {
//           type: 'string',
//           faker: 'name.findName'
//         },
//         email: {
//           type: 'string',
//           format: 'email',
//           faker: 'internet.email'
//         }
//       },
//       required: ['id', 'name', 'email']
//     }
//   },
//   required: ['user'],
//   definitions: {
//     positiveInt: {
//       type: 'integer',
//       minimum: 0,
//       exclusiveMinimum: true
//     }
//   }
// };
