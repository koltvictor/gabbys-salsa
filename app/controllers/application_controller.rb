class ApplicationController < ActionController::API

  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :invalid 
  before_action :confirm_auth
    
  private 

  def invalid(inst)
    render json: {errors: inst.record.errors.full_messages},
    status: :unprocessable_entity 
  end 

  def current_user 
    current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
  end

  def confirm_auth 
    render json: {error: "Please Login :-)"}, status: :unauthorized unless current_user
  end 

end