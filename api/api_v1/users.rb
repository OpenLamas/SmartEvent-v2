module SmartEvent
  module APIv1
    class Users < Grape::API
      include Mongo

      mongo = MongoClient.new('localhost', 27017)
      db = mongo.db('testing')
      users = db['users']

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
          users.find_one(:_id => BSON::ObjectId(params[:id]))
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
          requires :id, :type => String, :desc => 'User id.'
          requires :firstname, :type => String, :desc => 'User firstname.'
          requires :lastname,  :type => String, :desc => 'User lastname.'
          requires :email, :type => String, :desc => 'User email.'
          requires :role,  :type => String, :desc => 'User role.'
        end
        put ':id' do
          user = {'firstname' => params[:firstname], 'lastname' => params[:lastname], 'email' => params[:email], 'role' => params[:role]}
          users.update({'_id' => BSON::ObjectId(params[:id])}, user)
        end

        desc 'Delete an user.'
        params do
          requires :id, :type => String, :desc => 'User id.'
        end
        delete ':id' do
          users.remove('_id' => params[:id])
        end

      end
    end
  end
end
