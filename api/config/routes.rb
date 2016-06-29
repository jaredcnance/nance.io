Rails.application.routes.draw do
  root 'launch#index'
  jsonapi_resources :websites
  jsonapi_resources :website_visits
  jsonapi_resources :website_tags
  jsonapi_resources :tags
end
