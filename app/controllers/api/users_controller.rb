class Api::UsersController < ApplicationController
    skip_before_action :confirm_auth
    
    def index
        render json: User.all, status: 200
    end

    def create 
        @new_user = User.create!(user_params)
        session[:user_id] = @new_user.id
        render json: @new_user,
        status: :created
    end 

    def show
        if current_user
          render json: current_user, status: :ok
        else
          render json: { error: 'No active session' }, status: :unauthorized
        end
    end

    private 

    def user_params 
        params.permit(:username, :password, :password_confirmation, :name, :email)
    end 

end
