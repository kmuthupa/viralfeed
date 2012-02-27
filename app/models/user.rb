class User < ActiveRecord::Base
  validates_uniqueness_of :uid
  validates :provider, :name, :uid, :presence => true 
  
  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
    end
  end
end
