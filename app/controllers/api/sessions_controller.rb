class Api::SessionsController < ApplicationController
    before_action :ensure_login, only: [:destroy]

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login!(@user)
            render 'api/users/show'
        else 
            render json: ['Your username or password did not match. Please try again.'], status: 401
        end
    end


    def destroy
        logout!
        render json: {message: "Logout Successful"}
    end
end