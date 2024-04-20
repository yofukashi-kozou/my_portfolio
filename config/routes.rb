Rails.application.routes.draw do

  root "hello#index"
  get "/logout",  to: "sessions#destroy"
  delete "/logout",  to: "sessions#destroy"
  get    "/login",   to: "sessions#new" 
  get    "/users/new",   to: "users#new" ,as: 'new_user'
  post   "/login",   to: "sessions#create"
  delete '/items/:id' , to: 'items#destroy' ,as: 'items_delete'
  post '/items/:id/items_create' , to: 'items#create' ,as: 'items_create_item'
  patch '/items/:id/items_update', to: 'items#update', as: 'items_update'
  post '/items/skill_edit' ,to: 'items#skill_edit',as: 'skill_edit'






  # get '/items/:id' , to: 'items#skill_edit' ,as: 'after_delete'
  get '/items/skill_edit' ,to: 'items#skill_edit',as: 'skill_edit_user'
  get '/items/add_items/:id', to: 'items#add_items', as: 'add_items'

  resources :users, controller: 'users'

  resources :items, only: [:new, :create, :destroy, :update] do
    member do
      get 'items_delete'
      get 'items_update' 
      get 'items_create'
      post 'update_selected_day' 
    end
  end
end

