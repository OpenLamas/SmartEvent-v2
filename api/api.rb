require 'mongo'
require 'grape'
require 'grape-swagger'
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

      add_swagger_documentation({:api_version => 'v1', :base_path => 'http://127.0.0.1:9292/api/v1/'})

    end
end
