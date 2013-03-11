class Event
  include MongoMapper::Document

  key :name, String
  key :desc, String
  key :location,  String
  key :starttime, String
  key :endtime,   String

  many :users, :in => :users_ids

end
