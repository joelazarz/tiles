Rails.application.routes.draw do
  
  resources :comments
  namespace :api do
    resources :boards
    resources :blocks
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
