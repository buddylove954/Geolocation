Rails.application.routes.draw do
  get '/geolocation' => 'browser_api#geolocation'

  get '/local_storage' => 'browser_api#local_storage'
end
