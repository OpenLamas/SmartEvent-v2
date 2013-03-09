module SmartEvent
  module APIv1
    class Events < Grape::API
      include Mongo

      mongo = MongoClient.new('localhost', 27017)
      db = mongo.db('testing')
      events = db['events']

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
    end
  end
end
