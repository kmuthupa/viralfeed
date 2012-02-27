require 'spec_helper'

describe UsersHelper do
  it 'should test the header' do
    helper.header.should == "The Message Board"
  end
end
