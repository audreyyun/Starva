class Api::WorkoutsController < ApplicationController

    def index
        @workouts = Workout.all
        render :index
    end
    
    def create
        @workout = Workout.new(workouts_params)
        if @workout.save
            render 'api/workouts/show'
        else
            render json: @workout.errors.full_messages, status: 422
        end
    end
    

    def show
        @workout = Workout.find(params[:id])
        render :show
    end


    def update
        @workout = Workout.find(params[:id])
        if @workout.update_attributes(workouts_params)
            render 'api/workouts/show'
        else
            render json: @workout.errors.full_messages, status: 422
        end
    end


    def destroy
        @workout = Workout.find(params[:id])
        if @workout.destroy
            render :show
        else 
            render json: @workout.errors.full_messages, status: 422
        end
    end

    private 

    def workouts_params
        params.require(:workout).permit(:id, :hours, :minutes, :seconds, :start_time, :date, :workout_title, :sport, :description, :elevation, :distance, :duration, :athlete_id)
    end
    
end
