require 'spec_helper'

describe User do
  
  before(:all) do
    @auth = {"provider" => 'twitter', "uid" => '3728221', "info" => {"name" => 'Karthik Sam'}}
  end
  
  it "should require uniqueness of uid" do
    User.create_with_omniauth(@auth)
    User.new.should validate_uniqueness_of(:uid)
  end
  
  it {should validate_presence_of(:name)}
  it {should validate_presence_of(:uid)}
  it {should validate_presence_of(:provider)}
  
  it 'should create a new user with twitter oauth credentials' do
    User.create_with_omniauth(@auth)
    user = User.find_by_uid('3728221')
    user.name.should == 'Karthik Sam'
    user.provider.should == 'twitter'
  end
end
