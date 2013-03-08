require 'grape'

module SmartEvent
    class API < Grape::API

      resource :sessions do

        desc 'Return all the sessions.'
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

    end
end
