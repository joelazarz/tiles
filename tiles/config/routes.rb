Rails.application.routes.draw do

  namespace :api do
    resources :boards
    resources :blocks
    resources :comments
  end

end
