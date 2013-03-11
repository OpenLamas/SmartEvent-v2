class Session
  include MongoMapper::Document

  key :name, String
  key :maxpeople, Integer
  key :minevents, Integer
  key :deadline,  String
  key :reminder,  String

  many :events, :in => :events_ids

end
