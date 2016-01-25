Rails.application.routes.draw do
  jsonapi_resources :websites
  jsonapi_resources :website_visits
end
