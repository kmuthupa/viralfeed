Factory.define :message do |m|
  m.title {"#{Faker::Lorem.words}"}
  m.name {"#{Faker::Lorem.words}"}
  m.message {"#{Faker::Lorem.paragraph}"}
end