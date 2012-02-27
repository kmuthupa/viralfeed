require 'spec_helper'

describe MessagesController do 
  it 'should test index' do
    msg1 = Factory(:message)
    msg2 = Factory(:message)
    get 'index'
    response.should be_success
    response.should render_template(:index)
    messages = assigns(:messages)
    messages.should_not be_nil
    messages.size.should == 2
    messages.should =~ [msg1, msg2]
  end
  
  it 'should test show' do
    msg = Factory(:message)
    get 'show', {:id => msg.id}
    response.should be_success
    response.body.should == msg.to_json
  end
  
  it 'should test create' do
    message = Factory.build(:message)
    msg_params = message.attributes
    post 'create', {:message => msg_params}
    response.should be_success
    response.body.should_not be_nil
    Message.find_by_title(msg_params["title"]).should_not be_nil
  end
  
  it 'should test update' do
    message = Factory(:message)
    msg_params = message.attributes
    msg_params["message"] = 'message updated'
    put 'update', {:message => msg_params , :id => msg_params["id"]}
    response.should be_success
    message.reload
    response.body.should == message.to_json
    message.message.should == 'message updated'
  end
  
  it 'should test destroy' do
    message = Factory(:message)
    delete 'destroy', {:id => message.id}
    response.should be_success
    response.body.should == message.to_json
  end
end
