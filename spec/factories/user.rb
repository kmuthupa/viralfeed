Factory.define :user do |f|
  f.name {"#{Faker::Name.first_name} #{Faker::Name.last_name}"}
  f.uid {rand(8000).to_s}
  f.provider {'twitter'}
end