Rails.application.routes.draw do

  root "hello#index"
  get    "/login",   to: "sessions#new"
  post   "/login",   to: "sessions#create"
  delete '/items/:id' , to: 'items#destroy' ,as: 'items_delete'
  post '/items/:id' , to: 'items#create' ,as: 'items_create'
  post '/items/:id' , to: 'items#update' ,as: 'items_update'
  get '/items/:id' , to: 'items#skill_edit'
  get '/items/:user_id' , to: 'items#skill_edit' ,as: 'after_delete'
  get '/items/:id/skill_edit' ,to: 'items#skill_edit',as: 'skill_edit_user'
  get '/items/add_items/:id', to: 'items#add_items', as: 'add_items'
  resources :users, controller: 'users'
  resources :items, only: [:new, :create, :destroy, :update]  # destroy を追加

  resources :items do
    member do
      get 'items_delete'
      get 'items_update'
    end
  end
end

