class Message < ActiveRecord::Base
  validates :title, :name, :message, :presence => true
  validates_length_of :title, :name, :within => 1..250, :allow_blank => true
  validates_length_of :message, :within => 1..2900, :allow_blank => true
  attr_reader :posted_at
  
  def posted_at
    self.created_at.to_s(:long)
  end
end
