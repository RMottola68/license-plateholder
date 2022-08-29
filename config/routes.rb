Rails.application.routes.draw do
  
  resources :reviews
  resources :user_reviews
  resources :users, only: [:index, :show, :create, :update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show_me"
  patch "/users/:id/likes", to: "users#update_likes"
  delete "/logout", to: "sessions#destroy"
  get "/reviews", to: "reviews#index"
  post "/reviews", to: "reviews#create"
end
