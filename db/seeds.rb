# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# {username: "guest", email: "guest@gmail.com", first_name: "G", last_name: "Uest", password: "password" }
User.destroy_all
Route.destroy_all

demo_user = User.create!( 
    id: 1,
    email: "guest@email.com",
    password: "password1", 
    first_name: "Audrey",
    last_name: "Yun"
    )

route1 = Route.create!( 
    id: 2,
    activity: nil,
    athlete_id: 1,
    created_at: "2021-03-31T16:30:29.534Z",
    description: "Good workout, approximately 2 hours",
    distance: 39.54,
    end_lat: nil,
    end_long: nil,
    route: "mn}nEd|dqUa~BlEtA_wAsiByCmSghBmG?aFeIcJQ{GvBqBrGqB…yRtAkZymC{wEwFuF????Ggq@x@miCraD`@]yeAbFmELqd@ZwQ",
    route_name: "Home to Observatory and Mullholland",
    start_lat: 34.070946109880985,
    start_long: -118.3227450446413,
    updated_at: "2021-03-31T16:30:29.534Z"
    )

route2 = Route.create!(
    id: 1,
    activity: nil,
    athlete_id: 1,
    created_at: "2021-03-29T19:12:13.889Z",
    description: "Relatively flat and scenic",
    distance: 47.78,
    end_lat: nil,
    end_long: nil,
    route: "ctboErhjqUpzFoYnzDfaG~{KdeLxoTsxJil@umTkpa@knAuyCasCgdE~yG__@pgI",
    route_name: "Beach Ride",
    start_lat: 34.0974603775323,
    start_long: -118.3503426879883,
    updated_at: "2021-03-29T19:12:13.889Z"
    )