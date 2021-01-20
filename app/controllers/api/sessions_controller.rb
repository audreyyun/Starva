class Api::SessionsController < ApplicationController
    before_action :ensure_login, only: [:destroy]
    def create
        @user = User.find_by_credentials( params[:user][:username], params[:user][:password])

        if @user
            login!(@user)
            render 'api/users/show'
        else 
            render json: ['Invalid username and/or password'], status: 401
        end
    end

    def new
        render :new
    end

    def destroy
        logout!
        render json: {message: "Logout Successful"}
        # render "api/users/show"
    end
end