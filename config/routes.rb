Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    get '/users/sign_out', to: 'devise/sessions#destroy'
  end
  resources :beds

  root 'pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
