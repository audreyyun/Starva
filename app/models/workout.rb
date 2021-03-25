# == Schema Information
#
# Table name: workouts
#
#  id            :bigint           not null, primary key
#  date          :date
#  description   :text
#  distance      :float
#  elevation     :float
#  hours         :float
#  minutes       :float
#  seconds       :float
#  sport         :string
#  start_time    :time
#  workout_title :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  athlete_id    :integer
#
# Indexes
#
#  index_workouts_on_athlete_id     (athlete_id)
#  index_workouts_on_workout_title  (workout_title)
#
class Workout < ApplicationRecord
    validates :workout_title, presence: true

    belongs_to :user, 
    foreign_key: :athlete_id, 
    class_name: :User

end
