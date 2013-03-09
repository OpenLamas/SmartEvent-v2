require 'grape'
require 'mongo'
require './api_v1/sessions'
require './api_v1/events'
require './api_v1/users'

module SmartEvent
    class API < Grape::API

      version 'v1', :using => :path
      prefix 'api'
      format :json

      mount SmartEvent::APIv1::Sessions
      mount SmartEvent::APIv1::Events
      mount SmartEvent::APIv1::Users

    end
end
