require 'grape'
require 'grape-swagger'

class API < Grape::API

  version 'v1', :using => :path
  prefix 'api'
  format :json

  helpers do
    def logger
      API.logger
    end
  end

  ### Sessions ###
  resource :sessions do

    desc 'Return all sessions.'
    get do
      Session.all
    end

    desc 'Return one session.'
    params do
      requires :id, :type => String, :desc => 'Session id.'
    end
    get ':id' do
      Session.first(:id => params[:id])
    end

    desc 'Create a session.'
    params do
      requires :name,      :type => String,  :desc => 'Session name.'
      requires :maxpeople, :type => Integer, :desc => 'Maximum number of people per session.'
      requires :minevents, :type => Integer, :desc => 'Minimum of events inscription per people.'
      requires :deadline,  :type => String,  :desc => 'Deadline for inscriptions.'
      requires :reminder,  :type => String,  :desc => 'Date for sending the reminder.'
    end
    post do
      session = Session.new(:name => params[:name],
                            :maxpeople => params[:maxpeople],
                            :minevents => params[:minevents],
                            :deadline  => params[:deadline],
                            :reminder  => params[:reminder])
      session.save!
    end

    desc 'Update a session.'
    params do
      requires :id,        :type => String, :desc => 'Session id.'
      requires :name,      :type => String,  :desc => 'Session name.'
      requires :maxpeople, :type => Integer, :desc => 'Maximum number of people per session.'
      requires :minevents, :type => Integer, :desc => 'Minimum of events inscription per people.'
      requires :deadline,  :type => String,  :desc => 'Deadline for inscriptions.'
      requires :reminder,  :type => String,  :desc => 'Date for sending the reminder.'
    end
    put ':id' do
=begin
      session = Session.first(:id => params[:id])
      session.name      = params[:name]
      session.maxpeople = params[:maxpeople]
      session.minevents = params[:minevents]
      session.deadline  = params[:deadline]
      session.reminder  = params[:reminder]
      session.save!
=end
      'Pas implemente :('
    end

    desc 'Delete a session.'
    params do
      requires :id, :type => String, :desc => 'Session id.'
    end
    delete ':id' do
      Session.first(:id => params[:id]).delete
    end
  end

  ### Events ###
  resource :events do

      desc 'Return all events.'
      get do
        Event.all
      end

      desc 'Return one event.'
      params do
        requires :id, :type => String, :desc => 'Event id.'
      end
      get ':id' do
        Event.find(:id => params[:id])
      end

      desc 'Create an event.'
      params do
        requires :name,      :type => String, :desc => 'Event name.'
        requires :desc,      :type => String, :desc => 'Event description.'
        requires :location,  :type => String, :desc => 'Location of the event.'
        requires :starttime, :type => String, :desc => 'Start date of the event.'
        requires :endtime,   :type => String, :desc => 'End date of the event.'
      end
      post do
        event = Event.new(:name => params[:name],
                          :desc => params[:desc],
                          :location  => params[:location],
                          :starttime => params[:starttime],
                          :endtime   => params[:endtime])
        event.save!
      end

      desc 'Update an event.'
      params do
        requires :id,        :type => String, :desc => 'Event id.'
        requires :name,      :type => String, :desc => 'Event name.'
        requires :desc,      :type => String, :desc => 'Event description.'
        requires :location,  :type => String, :desc => 'Location of the event.'
        requires :starttime, :type => String, :desc => 'Start date of the event.'
        requires :endtime,   :type => String, :desc => 'End date of the event.'
      end
      put ':id' do
        'Pas implemente :('
      end

      desc 'Delete an event.'
      params do
        requires :id, :type => String, :desc => 'Event id.'
      end
      delete ':id' do
        Event.first(:id => params[:id]).delete
      end
    end

    ### Users ###
    resource :users do

    desc 'Get all users.'
    get do
      User.all
    end

    desc 'Get one user.'
    params do
      requires :id, :type => String, :desc => 'User id.'
    end
    get ':id' do
      User.first(:id => params[:id])
    end

    desc 'Create an user.'
    params do
      requires :firstname, :type => String, :desc => 'User firstname.'
      requires :lastname,  :type => String, :desc => 'User lastname.'
      requires :email,     :type => String, :desc => 'User email.'
      requires :role,      :type => String, :desc => 'User role.'
    end
    post do
      user = User.new(:firstname => params[:firstname],
                      :lastname  => params[:lastname],
                      :email => params[:email],
                      :role  => params[:role])
      user.save!
    end

    desc 'Update an user.'
    params do
      requires :id,        :type => String, :desc => 'User id.'
      requires :firstname, :type => String, :desc => 'User firstname.'
      requires :lastname,  :type => String, :desc => 'User lastname.'
      requires :email,     :type => String, :desc => 'User email.'
      requires :role,      :type => String, :desc => 'User role.'
    end
    put ':id' do
      'Pas implemente :('
    end

    desc 'Delete an user.'
    params do
      requires :id, :type => String, :desc => 'User id.'
    end
    delete ':id' do
      User.first(:id => params[:id]).delete
    end
  end

  add_swagger_documentation({:api_version => 'v1', :base_path => 'http://127.0.0.1:9292/api/v1/'})

  logger.formatter = proc do |severity, datetime, progname, msg|
    "[#{datetime}] #{severity} #{msg}\n"
  end

  logger.info "SmartEvent::API just started :)"
  logger.info "#{API.routes.length} routes loaded"

end
