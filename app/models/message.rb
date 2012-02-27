class Message < ActiveRecord::Base
  validates :title, :name, :message, :presence => true
end
