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

	def spotify
		render(:spotify)
	end

	def search
		render(:search)
	end
end
