class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :workout_title, null: false
      t.integer :athlete_id
      t.float :distance
      t.float :hours
      t.float :minutes
      t.float :seconds
      t.float :elevation
      t.string :sport
      t.date :date
      t.time :start_time
      t.text :description

      t.timestamps
    end

    add_index :workouts, :workout_title
    add_index :workouts, :athlete_id
  end
end
