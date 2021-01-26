class Api::RoutesController < ApplicationController
    
    def index
        @routes = Route.all
        render :index
    end
    
    def create
        @route = Route.new(route_params)
        if @route.save
            render 'api/routes/show'
        else
            render json: @route.errors.full_messages, status: 422
        end
    end
    

    def show
        @route = Route.find(params[:id])
        render :show
    end


    def update
        @route = Route.find(params[:id])
        if @route.update_attributes(route_params)
            render `api/routes/#{route.id}`
        else
            render json: @route.errors.full_messages, status: 422
        end
    end


    def destroy
        @route = Route.find(params[:id])
        if @route.destroy
            render :show
        else 
            render json: @route.errors.full_messages, status: 422
    end

    private 

    def routes_params
        params.require(:route).permit(:id, :activity, :description, :distance, :end_lat, :end_long, :start_long, :start_lat, :athlete_id)
    end

end
