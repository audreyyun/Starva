# == Schema Information
#
# Table name: routes
#
#  id          :bigint           not null, primary key
#  activity    :string
#  description :text
#  distance    :float
#  end_lat     :float
#  end_long    :float
#  route_name  :string           not null
#  start_lat   :float
#  start_long  :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  athlete_id  :integer
#
# Indexes
#
#  index_routes_on_athlete_id  (athlete_id)
#  index_routes_on_route_name  (route_name)
#
class Route < ApplicationRecord
    validates :route_name, presence: true
    # validates :distance, :activity, allow_nil: true
    # validates :start_lat, :start_long, allow_nil: true
    # validates :end_lat, :end_long, allow_nil: true
    # validates :description, allow_nil: true

    belongs_to :user, 
    foreign_key: :athlete_id, 
    class_name: :User

end
