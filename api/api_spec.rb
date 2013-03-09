require './spec_helper'

describe SmartEvent::API do
  include Rack::Test::Methods

  def app
    SmartEvent::API
  end

  describe SmartEvent::API do

    describe 'POST /api/v1/users' do
      it 'should insert an user and return its id' do
        post '/api/v1/users', {'firstname' => 'Yvan', 'lastname' => 'Deschapeaux', 'email' => 'yvan.deschapeaux@chut.com', 'role' => 'admin'}
        puts @user_id = last_response.body
        last_response.status.should == 201
      end
    end

    describe 'GET /api/v1/users' do
      it 'should return some users' do
        get '/api/v1/users'
        last_response.status.should == 200
      end
    end

    describe 'GET /api/v1/users/@user_id' do
      it 'should return 1 user' do
        get "/api/v1/users/#{@user_id}"
        puts @user_id
        result = JSON.parse(last_response.body)
        expect(result.length).to eq(1)
        expect(result['lastname']).to eq('Deschapeaux')
        last_response.status.should == 200
      end
    end

  end

end
