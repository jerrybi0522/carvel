require 'sinatra'

get '/' do
	erb :home
end

get '/contact' do
	erb :contact
end

get '/order' do
	erb :order
end