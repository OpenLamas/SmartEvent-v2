class User
  include MongoMapper::Document

  key :firstname, String
  key :lastname,  String
  key :email, String
  key :role,  String

end