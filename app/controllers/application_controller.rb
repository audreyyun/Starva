class ApplicationController < ActionController::Base
    helper_method :ensure_login, :current_user, :logged_in?, :logout!
    protect_from_forgery with: :null_session
    protect_from_forgery with: :reset_session, only: :logout!

    def current_user
    return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_login
        redirect_to new_session_url unless logged_in?
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
