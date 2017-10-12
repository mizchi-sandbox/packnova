Rails.application.routes.draw do
  get 'about', to: 'about#index'
  root 'home#index'
end
