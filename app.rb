require 'rubygems'
require 'sinatra'
require 'sinatra/reloader' # if development?
require 'sinatra/activerecord'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end
