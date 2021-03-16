# json.extract! @user, :id, :username, :email, :first_name, :last_name
json.partial! "api/users/user", user: @user