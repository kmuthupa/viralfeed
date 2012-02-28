require 'spec_helper'

describe Message do
  it {should validate_presence_of(:title)}
  it {should validate_presence_of(:name)}
  it {should validate_presence_of(:message)}
  
  it 'should validate length of title' do
    message = Factory.build(:message, :title => 'a' * 252)
    message.save.should be_false
    message.valid?.should be_false
  end
  
  it 'should validate length of name' do
    message = Factory.build(:message, :name => 'a' * 252)
    message.save.should be_false
    message.valid?.should be_false
  end
  
  it 'should validate length of message' do
    message = Factory.build(:message, :message => 'a' * 3000)
    message.save.should be_false
    message.valid?.should be_false
  end
  
  it 'should return formatted posted at' do
    message = Factory(:message)
    message.stub!(:created_at).and_return(Date.parse('12-10-2011'))
    message.posted_at.should_not be_nil
    message.posted_at.should == "October 12, 2011"
  end
end
