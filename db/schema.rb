# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_22_203700) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "routes", force: :cascade do |t|
    t.string "route_name", null: false
    t.float "distance"
    t.string "activity"
    t.float "start_lat"
    t.float "start_long"
    t.float "end_lat"
    t.float "end_long"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "athlete_id"
    t.string "route", null: false
    t.index ["athlete_id"], name: "index_routes_on_athlete_id"
    t.index ["route_name"], name: "index_routes_on_route_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "workouts", force: :cascade do |t|
    t.string "workout_title", null: false
    t.integer "athlete_id"
    t.float "distance"
    t.float "duration"
    t.float "elevation"
    t.string "sport"
    t.date "date"
    t.time "start_time"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["athlete_id"], name: "index_workouts_on_athlete_id"
    t.index ["workout_title"], name: "index_workouts_on_workout_title"
  end

end
