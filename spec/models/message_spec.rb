require 'spec_helper'

describe Message do
  it {should validate_presence_of(:title)}
  it {should validate_presence_of(:name)}
  it {should validate_presence_of(:message)}
  
  it 'should return formatted posted at' do
    message = Factory(:message)
    message.stub!(:created_at).and_return(Date.parse('12-10-2011'))
    message.posted_at.should_not be_nil
    message.posted_at.should == "October 12, 2011"
  end
end
