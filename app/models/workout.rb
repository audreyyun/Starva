class Workout < ApplicationRecord
    validates :workout_title, presence: true

    belongs_to :user, 
    foreign_key: :athlete_id, 
    class_name: :User

end