module UsersHelper
  def header(user=nil)
    user ? "#{user.name}'s Message Board" : "The Message Board"
  end
end
