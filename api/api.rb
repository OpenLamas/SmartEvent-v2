require 'grape'
require 'mongo'

module SmartEvent
    class API < Grape::API
      include Mongo

      mongo = MongoClient.new('localhost', 27017)
      db = mongo.db('testing')

      sessions = db['sessions']
      events   = db['events']
      users    = db['users']

      version 'v1', :using => :path
      format :json

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
          sessions.find('_id' => params[:id])
        end

        desc 'Create a session.'
        params do
          requires :name, :type => String, :desc => 'Session name.'
          requires :maxpeople, :type => Integer,  :desc => 'Maximum number of people per session.'
          requires :minevents, :type => Integer,  :desc => 'Minimum of events inscription per people.'
          requires :deadline,  :type => DateTime, :desc => 'Deadline for inscriptions.'
          requires :reminder,  :type => DateTime, :desc => 'Date for sending the reminder.'
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
          requires :deadline,  :type => DateTime, :desc => 'Deadline for inscriptions.'
          requires :reminder,  :type => DateTime, :desc => 'Date for sending the reminder.'
        end
        put ':id' do
          session = {'name' => params[:name], 'maxpeople' => params[:maxpeople], 'minevents' => params['minevents'], 'deadline' => params['deadline'], 'reminder' => params['reminder']}
          session.update({'_id' => params[:id]}, session)
        end

        desc 'Delete a session.'
        params do
          requires :id, :type => Integer, :desc => 'Session id.'
        end
        delete ':id' do
          sessions.remove('_id' => params[:id])
        end

      end

      resource :events do

        desc 'Return all events.'
        get do
          events.find
        end

        desc 'Return one event.'
        params do
          requires :id, :type => Integer, :desc => 'Event id.'
        end
        get ':id' do
          events.find('_id' => params[:id])
        end

        desc 'Create an event.'
        params do
          requires :name, :type => String, :desc => 'Event name.'
          requires :desc, :type => String, :desc => 'Event description.'
          requires :location, :type => String, :desc => 'Location of the event.'
          requires :starttime, :type => DateTime, :desc => 'Start date of the event.'
          requires :endtime,   :type => DateTime, :desc => 'End date of the event.'
        end
        post do
          event = {'name' => params[:name], 'desc' => params[:desc], 'location' => params[:location], 'starttime' => params[:starttime], 'endtime' => params[:endtime]}
          event.insert(event)
        end

        desc 'Update an event.'
        params do
          requires :id, :type => Integer, :desc => 'Event id.'
          requires :name, :type => String, :desc => 'Event name.'
          requires :desc, :type => String, :desc => 'Event description.'
          requires :location, :type => String, :desc => 'Location of the event.'
          requires :starttime, :type => DateTime, :desc => 'Start date of the event.'
          requires :endtime,   :type => DateTime, :desc => 'End date of the event.'
        end
        put ':id' do
          event = {'name' => params[:name], 'desc' => params[:desc], 'location' => params[:location], 'starttime' => params[:starttime], 'endtime' => params[:endtime]}
          events.update({'_id' => params[:id]}, event)
        end

        desc 'Delete an event.'
        params do
          requires :id, :type => Integer, :desc => 'Event id.'
        end
        delete ':id' do
          events.remove('_id' => params[:id])
        end

      end

      resource :users do

        desc 'Get all users.'
        get do
          users.find
        end

        desc 'Get one user.'
        params do
          requires :id, :type => String, :desc => 'User id.'
        end
        get ':id' do
          users.find('_id' => params[:id])
        end

        desc 'Create an user.'
        params do
          requires :firstname, :type => String, :desc => 'User firstname.'
          requires :lastname,  :type => String, :desc => 'User lastname.'
          requires :email, :type => String, :desc => 'User email.'
          requires :role, :type => String, :desc => 'User role.'
        end
        post do
          user = {'firstname' => params[:firstname], 'lastname' => params[:lastname], 'email' => params[:email], 'role' => params[:role]}
          users.insert(user)
        end

        desc 'Update an user.'
        params do
          requires :id, :type => Integer, :desc => 'User id.'
          requires :firstname, :type => String, :desc => 'User firstname.'
          requires :lastname,  :type => String, :desc => 'User lastname.'
          requires :email, :type => String, :desc => 'User email.'
          requires :role,  :type => String, :desc => 'User role.'
        end
        put ':id' do
          user = {'firstname' => params[:firstname], 'lastname' => params[:lastname], 'email' => params[:email], 'role' => params[:role]}
          users.update({'_id' => params[:id]}, user)
        end

        desc 'Delete an user.'
        params do
          requires :id, :type => Integer, :desc => 'User id.'
        end
        delete ':id' do
          users.remove('_id' => params[:id])
        end

      end

    end
end
