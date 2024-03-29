class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user
  helper_method :user_signed_in?
  
  protected
  
  def authorize_user
    redirect_to root_url, :notice => 'Please sign in to continue!' unless user_signed_in?
  end
  
  private
  
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def user_signed_in?
    current_user ? true : false
  end
end
