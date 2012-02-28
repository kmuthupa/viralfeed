class MessagesController < ApplicationController
  before_filter :authorize_user
  
  def index
    @messages = Message.all
  end
  
  def show
    render :json => Message.find(params[:id])
  end
  
  def create
    @message = Message.create params[:message]
    if @message.valid? 
      render :json => @message 
    else
      render :json => @message.errors, :status => 500
    end
  end

  def update
    @message = Message.find (params[:message][:id])
    if @message.update_attributes params[:message].except(:id)
      render :json => @message
    else
      render :json => @message.errors, :status => 500
    end
  end
  
  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    render :json => @message
  end
end
