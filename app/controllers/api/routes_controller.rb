class Api::RoutesController < ApplicationController
    
    def index
        @routes = Route.all
        render :index
    end
    
    def create
        @route = Route.new(route_params)
        if @route.save
            # redirect_to route_url(@route) dont know where to redirect yet
        else
            flash.now[:errors] = @route.errors.full_messages
            render :new
        end
  end
    
    def new
        render :new
    end

    def show
        @route = Route.find(params[:id])
        render :show
    end
    
    def edit
        @route = Route.find(params[:id])
        render :edit
    end

    def update
        @route = Route.find(params[:id])
        if @route.update_attributes(route_params)
            redirect_to route_url(@route)
        else
            flash.now[:errors] = @route.errors.full_messages
            render :edit
        end
    end


    def destroy
        
    end

    private 

    def routes_params
        params.require(:route).permit(:id, :activity, :description, :distance, :end_lat, :end_long, :start_long, :start_lat, :athlete_id)
    end

end
