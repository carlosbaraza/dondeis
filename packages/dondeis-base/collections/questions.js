Questions = new Meteor.Collection('questions');

Schemas.Questions = new SimpleSchema({
  object: {
    type: String
  },
  where: {
    type: String
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
