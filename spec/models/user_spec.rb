require 'spec_helper'

describe User do
  it 'should create a new user with twitter oauth credentials' do
    auth = {"provider" => 'twitter', "uid" => '3728221', "user_info" => {"name" => 'Karthik Sam'}}
    User.create_with_omniauth(auth)
    user = User.find_by_uid('3728221')
    user.name.should == 'Karthik Sam'
    user.provider.should == 'twitter'
  end
end
