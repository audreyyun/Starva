class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save 
            login!(@user)
            render :show
        else 
            render json: ['This email address is already taken', 'Your password must be at least 8 characters long'], status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    private 
    def user_params
        params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
    end
end