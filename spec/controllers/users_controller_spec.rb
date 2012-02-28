require 'spec_helper'

describe UsersController do
  it 'should render sign in' do
    get 'signin'
    response.should be_success
    response.should render_template(:signin)
  end 
  
  it 'should redirect to messages page if user signed in' do
    @controller.stub!(:current_user).and_return(Factory(:user)) #stub authenticated user
    get 'signin'
    response.should be_redirect
  end
  
  describe '#create' do
    it 'should successfully create a new user with twitter oauth credentials' do
      request.env["omniauth.auth"] = {"provider" => 'twitter', "uid" => '3728121', "info" => {"name" => 'Nathan Sam'}}
      post 'create'
      response.should be_redirect
      user = User.find_by_provider_and_uid('twitter', '3728121')
      user.should_not be_nil
      session[:user_id].should == user.id
    end
    
    it 'should not create an existing authenticated user' do
      User.create_with_omniauth({"provider" => 'twitter', "uid" => '3728226', "info" => {"name" => 'Karthik Nathan'}})
      request.env["omniauth.auth"] = {"provider" => 'twitter', "uid" => '3728226', "info" => {"name" => 'Karthik Nathan'}}
      User.should_not_receive(:create_with_omniauth).with(any_args())
      post 'create'
      response.should be_redirect
      user = User.find_by_provider_and_uid('twitter', '3728226')
      user.should_not be_nil
      session[:user_id].should == user.id
    end
  end
  
  it 'should render sign out' do
    @controller.stub!(:current_user).and_return(Factory(:user)) #stub authenticated user
    get 'signout'
    response.should be_redirect
  end
  
  it 'should render error' do
    get 'error'
    response.should be_success
    response.should render_template(:error)
  end
end
