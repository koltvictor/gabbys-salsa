Rails.application.routes.draw do
  
  namespace :api do 

    resources :products, only: [:index, :show]

    # get '/products', to: 'products#index'

    resources :users, only: [:index, :show, :create, :update, :destroy]

    get '/me', to: 'users#show'

    post '/signup', to: 'users#create'

    post '/login', to: 'session#create'

    delete '/logout', to: 'session#destroy'

  # root 'welcome#index'
  # get 'sign_up', to: 'registrations#new'
  # post 'sign_up', to: 'registrations#create'
  # get 'sign_in', to: 'sessions#new'
  # post 'sign_in', to: 'sessions#create', as: 'log_in'
  # delete 'logout', to: 'sessions#destroy'
  # get 'password', to: 'passwords#edit', as: 'edit_password'
  # patch 'password', to: 'passwords#update'
  # get 'password/reset', to: 'password_resets#new'
  # post 'password/reset', to: 'password_resets#create'
  # get 'password/reset/edit', to: 'password_resets#edit'
  # patch 'password/reset/edit', to: 'password_resets#update'

  end

end
