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
#  route       :string           not null
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
require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
