class BrowserApiController < ApplicationController
	def geolocation
		render(:geolocation)
	end

	def local_storage
		render(:local_storage)
	end

	def ajax
		render(:ajax)
	end
end
