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
Workout.destroy_all

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
    route: "mn}nEd|dqUa~BlEtA_wAsiByCmSghBmG?aFeIcJQ{GvBqBrGqBdImGnFg@bFsNrBwHtAyD`@~BvBfEtAqB|Ew@tHrAfCcBpFsAxCy@vBj@zD`BzCxDp@gApFz\}k@cGnm@|COvHtAbFp@dEgCuEs@sDcA|GiCzCdBrEPbB`@tXxArBrBhTtAZ~Mj@hh@Z~y@nR``A`Cjk@kDxsAe]xCuEfJkPvVy_@hEiPtPj@kShHyChDgIzC}EMkK{KgCcJ?{G_F_CP_CQsEjK{C{KiJbHsApF_G`@_CxCMhK{ChCh@nFqBdIeAvIv@zDqBtALrGiDvBi@bHzGwB~B{CrEdAlCbAeAhClCNhDvBzO`GxD`@rAfJ_Cr@[lLw@zDdA`G?lEfAvBdA`GrAfJaJr@M|EzCbOpBvBlCzDzChCZnFtA`@pBvI_CfJkDtAaNnFuE`HmClEmChKqFO{GxCLlEeEbHcAoWQvb@Z~MtAnM~Fr@~FzDy@rO{CjKeElEmG|E_CjKLdI?lEuAvBaB`@h@nF_C~EuAjDrDvSdD`FcBbPsAbO~BhK~BhJeAlOiDpNyDdAbB`H[~E[lEMhC_CbHy@fCbB`GtEvBzCr@h@dIv@fJ{CvIzC`GNzDnBhCh@vBL`GsAxC[tH]vBpFnFtElEzC`@hD|DnNzLvDbP|KvInJ~EpFfCdi@?lOuIlGaGlSwIlg@pCvDwQpBuAtE`@hD`@lC?vt@qGlEu@bJgBtIaH`JcH`DsGraCwiB__@soBmG_FyLsHoFoF_G_UgAwIbB{K[wIdAkS[yRtAkZymC{wEwFuF????Ggq@x@miCraD`@]yeAbFmELqd@ZwQ",
    route_name: "Home to Observatory and Mullholland",
    start_lat: 34.0974603775323,
    start_long: -118.3503426879883,
    updated_at: "2021-03-29T19:12:13.889Z"
    )

workout1 = Workout.create!(
    athlete_id: 1,
    created_at: "2021-03-29T19:33:50.637Z",
    date: "2021-03-01",
    description: "Weather was perfect today. Met up with a friend in the middle and finished the ride!",
    distance: 43.7,
    elevation: 783,
    hours: 2,
    id: 1,
    minutes: 5,
    seconds: 13,
    sport: "Ride",
    start_time: "2000-01-01T06:33:00.000Z",
    updated_at: "2021-03-29T19:33:50.637Z",
    workout_title: "Ride to Azusa"
)

workout2 = Workout.create!(
    athlete_id: 1,
    created_at: "2021-03-29T22:41:04.562Z",
    date: "2021-03-03",
    description: "Pretty tiring",
    distance: 6.3,
    elevation: 213,
    hours: 0,
    id: 26,
    minutes: 58,
    seconds: 12,
    sport: "Run",
    start_time: "2000-01-01T08:42:00.000Z",
    updated_at: "2021-03-29T22:41:04.562Z",
    workout_title: "First Long Run"
)