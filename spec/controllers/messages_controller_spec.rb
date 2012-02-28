require 'spec_helper'

describe MessagesController do
  it 'should authorize user during access' do
    @controller.stub!(:current_user).and_return(nil)
    get 'index'
    response.should be_redirect
  end
    
  it 'should test index' do
    msg1 = Factory(:message)
    msg2 = Factory(:message)
    @controller.stub!(:current_user).and_return(Factory(:user)) #stub authenticated user  
    get 'index'
    response.should be_success
    response.should render_template(:index)
    messages = assigns(:messages)
    messages.should_not be_nil
    messages.size.should == 2
    messages.should =~ [msg1, msg2]
  end
  
  it 'should test show' do
    @controller.stub!(:current_user).and_return(Factory(:user)) #stub authenticated user  
    msg = Factory(:message)
    get 'show', {:id => msg.id}
    response.should be_success
    response.body.should == msg.to_json
  end
  
  describe '#create' do
    it 'should create a message successfully' do
      @controller.stub!(:current_user).and_return(Factory(:user)) #stub authenticated user  
      message = Factory.build(:message)
      msg_params = message.attributes
      post 'create', {:message => msg_params}
      response.should be_success
      response.body.should_not be_nil
      Message.find_by_title(msg_params["title"]).should_not be_nil
    end
    
    it 'should not create a message successfully' do
      @controller.stub!(:current_user).and_return(Factory(:user)) #stub authenticated user  
      message = Factory.build(:message, :title => '', :name => '')
      msg_params = message.attributes
      post 'create', {:message => msg_params}
      response.should_not be_success
      response.body.should == "{\"title\":[\"can't be blank\"],\"name\":[\"can't be blank\"]}"
    end
  end
  
  describe '#update' do
    it 'should update message successfully' do
      @controller.stub!(:current_user).and_return(Factory(:user)) #stub authenticated user  
      message = Factory(:message)
      msg_params = message.attributes
      msg_params["message"] = 'message updated'
      put 'update', {:message => msg_params , :id => msg_params["id"]}
      response.should be_success
      message.reload
      message.message.should == 'message updated'
    end

    it 'should not update message successfully' do
      @controller.stub!(:current_user).and_return(Factory(:user)) #stub authenticated user  
      message = Factory(:message)
      msg_params = message.attributes
      msg_params["message"] = ''
      put 'update', {:message => msg_params , :id => msg_params["id"]}
      response.should_not be_success
      response.body.should == "{\"message\":[\"can't be blank\"]}"
      message.reload
      message.message.blank?.should be_false
    end
  end
  
  it 'should test destroy' do
    @controller.stub!(:current_user).and_return(Factory(:user)) #stub authenticated user  
    message = Factory(:message)
    delete 'destroy', {:id => message.id}
    response.should be_success
    response.body.should == message.to_json
  end
end
