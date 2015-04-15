Rails.application.routes.draw do
  get '/geolocation' => 'browser_api#geolocation'
end
