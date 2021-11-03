Rails.application.routes.draw do
  
  namespace :api do 

    resources :products, only: [:index, :show]

    resources :users, only: [:index, :show, :create, :update, :destroy]

    # get '/me', to: 'users#show'

    # post '/signup', to: 'users#create'

    # post '/login', to: 'session#create'

    # delete '/logout', to: 'session#destroy'

  end

end
