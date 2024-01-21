Rails.application.routes.draw do

  root "hello#index"
  get    "/login",   to: "sessions#new"
  post   "/login",   to: "sessions#create"
  delete '/items/:id' , to: 'items#destroy' ,as: 'items_delete'
  get '/items/:id/items_create' , to: 'items#create' ,as: 'items_create'
  get '/items/:id/items_update' , to: 'items#update' ,as: 'items_update'
  # get '/items/:id' , to: 'items#skill_edit'
  get '/items/:id' , to: 'items#skill_edit' ,as: 'after_delete'
  get '/items/:id/skill_edit' ,to: 'items#skill_edit',as: 'skill_edit_user'
  get '/items/add_items/:id', to: 'items#add_items', as: 'add_items'


  # post  "/items/:id/update_selected_day"   , to: 'items#update_selected_day'
  post  "/items/:id/skill_edit"   , to: 'items#skill_edit', as: 'update_selected_day'

  resources :users, controller: 'users'
  resources :items, only: [:new, :create, :destroy, :update]  # destroy を追加

  resources :items do
    member do
      get 'items_delete'
      get 'items_update'
      get 'items_create'
      post 'update_selected_day' 
    end
  end
end

