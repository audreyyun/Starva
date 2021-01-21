# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# {username: "guest", email: "guest@gmail.com", first_name: "G", last_name: "Uest", password: "password" }
User.destroy_all

demo_user = User.create!( 
    email: "guest@guest.com",
    password: "password"
)