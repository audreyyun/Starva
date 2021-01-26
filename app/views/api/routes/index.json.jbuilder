json.extract! @route, :id, :activity, :description, :distance, :end_lat, :end_long, :start_long, :start_lat, :athlete_id

@routes.each do |route|
    json.set! route.id do
        json.partial! 'route', route: @route
    end
end