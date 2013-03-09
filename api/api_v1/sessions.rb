module SmartEvent
  module APIv1
    class Sessions < Grape::API
      include Mongo

      mongo = MongoClient.new('localhost', 27017)
      db = mongo.db('testing')
      sessions = db['sessions']

      resource :sessions do

        desc 'Return all sessions.'
        get do
          sessions.find
        end

        desc 'Return one session.'
        params do
          requires :id, :type => Integer, :desc => 'Session id.'
        end
        get ':id' do
          sessions.find(:_id => BSON::ObjectId(params[:id]))
        end

        desc 'Create a session.'
        params do
          requires :name, :type => String, :desc => 'Session name.'
          requires :maxpeople, :type => Integer,  :desc => 'Maximum number of people per session.'
          requires :minevents, :type => Integer,  :desc => 'Minimum of events inscription per people.'
          requires :deadline,  :type => String, :desc => 'Deadline for inscriptions.'
          requires :reminder,  :type => String, :desc => 'Date for sending the reminder.'
        end
        post do
          session = {'name' => params[:name], 'maxpeople' => params[:maxpeople], 'minevents' => params['minevents'], 'deadline' => params['deadline'], 'reminder' => params['reminder']}
          sessions.insert(session)
        end

        desc 'Update a session.'
        params do
          requires :id, :type => Integer, :desc => 'Session id.'
          requires :name, :type => String, :desc => 'Session name.'
          requires :maxpeople, :type => Integer,  :desc => 'Maximum number of people per session.'
          requires :minevents, :type => Integer,  :desc => 'Minimum of events inscription per people.'
          requires :deadline,  :type => String, :desc => 'Deadline for inscriptions.'
          requires :reminder,  :type => String, :desc => 'Date for sending the reminder.'
        end
        put ':id' do
          session = {'name' => params[:name], 'maxpeople' => params[:maxpeople], 'minevents' => params['minevents'], 'deadline' => params['deadline'], 'reminder' => params['reminder']}
          session.update({'_id' => BSON::ObjectId(params[:id])}, session)
        end

        desc 'Delete a session.'
        params do
          requires :id, :type => Integer, :desc => 'Session id.'
        end
        delete ':id' do
          sessions.remove('_id' => BSON::ObjectId(params[:id]))
        end

      end
    end
  end
end
