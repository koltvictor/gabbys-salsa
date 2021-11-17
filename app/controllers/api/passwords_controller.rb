class Api::PasswordsController < ApplicationController
    # before_action :require_user_logged_in!

    def update
      if current_user 
        current_user.update(password_params)
        render json: current_user, status: 200
      else
        render json: {error: 'Invalid password'}, status: :unauthorized
      end
    end

    private

    def password_params
      params.permit(:password, :password_confirmation)
    end
end