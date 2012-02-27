class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end
  
  def show
    render :json => Message.find(params[:id])
  end
  
  def create
    message = Message.create! params[:message]
    render :json => message
  end
  
  def update
    message = Message.find (params[:message][:id])
    message.update_attributes! params[:message]
    render :json => message
  end
  
  def destroy
    message = Message.find(params[:id])
    message.destroy
    render :json => message
  end
end
