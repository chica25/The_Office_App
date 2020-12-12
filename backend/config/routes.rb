Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do
      resources :characters, only: [:index, :update] do
       resources :quotes, only: [:index]
     end
  end
end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/test', to: 'application#test'
end
