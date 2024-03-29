class UsersController < ApplicationController  
  def signin
    redirect_to messages_url if user_signed_in?
  end

  def signout
    session[:user_id] = nil
    redirect_to root_url, :notice => "You have signed out successfully!"
  end
  
  def error
  end

  def create
    auth = request.env["omniauth.auth"]
    user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
    session[:user_id] = user.id
    redirect_to messages_url, :notice => "You have signed in successfully!"
  end
end
