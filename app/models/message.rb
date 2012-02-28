class Message < ActiveRecord::Base
  validates :title, :name, :message, :presence => true
  attr_reader :posted_at
  
  def posted_at
    self.created_at.to_s(:long)
  end
end
