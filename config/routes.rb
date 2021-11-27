Rails.application.routes.draw do
  
  namespace :api do 

    get '/products', to: 'products#index'

    resources :users, only: [:index, :show, :create, :update, :destroy]

    resources :products, only: [:index, :show, :create, :update, :destroy]
    
    get '/me', to: 'users#show'

    patch '/me', to: 'passwords#update'

    post '/admin', to: 'products#create'

    delete '/admin', to: 'products#destroy'

    post '/signup', to: 'users#create'

    post '/login', to: 'session#create'

    delete '/logout', to: 'session#destroy'

  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
