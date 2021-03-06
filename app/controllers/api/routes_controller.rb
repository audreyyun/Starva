class Api::RoutesController < ApplicationController
    
    def index
        @routes = Route.all
        render :index
    end
    
    def create
        @route = Route.new(routes_params)
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
        if @route.update_attributes(routes_params)
            render 'api/routes/show'
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
    end

    private 

    def routes_params
        params.require(:route).permit(:id, :route, :route_name, :activity, :description, :distance, :end_lat, :end_long, :start_long, :start_lat, :athlete_id)
    end

end
