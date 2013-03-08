require 'grape'

module SmartEvent
    class API < Grape::API

      version 'v1', :using => :header, :vendor => 'smartevent'
      format :json

      resource :sessions do

        desc 'Return all sessions.'
        get do
        end

        desc 'Return one session.'
        params do
          requires :id, :type => Integer, :desc => 'Session id.'
        end
        get ':id' do
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
        end

        desc 'Delete a session.'
        params do
          requires :id, :type => Integer, :desc => 'Session id.'
        end
        delete ':id' do
        end

      end

      resource :events do

        desc 'Return all events.'
        get do
        end

        desc 'Return one event.'
        params do
          requires :id, :type => Integer, :desc => 'Event id.'
        end
        get ':id' do
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
        end

        desc 'Delete an event.'
        params do
          requires :id, :type => Integer, :desc => 'Event id.'
        end
        delete ':id' do
        end

      end

      resource :users do

        desc 'Get all users.'
        get do
        end

        desc 'Get one user.'
        params do
          requires :id, :type => Integer, :desc => 'User id.'
        end
        get ':id' do
        end

        desc 'Create an user.'
        params do
          requires :firstname, :type => String, :desc => 'User firstname.'
          requires :lastname,  :type => String, :desc => 'User lastname.'
          requires :email, :type => String, :desc => 'User email.'
          requires :role, :type => String, :desc => 'User role.'
        end
        post do
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
        end

        desc 'Delete an user.'
        params do
          requires :id, :type => Integer, :desc => 'User id.'
        end
        delete ':id' do
        end

      end

    end
end
