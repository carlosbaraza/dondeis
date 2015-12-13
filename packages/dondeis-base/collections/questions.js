Questions = new Meteor.Collection('questions');

Schemas.Answer = new SimpleSchema({
  body: {
    type: String
  }
})

Schemas.Questions = new SimpleSchema({
  object: {
    type: String
  },
  where: {
    type: String
  },
  answers: {
    type: [Schemas.Answer]
  },
  createdAt: SchemaHelpers.createdAt,
  updatedAt: SchemaHelpers.updatedAt
});

Questions.attachSchema(Schemas.Questions);

Questions.allow({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;  
  }
})
